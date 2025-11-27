const express = require("express");
const router = express.Router();
const SiteVisit = require("../models/SiteVisit");

// POST a new site visit request
// Note: Email sending is handled by the frontend via EmailJS
router.post("/", async (req, res) => {
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
    console.log("Site visit saved to DB:", newSiteVisit._id);
    res.status(201).json(newSiteVisit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
