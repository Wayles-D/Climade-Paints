const express = require("express");
const router = express.Router();
const SiteVisit = require("../models/SiteVisit");

const { sendEmail } = require("../utils/emailService");

// POST a new site visit request
router.post("/", async (req, res) => {
  const { name, email, phone, address, preferredDate, message } = req.body;

  const siteVisit = new SiteVisit({
    name,
    email,
    phone,
    address,
    preferredDate,
    message,
  });

  try {
    // 1. Save to DB
    const newSiteVisit = await siteVisit.save();

    // 2. Send Email to Admin (Client)
    const adminHtmlContent = `
          <h2>New Site Visit Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `;

    await sendEmail({
      to: process.env.CLIENT_EMAIL,
      subject: `New Site Visit Request from ${name}`,
      htmlContent: adminHtmlContent,
      replyTo: email,
    });

    // 3. Send Confirmation to User
    const userHtmlContent = `
          <h2>Site Visit Request Received</h2>
          <p>Hello ${name},</p>
          <p>We have received your request for a site visit at <strong>${address}</strong> on <strong>${preferredDate}</strong>.</p>
          <p>Our team will review your request and contact you shortly to confirm the details.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Larr Medas Team</strong></p> 
        `;

    await sendEmail({
      to: email,
      subject: "Site Visit Request Received - Larr Medas Decorations",
      htmlContent: userHtmlContent,
      replyTo: process.env.CLIENT_EMAIL,
    });

    console.log("Site visit saved and emails sent:", newSiteVisit._id);
    res.status(201).json(newSiteVisit);
  } catch (err) {
    console.error("Error processing site visit:", err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
