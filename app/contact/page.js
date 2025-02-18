"use client";

import { useState } from "react";
import { sendEmail } from "../actions"; // Import the function

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setPending(true);
    setMessage(null);

    const formData = new FormData(event.target);

    try {
      const response = await sendEmail(formData); // Call the actual function
      if (response.error) {
        setMessage({ type: "error", text: response.error });
      } else {
        setMessage({ type: "success", text: "Message sent successfully!" });
        event.target.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage({ type: "error", text: "An error occurred. Please try again." });
    }

    setPending(false);
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-40 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-12">Contact Me</h1>

        <div className="space-y-8">
          <p className="text-xl text-foreground leading-relaxed">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or
            just want to connect!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {message && (
              <div
                className={`p-4 rounded-md ${
                  message.type === "error" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {pending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
