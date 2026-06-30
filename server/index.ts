import express from "express";
import { createServer } from "http";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle contact inquiries
  app.post("/api/contact", async (req, res) => {
    const { name, email, company, message } = req.body;
    console.log("-----------------------------------------");
    console.log("RECEIVED OPERATIONAL BRIEF INQUIRY:");
    console.log("Name:    ", name);
    console.log("Email:   ", email);
    console.log("Company: ", company);
    console.log("Message: ", message);
    console.log("-----------------------------------------");

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.SMTP_RECEIVER || "contact@concreteconglomerate.com";
    // Hostinger SMTP requires the 'from' address to match the authenticated SMTP user
    const sender = process.env.SMTP_SENDER || `"${name} via Website" <${user || "contact@concreteconglomerate.com"}>`;

    // If SMTP variables are missing, fallback to simulated success in dev
    if (!host || !user || !pass) {
      console.warn("WARNING: SMTP credentials not fully configured in environment variables.");
      console.warn("Inquiry processed successfully in simulated dev mode.");
      return res.status(200).json({ success: true, message: "Inquiry processed (Simulated Dev Mode)" });
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
      console.log(`Successfully dispatched inquiry email from ${email} to ${receiver}`);
      res.status(200).json({ success: true, message: "Inquiry sent successfully" });
    } catch (error: any) {
      console.error("SMTP Error: Failed to send email via transport:", error.message || error);
      res.status(500).json({ error: "Failed to dispatch inquiry email." });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
