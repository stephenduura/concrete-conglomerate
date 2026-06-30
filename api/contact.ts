import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.SMTP_RECEIVER || "contact@concreteconglomerate.com";
  const sender = process.env.SMTP_SENDER || `"Concrete Contact" <no-reply@concreteconglomerate.com>`;

  // In simulated mode if SMTP keys are not defined
  if (!host || !user || !pass) {
    console.warn("WARNING: SMTP credentials not fully configured in environment variables.");
    console.log("SIMULATED ENQUIRY:");
    console.log(`From: ${name} (${email})`);
    console.log(`Company: ${company || "None"}`);
    console.log(`Message: ${message}`);
    return res.status(200).json({
      success: true,
      message: "Inquiry processed successfully (Simulated Mode)",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: sender,
      to: receiver,
      replyTo: email,
      subject: `New Corporate Inquiry: ${name} (${company || "No Company"})`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #C41E24; border-bottom: 2px solid #C41E24; padding-bottom: 10px; margin-top: 0;">New Corporate Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company || "<em>Not provided</em>"}</td>
            </tr>
          </table>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #C41E24; margin-top: 10px;">
            <h4 style="margin-top: 0; margin-bottom: 8px; color: #333;">Message:</h4>
            <p style="margin: 0; line-height: 1.5; color: #555; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 25px 0;" />
          <p style="font-size: 11px; color: #888; margin: 0; text-align: center;">
            This inquiry was sent from the contact form on Concrete Petroleum & Gas Ltd website.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Inquiry sent successfully" });
  } catch (error: any) {
    console.error("SMTP Error:", error.message || error);
    return res.status(500).json({ error: "Failed to dispatch inquiry email." });
  }
}
