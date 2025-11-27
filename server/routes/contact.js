const express = require("express");
const router = express.Router();

// POST /api/contact - Handle contact form submissions
// Note: Email sending is handled by the frontend via EmailJS
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    // Here we would typically save to a database if you have a Contact model
    // For now, we just log it and return success since the email is sent by frontend
    console.log("Contact form submission received:", { name, email, subject });

    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ message: "Failed to submit contact form" });
  }
});

module.exports = router;
