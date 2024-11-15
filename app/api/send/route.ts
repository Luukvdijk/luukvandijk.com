"use server";
import { Resend } from "resend";

type FormData = {
  name: string;
  email: string;
  websiteGoal: string;
  keyFeatures: string;
  timeline: string;
  extraInfo: string;
};

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const postEmail = async (formData: FormData) => {
  try {
    const response = await resend.emails.send({
      from: "client@luukvandijk.com",
      to: "luukvandijk2003@gmail.com",
      subject: "new client",
      text: `Naam: ${formData.name}\n Email: ${formData.email}\n Doel website: ${formData.websiteGoal}\n Belangrijke functies: ${formData.keyFeatures}\n Tijdslijn: ${formData.timeline}\n Extra informatie: ${formData.extraInfo}\n`,
    });

    return JSON.stringify(response);
  } catch (error) {
    return JSON.stringify(error);
  }
};
