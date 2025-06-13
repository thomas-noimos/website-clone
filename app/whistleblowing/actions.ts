"use server";
import { rateLimit } from "@/lib/rateLimit";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "nadja.werren@noimos.ai",
  from: "no_reply@noimos.ai",
  subject: "Whistleblowing Report",
};

export const whistleblowingAction = async (state: any, formData: FormData) => {
  try {
    rateLimit("whistleblowing", 2);
    const message = formData.get("message");

    await sgMail.send({
      ...msg,
      text: `Whistleblowing Report:\n\n${message}`,
    });

    return {
      success: true,
      message: "Thank you for your report! We will review it promptly.",
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending email:", error);
    return {
      success: false,
      message,
    };
  }
};
