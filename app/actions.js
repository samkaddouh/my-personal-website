"use server"

import nodemailer from "nodemailer"

export async function sendEmail(formData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Basic validation
    if (!name || !email || !message) {
      return {
        error: "All fields are required",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        error: "Please enter a valid email address",
      }
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail", // Instead of manually setting host/port
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      

    // Send email
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "samkaddouh@gmail.com", // Your email address
      subject: "New Message",
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log("Message sent: %s", info.messageId)

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      error: "Failed to send message. Please try again.",
    }
  }
}

