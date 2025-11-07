"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState(false);
  const email = "gananthakris@binghamton.edu";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get("success") === "true") {
        setSuccess(true);
      }
    }
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 p-6">
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'd love to hear from you! Let's start a conversation.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
          {success && (
            <div className="mb-6 rounded-lg bg-green-100/80 dark:bg-green-900/30 border border-green-500/30 text-green-700 dark:text-green-300 px-4 py-3 text-sm font-medium animate-fade-in">
              ✅ Message sent successfully. Thanks for reaching out!
            </div>
          )}

          {/* Email Section */}
          <div className="mb-8 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200/50 dark:border-blue-800/50">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Email me directly at:
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="flex-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                {email}
              </a>
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                {copied ? "✅ Copied!" : "📋 Copy"}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid gap-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="0859c9a7-504c-4b73-9c2a-f9a82bd27d5c"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://portfolio-site-abc123.vercel.app/contact?success=true"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project or just say hello..."
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 text-sm font-semibold hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
