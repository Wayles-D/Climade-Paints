const SibApiV3Sdk = require("sib-api-v3-sdk");

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendEmail = async ({ to, subject, htmlContent, replyTo }) => {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;
  sendSmtpEmail.sender = {
    name: process.env.SENDER_NAME || "Larr Medas Decorations",
    email: process.env.SENDER_EMAIL,
  };
  sendSmtpEmail.to = [{ email: to }];

  if (replyTo) {
    sendSmtpEmail.replyTo = { email: replyTo };
  }

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(
      "Email sent successfully. Returned data: " + JSON.stringify(data)
    );
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error("Brevo Error Body:", error.response.body);
    }
    throw error;
  }
};

module.exports = { sendEmail };
