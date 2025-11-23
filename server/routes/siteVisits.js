const express = require('express');
const router = express.Router();
const SiteVisit = require('../models/SiteVisit');
const nodemailer = require('nodemailer');

// Configure Nodemailer Transporter
// You should use environment variables for these credentials
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// POST a new site visit request
router.post('/', async (req, res) => {
    const siteVisit = new SiteVisit({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        preferredDate: req.body.preferredDate,
        message: req.body.message,
    });

    try {
        const newSiteVisit = await siteVisit.save();

        // Email to Client (Admin)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL, // The client's email
            subject: 'New Site Visit Request - Climade Paints',
            html: `
        <h2>New Site Visit Request</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Address:</strong> ${req.body.address}</p>
        <p><strong>Preferred Date:</strong> ${req.body.preferredDate}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>
      `,
        };

        // Email to User (Confirmation)
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: 'Site Visit Request Received - Climade Paints',
            html: `
        <h2>Request Received</h2>
        <p>Dear ${req.body.name},</p>
        <p>Thank you for requesting a site visit. We have received your details and will be in touch shortly to confirm the appointment.</p>
        <br>
        <p>Best regards,</p>
        <p>Climade Paints Team</p>
      `,
        };

        // Send Emails
        // Note: In production, you might want to use a queue for this
        try {
            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(userMailOptions);
            console.log('Emails sent successfully');
        } catch (emailError) {
            console.error('Error sending emails:', emailError);
            // We don't fail the request if email fails, but we log it
        }

        res.status(201).json(newSiteVisit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
