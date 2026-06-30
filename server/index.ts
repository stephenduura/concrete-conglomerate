import express from "express";
import { createServer } from "http";
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
  app.post("/api/contact", (req, res) => {
    const { name, email, company, message } = req.body;
    console.log("-----------------------------------------");
    console.log("RECEIVED OPERATIONAL BRIEF INQUIRY:");
    console.log("Name:    ", name);
    console.log("Email:   ", email);
    console.log("Company: ", company);
    console.log("Message: ", message);
    console.log("-----------------------------------------");
    res.status(200).json({ success: true, message: "Inquiry processed" });
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
