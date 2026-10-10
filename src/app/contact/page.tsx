import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book a Room | K V Complex Rooms & Apartments, Adivaram",
  description:
    "Contact K V Complex Rooms & Apartments to book a room in Adivaram. Call or WhatsApp +91 81139 32004. Daily rooms from ₹599/night & monthly apartments. On NH near Wayanad.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 81139 32004",
    href: "tel:+918113932004",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 81139 32004",
    href: "https://wa.me/918113932004",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    label: "Address",
    value: "Adivaram, NH-766, Thamarassery, Kozhikode, Kerala — 673586",
    href: "https://maps.google.com/?q=Adivaram+Thamarassery+Kozhikode",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Available",
    value: "24 × 7 — Call or WhatsApp anytime",
    href: "tel:+918113932004",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        aria-labelledby="contact-hero-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0f2027 0%, #1a3a3a 50%, #0d9488 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex justify-center items-center gap-2 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">Contact</li>
            </ol>
          </nav>
          <p className="section-tag text-teal-300 mb-3">Get in Touch</p>
          <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Contact &amp; Book a Room
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto">
            Call us, WhatsApp us, or fill the form below. We respond quickly and confirm your
            booking in minutes.
          </p>
        </div>
      </section>

      {/* Quick contact strip */}
      <div className="bg-brand py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+918113932004"
            className="flex items-center gap-2 bg-white text-brand font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-zinc-50 transition-colors"
          >
            📞 Call Now: +91 81139 32004
          </a>
          <a
            href="https://wa.me/918113932004?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%20K%20V%20Complex."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-white text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            💬 WhatsApp: +91 81139 32004
          </a>
        </div>
      </div>

      {/* Main contact section */}
      <section
        aria-labelledby="contact-section-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Info */}
          <div>
            <h2 id="contact-section-heading" className="text-2xl font-bold text-zinc-900 mb-6">
              Booking &amp; Enquiry
            </h2>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              The fastest way to book is via WhatsApp or phone call. We will confirm availability,
              share room details, and help you find the best option for your stay.
            </p>

            <address className="not-italic space-y-4 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-zinc-200 hover:border-brand transition-colors group"
                >
                  <span className="text-brand group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                    {info.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">{info.label}</p>
                    <p className="text-sm font-medium text-zinc-800">{info.value}</p>
                  </div>
                </a>
              ))}
            </address>

            {/* How to find us */}
            <div className="p-5 bg-brand-light rounded-2xl border border-teal-200">
              <h3 className="font-semibold text-brand mb-2 text-sm">How to Find Us</h3>
              <p className="text-xs text-teal-700 leading-relaxed">
                We are on National Highway (NH-766) at Adivaram, at the foothills of Thamarassery
                Churam. Look for <strong>K V Complex</strong> — the same building has New Star
                Chappathi Company and a tea café. The bus stop is within walking distance.
              </p>
            </div>
          </div>

          {/* Right: Form (client component) */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section aria-labelledby="map-heading" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 id="map-heading" className="text-xl font-bold text-zinc-900 mb-5">
            Find Us on the Map
          </h2>
          <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Adivaram+Thamarassery+Kozhikode+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K V Complex Rooms & Apartments Location — Adivaram, Kozhikode"
            />
          </div>
          <p className="mt-3 text-xs text-zinc-400 text-center">
            K V Complex Rooms &amp; Apartments — NH-766, Adivaram, Thamarassery, Kozhikode, Kerala 673586
          </p>
        </div>
      </section>
    </>
  );
}
