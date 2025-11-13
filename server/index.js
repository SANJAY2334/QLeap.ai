import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// POST: Contact Form
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields.",
    });
  }

  try {
    // Send email
    const mail = await resend.emails.send({
      from: "QLeap.ai <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL, 
      subject: `QLeap Contact - ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    console.log("Email sent successfully:", mail.id);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending the message.",
    });
  }
});

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "🩺 QLeap.ai backend is healthy and running on Resend.",
    status: "OK",
    uptime: `${process.uptime().toFixed(2)}s`,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
