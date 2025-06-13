"use server";
import { rateLimit } from "@/lib/rateLimit";
import { headers } from "next/headers";

import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "info@noimos.ai",
  from: "no_reply@noimos.ai",
  subject: "Website Contact Form Submission",
};

export const contactUsAction = async (state: any, formData: FormData) => {
  try {
    rateLimit("contactUs", 2);
    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if (!name || !email || !message) {
      throw new Error("Please fill in all required fields.");
    }
    await sgMail.send({
      ...msg,
      text: `Contact Us Form Submission:\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
    });

    return {
      success: true,
      message: "Thank you for contacting us! We will get back to you soon.",
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error 'Contact Us' sending email:", error);
    return {
      success: false,
      message,
    };
  }
};
