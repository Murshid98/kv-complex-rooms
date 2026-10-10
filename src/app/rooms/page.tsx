import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rooms in Adivaram from ₹599 | Daily & Family Rooms Near Wayanad",
  description:
    "Budget rooms, double rooms, and family rooms at K V Complex, Adivaram. Starting ₹599/night on National Highway near Thamarassery Churam & Wayanad. Clean, AC/Fan, attached bath. Book +91 81139 32004.",
  alternates: { canonical: "/rooms" },
};

const rooms = [
  {
    id: "budget-room",
    name: "Budget Single Room",
    price: "₹599",
    capacity: "1 Person",
    size: "~120 sq ft",
    bed: "Single Bed",
    features: ["Fan / AC", "Attached Bathroom", "TV", "Power Backup"],
    desc: "Perfect for solo travellers and backpackers exploring Wayanad on a budget. Clean, well-ventilated room with all essentials.",
    ideal: "Solo travellers, backpackers, short stay",
    gradient: "from-teal-900 to-teal-600",
  },
  {
    id: "budget-double-room",
    name: "Budget Double Room",
    price: "₹799",
    capacity: "2 Persons",
    size: "~160 sq ft",
    bed: "Double Bed",
    features: ["Fan / AC", "Attached Bathroom", "TV", "Wi-Fi", "Power Backup"],
    desc: "Comfortable room for two. Ideal for couples, friends, or business travellers who want a clean, affordable stay near Wayanad.",
    ideal: "Couples, friends, business travellers",
    gradient: "from-teal-800 to-cyan-600",
  },
  {
    id: "standard-room",
    name: "Standard Room",
    price: "₹999",
    capacity: "2–3 Persons",
    size: "~200 sq ft",
    bed: "Double + Single Bed",
    features: ["AC", "Attached Bathroom", "TV", "Wi-Fi", "Power Backup", "Wardrobe"],
    desc: "A spacious standard room with extra sleeping space — great for small groups or families with a child.",
    ideal: "Small families, groups of 3",
    gradient: "from-slate-800 to-teal-700",
  },
  {
    id: "family-room",
    name: "Family Room",
    price: "₹1,199",
    capacity: "Up to 5 Persons",
    size: "~300 sq ft",
    bed: "Multiple Beds",
    features: ["AC", "Attached Bathroom", "TV", "Wi-Fi", "Power Backup", "Extra Space", "Wardrobe"],
    desc: "Spacious family room with multiple beds — perfect for families on a Wayanad holiday. Comfortable and affordable.",
    ideal: "Families, groups up to 5",
    gradient: "from-emerald-900 to-teal-600",
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    price: "₹1,499",
    capacity: "2–3 Persons",
    size: "~220 sq ft",
    bed: "Double Bed",
    features: ["AC", "Attached Bathroom", "TV", "Wi-Fi", "Power Backup", "Hot Water", "Wardrobe"],
    desc: "Our premium daily rental room with hot water facility and superior furnishings for a more comfortable experience.",
    ideal: "Those wanting premium budget accommodation",
    gradient: "from-teal-800 to-teal-500",
  },
  {
    id: "long-stay-room",
    name: "Long-Stay Room",
    price: "₹8,500",
    capacity: "1–2 Persons",
    size: "~160 sq ft",
    bed: "Double Bed",
    features: ["Fan / AC", "Attached Bathroom", "TV", "Wi-Fi", "Monthly Housekeeping"],
    desc: "Ideal for working professionals, students, or anyone looking for affordable long-term accommodation near Adivaram.",
    ideal: "Monthly tenants, professionals, students",
    badge: "Monthly Rate",
    gradient: "from-zinc-800 to-teal-800",
  },
];

export default function RoomsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        aria-labelledby="rooms-hero-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0f2027 0%, #1a3a3a 50%, #0d9488 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex justify-center items-center gap-2 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">Rooms</li>
            </ol>
          </nav>
          <p className="section-tag text-teal-300 mb-3">Daily &amp; Monthly Rentals</p>
          <h1 id="rooms-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Rooms in Adivaram
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto">
            Budget-friendly daily rental rooms near Wayanad — clean, comfortable, and starting from just ₹599/night.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section
        aria-labelledby="all-rooms-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="all-rooms-heading" className="sr-only">All Rooms at K V Complex</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {rooms.map((room) => (
              <li
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-zinc-200"
              >
                {/* Room image placeholder */}
                <div className={`h-52 bg-gradient-to-br ${room.gradient} flex items-end p-4 relative`}>
                  <div className="absolute top-4 right-4">
                    {room.badge ? (
                      <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                        {room.badge}
                      </span>
                    ) : (
                      <span className="bg-brand text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                        Daily Rental
                      </span>
                    )}
                  </div>
                  <span className="text-white/80 text-sm font-medium">{room.capacity} · {room.size}</span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">{room.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{room.desc}</p>

                  {/* Specs */}
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs mb-4">
                    <div>
                      <dt className="text-zinc-400 font-medium">Bed</dt>
                      <dd className="text-zinc-700">{room.bed}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-400 font-medium">Ideal For</dt>
                      <dd className="text-zinc-700">{room.ideal}</dd>
                    </div>
                  </dl>

                  {/* Features */}
                  <ul className="flex flex-wrap gap-2 mb-5" aria-label={`Features of ${room.name}`}>
                    {room.features.map((f) => (
                      <li key={f} className="bg-brand-light text-brand text-xs font-medium px-2.5 py-1 rounded-full">
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                    <div>
                      <p className="text-2xl font-extrabold text-zinc-900">{room.price}</p>
                      <p className="text-xs text-zinc-400">{room.badge ? "per month" : "per night"}</p>
                    </div>
                    <a
                      href={`https://wa.me/918113932004?text=Hi%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(room.name)}%20at%20K%20V%20Complex.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                      aria-label={`Book ${room.name}`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center bg-white">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Not Sure Which Room?</h2>
        <p className="text-zinc-500 mb-6">WhatsApp us and we&apos;ll help you pick the best option for your group &amp; budget.</p>
        <a
          href="https://wa.me/918113932004?text=Hi%2C%20I%20need%20help%20choosing%20a%20room%20at%20K%20V%20Complex."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
        >
          Chat on WhatsApp
        </a>
      </section>
    </>
  );
}
