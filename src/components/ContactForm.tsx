"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    roomType: "Budget Room",
    checkIn: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi%2C%20I%20am%20${encodeURIComponent(form.name)}.%0APhone%3A%20${form.phone}%0ARoom%20type%3A%20${encodeURIComponent(form.roomType)}%0ACheck-in%3A%20${form.checkIn || "flexible"}%0AMessage%3A%20${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/918113932004?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
        <p className="text-zinc-500 text-sm mb-6">
          Your booking enquiry was opened in WhatsApp. We&apos;ll confirm your room availability shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-brand text-sm font-medium hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-lg font-bold text-zinc-900 mb-6">Send a Booking Enquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-1.5"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-1.5"
          >
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="roomType"
              className="block text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-1.5"
            >
              Room Type
            </label>
            <select
              id="roomType"
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 bg-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            >
              <option>Budget Room</option>
              <option>Double Room</option>
              <option>Family Room</option>
              <option>Deluxe Room</option>
              <option>Studio Apartment</option>
              <option>1 BHK Apartment</option>
              <option>2 BHK Apartment</option>
              <option>Monthly Rental</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="checkIn"
              className="block text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-1.5"
            >
              Check-In Date
            </label>
            <input
              id="checkIn"
              name="checkIn"
              type="date"
              value={form.checkIn}
              onChange={handleChange}
              className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-zinc-600 uppercase tracking-wide mb-1.5"
          >
            Message / Special Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your group size, duration, or any special requirements..."
            className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send via WhatsApp
        </button>
        <p className="text-center text-xs text-zinc-400">
          This will open WhatsApp with your enquiry pre-filled.
        </p>
      </form>
    </>
  );
}
