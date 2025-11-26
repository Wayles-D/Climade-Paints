const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4, // Force IPv4
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Contact Transporter Error:", error);
  } else {
    console.log("Contact Transporter is ready to send emails");
  }
});

// POST /api/contact - Handle contact form submissions
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #CC323A;">New Contact Form Submission</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${
                          phone || "Not provided"
                        }</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <hr style="border: 1px solid #ddd; margin: 15px 0;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <p style="color: #666; font-size: 12px;">This email was sent from the Climade Paints contact form.</p>
                </div>
            `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Larr Medas Decorations",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #CC323A;">Thank You for Contacting Us!</h2>
                    <p>Dear ${name},</p>
                    <p>We have received your message and will get back to you within 24 hours.</p>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Your Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <p>If you need immediate assistance, please call us at <strong>+1 (555) 123-4567</strong> or reach out via WhatsApp.</p>
                    <p>Best regards,<br>The Larr Medas DecorationsTeam</p>
                </div>
            `,
    };

    // Send emails in background (don't await)
    Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]).catch((err) => console.error("Background email sending failed:", err));

    // Respond immediately
    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ message: "Failed to submit contact form" });
  }
});

module.exports = router;
