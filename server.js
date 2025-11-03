const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(cors());

// Multer setup for file uploads (saved temporarily)
const upload = multer({ dest: "uploads/" });

// Route to handle form submission
app.post("/send-email", upload.single("attachment"), async (req, res) => {
  const { name, email, subject, message } = req.body;
  const attachment = req.file;

  try {
    // Configure mail transporter using .env variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail address from .env
        pass: process.env.EMAIL_PASS  // App password from .env
      }
    });

    // Prepare the email message
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // The address where you want to receive emails
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      attachments: attachment
        ? [
            {
              filename: attachment.originalname,
              path: attachment.path
            }
          ]
        : []
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Delete uploaded file after sending
    if (attachment && fs.existsSync(attachment.path)) {
      fs.unlinkSync(attachment.path);
    }

    console.log(`✅ Message sent successfully from ${email}`);
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

