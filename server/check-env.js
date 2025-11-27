require("dotenv").config();

console.log("--- Environment Variable Check ---");
console.log("PORT:", process.env.PORT);
console.log(
  "MONGODB_URI:",
  process.env.MONGODB_URI
    ? "Loaded (starts with " + process.env.MONGODB_URI.substring(0, 10) + "...)"
    : "MISSING"
);
console.log(
  "BREVO_API_KEY:",
  process.env.BREVO_API_KEY
    ? "Loaded (starts with " +
        process.env.BREVO_API_KEY.substring(0, 10) +
        "...)"
    : "MISSING"
);
console.log("SENDER_EMAIL:", process.env.SENDER_EMAIL);
console.log("--------------------------------");
