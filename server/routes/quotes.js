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
});

// POST /api/quotes - Handle quote request submissions
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      projectType,
      propertyType,
      squareFootage,
      rooms,
      timeline,
      budget,
      description,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !projectType ||
      !propertyType ||
      !timeline
    ) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Quote Request from ${name}`,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #CC323A;">New Quote Request</h2>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Address:</strong> ${address}</p>
                    </div>

                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Project Details</h3>
                        <p><strong>Project Type:</strong> ${projectType}</p>
                        <p><strong>Property Type:</strong> ${propertyType}</p>
                        <p><strong>Square Footage:</strong> ${
                          squareFootage || "Not specified"
                        }</p>
                        <p><strong>Number of Rooms:</strong> ${
                          rooms || "Not specified"
                        }</p>
                        <p><strong>Timeline:</strong> ${timeline}</p>
                        <p><strong>Budget Range:</strong> ${
                          budget || "Not specified"
                        }</p>
                    </div>

                    ${
                      description
                        ? `
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Additional Details</h3>
                        <p style="white-space: pre-wrap;">${description}</p>
                    </div>
                    `
                        : ""
                    }

                    <p style="color: #666; font-size: 12px;">This email was sent from the Climade Paints quote request form.</p>
                </div>
            `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Quote Request - Climade Paints",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #CC323A;">Thank You for Your Quote Request!</h2>
                    <p>Dear ${name},</p>
                    <p>We have received your quote request and our team is reviewing the details. We will prepare a detailed estimate and get back to you within 24-48 hours.</p>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Your Request Summary</h3>
                        <p><strong>Project Type:</strong> ${projectType}</p>
                        <p><strong>Property Type:</strong> ${propertyType}</p>
                        <p><strong>Timeline:</strong> ${timeline}</p>
                        <p><strong>Address:</strong> ${address}</p>
                    </div>

                    <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #CC323A;">
                        <h3 style="color: #333; margin-top: 0;">What Happens Next?</h3>
                        <ol style="padding-left: 20px;">
                            <li>Our team will review your project details</li>
                            <li>We'll prepare a comprehensive quote</li>
                            <li>You'll receive a detailed estimate via email</li>
                            <li>We can schedule a sit <div className="text-center">
            <h1 className="poppins-black text-2xl text-[#CC323A]">
              What We Do
            </h1>
            <h2>Core offerings tailored to your property and schedule.</h2>
          </div>e visit if needed</li>
                        </ol>
                    </div>

                    <p>If you have any immediate questions, please don't hesitate to contact us:</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567<br>
                    <strong>Email:</strong> contact@climadepaints.com</p>
                    
                    <p>Best regards,<br>The Climade Paints Team</p>
                </div>
            `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Quote request submitted successfully" });
  } catch (error) {
    console.error("Error processing quote request:", error);
    res.status(500).json({ message: "Failed to submit quote request" });
  }
});

module.exports = router;
