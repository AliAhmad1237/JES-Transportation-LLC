"use client";

import { useState } from "react";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

interface ContactFormProps {
  theme?: "light" | "dark";
}

export default function ContactForm({ theme = "light" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isLight = theme === "light";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Client-side quick validation
    const clientErrors: FormErrors = {};
    if (!formData.name.trim()) clientErrors.name = "Name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      clientErrors.email = "Valid email address is required";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      clientErrors.message = "Please include a message (at least 5 characters)";
    }

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setErrors(data.errors || { general: data.message || "Failed to submit inquiry." });
      }
    } catch {
      setErrors({
        general: "A network error occurred. Please call directly at (951) 256-6567.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`py-12 border-t ${
          isLight ? "border-charcoal/20 text-charcoal" : "border-white/20 text-warmWhite"
        }`}
        role="alert"
        aria-live="polite"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-burntOrange mb-3">
          Status / Confirmed
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-light mb-4 tracking-tight">
          Inquiry Transmitted.
        </h3>
        <p className={`text-sm ${isLight ? "text-charcoal/70" : "text-softGray/80"} max-w-md leading-relaxed mb-6 font-body`}>
          Your inquiry has been received by JES Transportation LLC. For time-sensitive matters, you may call directly at (951) 256-6567.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="font-mono text-xs uppercase tracking-widest text-burntOrange hover:underline"
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  const inputClass = isLight ? "underlined-input" : "underlined-input-dark";
  const labelClass = `block font-mono text-[11px] uppercase tracking-wider mb-1 ${
    isLight ? "text-mutedSteel" : "text-mutedSteel"
  }`;
  const errorClass = "text-burntOrange font-mono text-[10px] mt-1 tracking-wider";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8 max-w-xl">
      {errors.general && (
        <div
          role="alert"
          className="p-3 bg-burntOrange/10 border-l border-burntOrange text-burntOrange font-mono text-xs"
        >
          {errors.general}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name <span className="text-burntOrange">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Marcus Cole"
          className={inputClass}
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={errorClass}>
            {errors.name}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelClass}>
          Company / Brokerage
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. Pacific Freight Partners"
          className={inputClass}
        />
      </div>

      {/* Email & Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-burntOrange">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className={inputClass}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(000) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message / Inquiry Details <span className="text-burntOrange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Provide shipment, equipment, or business inquiry details..."
          className={`${inputClass} resize-none`}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-charcoal bg-transparent hover:text-burntOrange transition-colors py-2"
        >
          <span className="font-medium">
            {isSubmitting ? "TRANSMITTING..." : "TRANSMIT INQUIRY"}
          </span>
          <span className="text-burntOrange text-sm transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
