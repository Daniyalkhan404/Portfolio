import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Environment variable for your Gmail
        pass: process.env.EMAIL_PASS, // Environment variable for your Gmail password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "khandaniyal404@gmail.com", // Replace with your email
      subject: `Contact Form Submission from ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email.", error }, { status: 500 });
  }
}
