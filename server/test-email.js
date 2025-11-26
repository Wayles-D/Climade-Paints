require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendTestEmail() {
  console.log("Testing email configuration...");
  console.log(`User: ${process.env.EMAIL_USER}`);
  console.log(`Pass: ${process.env.EMAIL_PASS ? "********" : "Not Set"}`);
  console.log(`To: ${process.env.ADMIN_EMAIL}`);

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "Test Email from Climade Paints",
      text: "If you receive this, your email configuration is working correctly!",
    });
    console.log("✅ Success! Email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending email:");
    console.error(error);
  }
}

sendTestEmail();
