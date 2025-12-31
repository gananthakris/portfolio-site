"use client";

import { useState } from "react";
import { contact } from "@/lib/singlegrain-real-content";
import { motion } from "framer-motion";

export default function SGContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    phone: "",
    message: "",
    source: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      phone: "",
      message: "",
      source: "",
      newsletter: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <section className="section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4 text-gray-900">
            {contact.headline}
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            {contact.subheadline}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            {contact.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contact.trustBullets.map((bullet, idx) => (
              <span key={idx} className="text-sm text-gray-600">
                {bullet}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-xl p-8 md:p-12"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                {contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sg-blue"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                {contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sg-blue"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                {contact.form.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sg-blue"
                placeholder="Company Inc."
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                {contact.form.budget}
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sg-blue"
              >
                <option value="">Select budget range</option>
                {contact.budgetOptions.map((option, idx) => (
                  <option key={idx} value={option.toLowerCase().replace(/\s+/g, "-")}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                {contact.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sg-blue"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                {contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sg-blue"
                placeholder="Tell us about your marketing needs..."
              />
            </div>

            <div>
              <label htmlFor="source" className="block text-sm font-semibold text-gray-900 mb-2">
                {contact.form.source}
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sg-blue"
                placeholder="Google, LinkedIn, Referral, etc."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-600">
                {contact.form.newsletter}
              </label>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              {contact.form.submit}
            </button>

            <p className="text-sm text-gray-600 text-center">
              🔒 Your info is safe with us - We never share your data
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

