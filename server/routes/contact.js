const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { sendEmail } = require("../utils/emailService");

// POST /api/contact - Handle contact form submissions
router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields" });
  }

  try {
    // 1. Save to Database
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });
    await newContact.save();

    // 2. Send Email to Admin (Client)
    const adminHtmlContent = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    await sendEmail({
      to: process.env.CLIENT_EMAIL,
      subject: `New Contact: ${subject}`,
      htmlContent: adminHtmlContent,
      replyTo: email,
    });

    // 3. Send Confirmation to User
    const userHtmlContent = `
      <h2>We received your message!</h2>
      <p>Hello ${name},</p>
      <p>Thank you for reaching out to Larr Medas Decorations. We have received your message regarding "<strong>${subject}</strong>".</p>
      <p>Our team will review it and get back to you within 24 hours.</p>
      <br/>
      <p>Best regards,</p>
      <p><strong>Larr Medas Decorations Team</strong></p>
    `;

    await sendEmail({
      to: email,
      subject: "Thank you for contacting Larr Medas Decorations",
      htmlContent: userHtmlContent,
      replyTo: process.env.CLIENT_EMAIL,
    });

    console.log("Contact form processed successfully");
    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ message: "Failed to submit contact form" });
  }
});

module.exports = router;
