import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apartments for Monthly Rent in Adivaram | K V Complex",
  description:
    "Monthly rental apartments at K V Complex, Adivaram — ideal for working professionals, students & long-term tenants near Wayanad. Affordable, well-maintained. Call +91 81139 32004.",
  alternates: { canonical: "/apartments" },
};

const apartments = [
  {
    id: "studio-apartment",
    name: "Studio Apartment",
    rent: "₹7,500",
    period: "/ month",
    size: "~350 sq ft",
    capacity: "1–2 Persons",
    features: ["Kitchen Area", "AC", "Attached Bathroom", "TV", "Wi-Fi", "Power Backup"],
    desc: "Compact, self-contained studio with a kitchenette. Perfect for single professionals or couples on an extended stay in the Adivaram area.",
    ideal: "Single professionals, couples",
    gradient: "from-teal-800 to-teal-600",
  },
  {
    id: "1bhk-apartment",
    name: "1 BHK Apartment",
    rent: "₹10,000",
    period: "/ month",
    size: "~500 sq ft",
    capacity: "2–3 Persons",
    features: ["Separate Bedroom", "Living Area", "Kitchen", "AC", "Attached Bathroom", "TV", "Wi-Fi"],
    desc: "A well-designed 1 BHK with separate bedroom and living room. Ideal for small families, couples, or professionals who need more space.",
    ideal: "Small families, professionals",
    gradient: "from-slate-800 to-teal-700",
    badge: "Popular",
  },
  {
    id: "2bhk-apartment",
    name: "2 BHK Apartment",
    rent: "₹16,000",
    period: "/ month",
    size: "~750 sq ft",
    capacity: "Up to 5 Persons",
    features: ["2 Bedrooms", "Living Area", "Kitchen", "2 Bathrooms", "AC", "TV", "Wi-Fi", "Balcony"],
    desc: "Spacious 2 BHK apartment for families or groups. Separate bedrooms provide privacy with plenty of common living space.",
    ideal: "Families, groups up to 5",
    gradient: "from-emerald-900 to-teal-600",
  },
];

const benefits = [
  {
    icon: "📍",
    title: "Prime NH Location",
    desc: "On National Highway at Adivaram — easy commute to Kozhikode city and access to Wayanad.",
  },
  {
    icon: "🛒",
    title: "Supermarket Nearby",
    desc: "A family supermarket is within walking distance for all your daily grocery needs.",
  },
  {
    icon: "🍽️",
    title: "Food Right Downstairs",
    desc: "New Star Chappathi and a café are in the same building — convenient daily meals.",
  },
  {
    icon: "🚌",
    title: "Bus Stop Walking Distance",
    desc: "Easy access to public transport from Adivaram bus stop — just steps away.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure",
    desc: "Well-maintained building with reliable power backup and round-the-clock availability.",
  },
  {
    icon: "💰",
    title: "Best Value in Area",
    desc: "Competitive monthly rental rates — the most affordable accommodation near Wayanad entry.",
  },
];

export default function ApartmentsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        aria-labelledby="apts-hero-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0f2027 0%, #1a3a3a 50%, #0d9488 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex justify-center items-center gap-2 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">Apartments</li>
            </ol>
          </nav>
          <p className="section-tag text-teal-300 mb-3">Monthly Rentals</p>
          <h1 id="apts-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Apartments for Rent in Adivaram
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto">
            Fully-furnished monthly rental apartments in Adivaram, Kozhikode — ideal for professionals, students &amp; families near Wayanad.
          </p>
        </div>
      </section>

      {/* Apartments Grid */}
      <section
        aria-labelledby="all-apts-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="all-apts-heading" className="sr-only">All Apartments at K V Complex</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {apartments.map((apt) => (
              <li
                key={apt.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-zinc-200"
              >
                <div className={`h-52 bg-gradient-to-br ${apt.gradient} flex items-end p-4 relative`}>
                  {apt.badge && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      {apt.badge}
                    </div>
                  )}
                  <span className="text-white/80 text-sm font-medium">{apt.size} · {apt.capacity}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">{apt.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{apt.desc}</p>
                  <p className="text-xs text-zinc-400 mb-4">
                    <span className="font-medium text-zinc-700">Ideal for:</span> {apt.ideal}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-5" aria-label={`Features of ${apt.name}`}>
                    {apt.features.map((f) => (
                      <li key={f} className="bg-brand-light text-brand text-xs font-medium px-2.5 py-1 rounded-full">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                    <div>
                      <p className="text-2xl font-extrabold text-zinc-900">{apt.rent}</p>
                      <p className="text-xs text-zinc-400">{apt.period}</p>
                    </div>
                    <a
                      href={`https://wa.me/918113932004?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(apt.name)}%20at%20K%20V%20Complex.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                      aria-label={`Enquire about ${apt.name}`}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section
        aria-labelledby="apt-benefits-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-tag mb-3">Why Rent Here</p>
            <h2 id="apt-benefits-heading" className="text-3xl font-bold text-zinc-900">
              Why Choose K V Complex for Long-Term Rent
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-4 p-5 rounded-2xl border border-zinc-200 hover:border-brand transition-colors">
                <span className="text-2xl shrink-0" aria-hidden="true">{b.icon}</span>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{b.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)" }}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Looking for a Monthly Apartment?</h2>
        <p className="text-teal-100 mb-6">Contact us to check current availability and get the best monthly rental deal.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/918113932004?text=Hi%2C%20I%20am%20looking%20for%20a%20monthly%20rental%20apartment%20at%20K%20V%20Complex."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand font-bold px-8 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
          >
            WhatsApp Us
          </a>
          <a
            href="tel:+918113932004"
            className="border-2 border-white/60 hover:border-white text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Call +91 81139 32004
          </a>
        </div>
      </section>
    </>
  );
}
