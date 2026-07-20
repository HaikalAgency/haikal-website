import nodemailer from "nodemailer";
import { simpleRateLimit, sanitize, isValidEmail } from "./utils.js";

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const clientIp = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
  if (!simpleRateLimit(clientIp)) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  try {
    const { name, company, email, phone, service, details } = req.body || {};

    const errors = [];
    if (!name || !String(name).trim()) errors.push("Name is required.");
    if (!email || !String(email).trim()) errors.push("Email is required.");
    else if (!isValidEmail(email)) errors.push("Email format is invalid.");
    if (!details || !String(details).trim()) errors.push("Details are required.");
    if (phone && phone.length > 30) errors.push("Phone number too long.");
    if (name && name.length > 100) errors.push("Name too long.");
    if (details && details.length > 5000) errors.push("Details too long.");

    if (errors.length) {
      return res.status(400).json({ error: errors.join(" ") });
    }

    const cleanName = sanitize(name).trim();
    const cleanCompany = sanitize(company || "").trim();
    const cleanEmail = sanitize(email).trim();
    const cleanPhone = sanitize(phone || "").trim();
    const cleanService = sanitize(service || "").trim();
    const cleanDetails = sanitize(details).trim();

    const recipientEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS not configured");
      return res.status(500).json({ error: "Server configuration error." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `New Project Inquiry from ${cleanName}${cleanCompany ? ` (${cleanCompany})` : ""}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nDetails: ${cleanDetails}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Company:</strong> ${cleanCompany || "N/A"}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Phone:</strong> ${cleanPhone || "N/A"}</p>
        <p><strong>Service Needed:</strong> ${cleanService || "N/A"}</p>
        <h3>Project Details:</h3>
        <p>${cleanDetails.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
