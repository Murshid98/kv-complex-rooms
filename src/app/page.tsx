import type { Metadata } from "next";
import Link from "next/link";
import BookingBar from "@/components/BookingBar";

export const metadata: Metadata = {
  title: "Budget Rooms & Apartments Near Wayanad from ₹599 | K V Complex",
  description:
    "K V Complex Rooms & Apartments — budget stay at Adivaram on NH, gateway to Wayanad. Rooms from ₹599/night. Near Thamarassery Churam, Tusharagiri & Lakkidi. Daily & monthly rentals. Call +91 81139 32004.",
  alternates: { canonical: "/" },
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: "Daily Rental",
    desc: "Flexible daily stays for tourists & travellers",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Monthly Rental",
    desc: "Long-term rooms & apartments for extended stays",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Family Rooms",
    desc: "Spacious rooms for families visiting Wayanad",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    label: "Food Nearby",
    desc: "Chappathi shop & café in the same building",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "NH Location",
    desc: "On National Highway — easy access from anywhere",
  },
];

const rooms = [
  {
    name: "Budget Room",
    price: "₹599",
    capacity: "1–2 Persons",
    features: ["Fan / AC", "Single / Double Bed", "Attached Bathroom", "TV"],
    desc: "Clean, comfortable room ideal for solo travellers and budget-conscious guests exploring Wayanad.",
  },
  {
    name: "Double Room",
    price: "₹799",
    capacity: "2 Persons",
    features: ["AC", "Double Bed", "Attached Bathroom", "TV", "Wi-Fi"],
    desc: "Cozy double room perfect for couples or friends on a Wayanad getaway.",
  },
  {
    name: "Family Room",
    price: "₹1,199",
    capacity: "Up to 5 Persons",
    features: ["AC", "Multiple Beds", "Attached Bathroom", "TV", "Extra Space"],
    desc: "Spacious family room with ample space — ideal for families on a Kerala vacation.",
  },
];

const attractions = [
  {
    name: "Thamarassery Churam",
    distance: "~2 km",
    desc: "The iconic 13-hairpin mountain ghat road connecting the plains to Wayanad. A scenic drive through dense forest.",
    icon: "⛰️",
  },
  {
    name: "Lakkidi View Point",
    distance: "~10 km",
    desc: "One of the most stunning viewpoints in Kerala — offering panoramic views of the misty Wayanad valley.",
    icon: "🌅",
  },
  {
    name: "Tusharagiri Waterfalls",
    distance: "~25 km",
    desc: "A beautiful three-tiered waterfall surrounded by lush greenery, a favourite trekking destination.",
    icon: "💧",
  },
  {
    name: "Wayanad Wildlife",
    distance: "~35 km",
    desc: "Part of the Nilgiri Biosphere Reserve, home to tigers, elephants, leopards and diverse bird life.",
    icon: "🐘",
  },
];

const testimonials = [
  {
    name: "Rahul M.",
    location: "Bangalore",
    rating: 5,
    text: "Perfect base for our Wayanad trip! Clean rooms, very affordable, and the location on NH made it super convenient. The chappathi shop downstairs was a bonus — great breakfast!",
  },
  {
    name: "Priya S.",
    location: "Kochi",
    rating: 5,
    text: "We stayed here as a family of 4 before heading to Wayanad. Spacious family room, very clean, and the staff was helpful with directions. Highly recommended for budget travellers.",
  },
  {
    name: "Anoop K.",
    location: "Thrissur",
    rating: 5,
    text: "Excellent value for money. Rooms starting from ₹599 — you won't find this in Wayanad itself. Located right on the highway so access was easy. Stayed for 2 nights, very comfortable.",
  },
];

const faqs = [
  {
    q: "What are the room tariffs at K V Complex Rooms?",
    a: "Rooms start from ₹599 per night. We have budget rooms, double rooms, and family rooms. Monthly rental apartments are also available. Contact us on WhatsApp for the latest rates.",
  },
  {
    q: "Where is K V Complex located?",
    a: "We are at Adivaram on National Highway (NH-766), at the foothills of Thamarassery Churam, Kozhikode District, Kerala — 673586. We are the gateway to Wayanad.",
  },
  {
    q: "How far is the property from Thamarassery Churam?",
    a: "The Thamarassery ghat road starts approximately 2 km from our property. We are right at its base.",
  },
  {
    q: "Is food available nearby?",
    a: "Yes! New Star Chappathi Company and a tea café are in the same building. A luncheon hotel and supermarket are also within walking distance.",
  },
  {
    q: "Can I book via WhatsApp?",
    a: "Yes — just message us on WhatsApp at +91 81139 32004 with your check-in date, room type, and number of guests. We respond quickly.",
  },
  {
    q: "Do you offer long-term monthly rentals?",
    a: "Yes, we offer monthly rental rooms and apartments for working professionals, students, and long-stay guests. Please call or WhatsApp for monthly pricing.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[92vh] flex flex-col justify-center items-center text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f2027 0%, #1a3a3a 40%, #0d9488 100%)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="section-tag text-teal-300 mb-5">
            Budget Accommodation · Adivaram, Kerala
          </p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Your Comfort Stay at the<br />
            <span className="text-teal-300">Gateway to Wayanad</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Clean, affordable rooms &amp; apartments at Adivaram — right on National Highway
            at the foothills of Thamarassery Churam. Rooms starting from{" "}
            <span className="text-teal-300 font-semibold">₹599/night</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rooms"
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
            >
              Explore Rooms
            </Link>
            <a
              href="https://wa.me/918113932004?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%20K%20V%20Complex."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-base"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { val: "₹599", label: "Rooms from" },
              { val: "24×7", label: "Support" },
              { val: "NH", label: "Location" },
              { val: "Wayanad", label: "Gateway" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl px-4 py-3 text-center">
                <p className="text-teal-300 font-extrabold text-xl">{s.val}</p>
                <p className="text-zinc-400 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Booking Bar ── */}
      <BookingBar />

      {/* ── About ── */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-tag mb-3">About Us</p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6 leading-tight"
            >
              Welcome to<br />K V Complex Rooms &amp; Apartments
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-5">
              Nestled at the foothills of the famous Thamarassery Churam on National Highway in
              Adivaram, K V Complex Rooms &amp; Apartments is your ideal home away from home.
              Whether you are a Wayanad-bound tourist, a family on a Kerala holiday, a business
              traveller, or someone looking for long-term accommodation — we have the right room for you.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-8">
              Our property offers clean, well-maintained rooms at unbeatable prices starting from
              ₹599/night. With a chappathi shop, café, luncheon hotel, and a supermarket all
              within walking distance — everything you need is right at your doorstep.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Rooms from ₹599 per night — best budget in the area",
                "On NH at Adivaram — perfect gateway to Wayanad",
                "Daily & monthly rental options available",
                "Food & essentials available right in the building",
                "Bus stop within walking distance",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-zinc-700">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-brand-light flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/918113932004?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20K%20V%20Complex%20Rooms."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-3 rounded-xl transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>

          {/* Image grid placeholder */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Comfortable Rooms", color: "from-teal-800 to-teal-600" },
              { label: "Mountain View", color: "from-emerald-800 to-emerald-600" },
              { label: "Clean Spaces", color: "from-teal-700 to-cyan-600" },
              { label: "Peaceful Location", color: "from-slate-700 to-teal-700" },
            ].map((img) => (
              <div
                key={img.label}
                className={`rounded-2xl bg-gradient-to-br ${img.color} aspect-square flex items-end p-4`}
              >
                <span className="text-white/80 text-xs font-medium">{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        aria-labelledby="services-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {services.map((s) => (
              <article
                key={s.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="text-brand group-hover:text-brand-dark mx-auto mb-4 transition-colors flex justify-center">
                  {s.icon}
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-1">{s.label}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Room ── */}
      <section
        aria-labelledby="featured-heading"
        className="bg-topbar text-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div
            className="aspect-video lg:aspect-auto lg:min-h-[480px] bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500 flex items-center justify-center relative overflow-hidden"
            aria-hidden="true"
          >
            <div className="text-center text-white/60">
              <svg className="w-20 h-20 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} points="9 22 9 12 15 12 15 22" />
              </svg>
              <p className="text-sm">Comfortable Rooms</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-lg">
              Best Value
            </div>
          </div>

          {/* Details side */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <p className="section-tag text-teal-400 mb-3">Featured Room</p>
            <h2
              id="featured-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-3"
            >
              Budget Double Room
            </h2>
            <p className="text-teal-300 text-2xl font-extrabold mb-6">
              ₹799 <span className="text-zinc-400 text-base font-normal">/ Night</span>
            </p>
            <ul className="space-y-3 mb-8">
              {[
                ["Capacity", "Up to 2 Persons"],
                ["Bed", "Double Bed"],
                ["Bathroom", "Attached Private Bathroom"],
                ["Amenities", "AC, TV, Wi-Fi"],
                ["View", "Street / Garden View"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-brand shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-400">{k}</span>
                  <span className="text-white font-medium ml-auto">{v}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href="https://wa.me/918113932004?text=Hi%2C%20I%20want%20to%20book%20the%20Double%20Room."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Book This Room
              </a>
              <Link
                href="/rooms"
                className="border border-zinc-700 hover:border-brand text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                View All Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rooms Preview ── */}
      <section
        aria-labelledby="rooms-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Our Rooms</p>
            <h2
              id="rooms-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4"
            >
              Rooms &amp; Suites for Every Need
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              From solo budget rooms to spacious family suites — clean, comfortable, and affordable
              with everything you need for a great stay.
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {rooms.map((room) => (
              <li
                key={room.name}
                className="rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-teal-900 to-teal-600 flex items-center justify-center relative">
                  <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <div className="absolute bottom-3 left-3 bg-brand text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    {room.capacity}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">{room.name}</h3>
                  <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{room.desc}</p>
                  <ul className="flex flex-wrap gap-2 mb-5">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="bg-brand-light text-brand text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-extrabold text-zinc-900">
                      {room.price}
                      <span className="text-sm font-normal text-zinc-500"> /night</span>
                    </p>
                    <a
                      href={`https://wa.me/918113932004?text=Hi%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(room.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
                      aria-label={`Book ${room.name}`}
                    >
                      Book
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              View All Rooms
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        aria-labelledby="why-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Why Choose Us</p>
            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-900"
            >
              The Best Budget Stay Near Wayanad
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Rooms from ₹599",
                desc: "Best-priced accommodation in the Adivaram area. No hidden charges.",
                icon: "💰",
              },
              {
                title: "Gateway to Wayanad",
                desc: "Right at the base of Thamarassery Churam — your adventure starts here.",
                icon: "🗺️",
              },
              {
                title: "Family Friendly",
                desc: "Spacious family rooms with all essential comforts for a relaxing stay.",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                title: "Daily & Monthly Rent",
                desc: "Flexible rentals for tourists (daily) and working professionals (monthly).",
                icon: "📅",
              },
              {
                title: "Bus Stop Nearby",
                desc: "Public transport right at your doorstep — no private vehicle needed.",
                icon: "🚌",
              },
              {
                title: "Food in Building",
                desc: "New Star Chappathi & tea café in the same building. Never go hungry.",
                icon: "🍽️",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Attractions ── */}
      <section
        aria-labelledby="attractions-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Nearby Attractions</p>
            <h2
              id="attractions-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4"
            >
              Explore the Best of Wayanad
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Stay with us and discover the breathtaking attractions of Wayanad — all just a short
              drive from K V Complex.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a) => (
              <li
                key={a.name}
                className="rounded-2xl border border-zinc-200 overflow-hidden hover:border-brand transition-colors group"
              >
                <div className="h-36 bg-gradient-to-br from-emerald-900 to-teal-600 flex items-center justify-center">
                  <span className="text-5xl" aria-hidden="true">{a.icon}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-zinc-900 text-sm">{a.name}</h3>
                    <span className="text-xs bg-brand-light text-brand px-2 py-0.5 rounded-full font-medium">
                      {a.distance}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <Link
              href="/nearby-attractions"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-dark font-semibold transition-colors"
            >
              See All Attractions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        aria-labelledby="testimonials-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Testimonials</p>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-900"
            >
              Our Guests Love Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-600 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <footer>
                  <p className="font-semibold text-zinc-900 text-sm">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.location}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        aria-labelledby="faq-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">FAQ</p>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-900"
            >
              Frequently Asked Questions
            </h2>
          </div>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-zinc-200 p-6 hover:border-brand transition-colors"
              >
                <dt className="font-semibold text-zinc-900 mb-2 flex items-start gap-3">
                  <span className="text-brand text-lg leading-none shrink-0">Q.</span>
                  {faq.q}
                </dt>
                <dd className="text-zinc-600 text-sm leading-relaxed pl-6">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        aria-labelledby="cta-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-brand"
        style={{
          background:
            "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #0891b2 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Rooms from ₹599/night · Daily &amp; monthly rentals · Instant WhatsApp booking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918113932004?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%20K%20V%20Complex%20Rooms."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand font-bold px-8 py-3.5 rounded-xl hover:bg-zinc-50 transition-colors"
            >
              Book on WhatsApp
            </a>
            <a
              href="tel:+918113932004"
              className="border-2 border-white/60 hover:border-white text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              Call +91 81139 32004
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
