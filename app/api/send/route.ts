"use server";
import { Resend } from "resend";

type FormData = {
  name: string;
  email: string;
  websiteGoal: string;
  keyFeatures: string;
  timeline: string;
  extraInfo?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    const { data, error } = await resend.emails.send({
      from: "client@luukvandijk.com",
      to: "luukvandijk2003@gmail.com",
      subject: "new client",
      text: `Naam: ${formData.name}\n Email: ${formData.email}\n Doel website: ${formData.websiteGoal}\n Belangrijke functies: ${formData.keyFeatures}\n Tijdslijn: ${formData.timeline}\n Extra informatie: ${formData.extraInfo}\n`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
