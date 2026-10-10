import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nearby Attractions | Thamarassery Churam, Tusharagiri, Lakkidi — K V Complex",
  description:
    "Stay at K V Complex Adivaram and explore Thamarassery Churam, Lakkidi View Point, Tusharagiri Waterfalls, Wayanad Wildlife Sanctuary & more. Best base for Wayanad tourism.",
  alternates: { canonical: "/nearby-attractions" },
};

const attractions = [
  {
    name: "Thamarassery Churam (Ghat Road)",
    distance: "~2 km",
    duration: "5-minute drive",
    category: "Scenic Drive",
    icon: "⛰️",
    gradient: "from-slate-800 to-teal-700",
    desc: "One of Kerala's most iconic mountain ghat roads — 13 hairpin bends connecting the Malabar plains to the Wayanad plateau at 700m altitude. Dense forest cover and breathtaking valley views make it an unforgettable drive. K V Complex is located right at the base of this ghat.",
    tips: ["Best visited at sunrise for misty valley views", "Drive carefully — sharp bends with heavy traffic", "Stop at viewpoints along the way", "Accessible year-round"],
  },
  {
    name: "Lakkidi View Point",
    distance: "~10 km",
    duration: "20-minute drive",
    category: "Viewpoint",
    icon: "🌅",
    gradient: "from-emerald-800 to-teal-600",
    desc: "Situated at the top of the Thamarassery Ghat, Lakkidi is one of the rainiest places in Asia. The view from the Lakkidi viewpoint — looking down on misty valleys and endless greenery — is one of Kerala's most photographed landscapes.",
    tips: ["Bring a jacket — it's cooler at the top", "Mornings offer the best views (less cloudy)", "Famous for the cursed chain — a local legend", "Multiple food stalls at the viewpoint"],
  },
  {
    name: "Tusharagiri Waterfalls",
    distance: "~25 km",
    duration: "40-minute drive",
    category: "Waterfall & Trek",
    icon: "💧",
    gradient: "from-teal-900 to-cyan-600",
    desc: "A three-tiered waterfall hidden in the Chalippuzha River valley. The main falls ('Thusharagiri' means snow peak) cascade from 75 metres into a natural pool. It's also a popular trekking destination with forest trails through dense Western Ghats vegetation.",
    tips: ["Entry fee applies", "Trekking permits available at site", "Best in monsoon and post-monsoon (Jun–Nov)", "Wear waterproof sandals for the wet rocks"],
  },
  {
    name: "Wayanad Wildlife Sanctuary",
    distance: "~35 km",
    duration: "1-hour drive",
    category: "Wildlife & Nature",
    icon: "🐘",
    gradient: "from-green-900 to-emerald-700",
    desc: "Part of the Nilgiri Biosphere Reserve, one of the largest protected areas in India. The sanctuary is home to tigers, leopards, elephants, gaurs, deer, and over 200 bird species. Jeep safaris and guided treks offer thrilling wildlife encounters.",
    tips: ["Book jeep safari in advance", "Morning (6–9 AM) and evening (4–6 PM) safaris best", "Carry insect repellent", "Forest Department permits required"],
  },
  {
    name: "Edakkal Caves",
    distance: "~45 km",
    duration: "1.5-hour drive",
    category: "Heritage & History",
    icon: "🏛️",
    gradient: "from-zinc-800 to-teal-800",
    desc: "Ancient natural caves at 1,000m altitude containing Neolithic engravings and petroglyphs dating back 6,000 years. The two caves — connected by a natural rock formation — offer stunning views of the Wayanad plateau.",
    tips: ["1.5 km uphill trek to reach caves", "Open 9 AM – 5 PM, closed Mondays", "Hire a guide for historical context", "Carry water — the climb is strenuous"],
  },
  {
    name: "Chembra Peak",
    distance: "~50 km",
    duration: "1.5-hour drive",
    category: "Trekking",
    icon: "🏔️",
    gradient: "from-teal-800 to-emerald-600",
    desc: "At 2,100m, Chembra is the highest peak in Wayanad. A challenging yet rewarding trek through shola forests leads to a heart-shaped lake near the summit — one of the most unique natural formations in Kerala.",
    tips: ["Forest Dept permits required (Meppadi)", "Start early — 6 AM recommended", "Trek takes 4–5 hours round trip", "Not recommended in heavy rain"],
  },
  {
    name: "Banasura Sagar Dam",
    distance: "~55 km",
    duration: "1.5-hour drive",
    category: "Dam & Boating",
    icon: "🌊",
    gradient: "from-slate-700 to-teal-700",
    desc: "The largest earthen dam in India, set against a dramatic backdrop of hills. Boating on the reservoir with picturesque island views and distant mountains makes it a favourite family picnic destination.",
    tips: ["Boating timings: 9 AM – 5 PM", "Trekking to nearby Banasura Hill available", "Perfect for family outings", "Entry fee applicable"],
  },
  {
    name: "Soochippara (Sentinel Rock) Waterfalls",
    distance: "~60 km",
    duration: "1.5-hour drive",
    category: "Waterfall",
    icon: "🏞️",
    gradient: "from-teal-900 to-cyan-700",
    desc: "A beautiful three-tiered waterfall in the Muthanga Forest Reserve. During monsoon, the falls are spectacular. The surrounding bamboo forests and natural pools make it a refreshing nature escape.",
    tips: ["Forest permit required", "Slippery rocks — wear sturdy footwear", "Best Jul–Nov (post-monsoon)", "Reach early to avoid crowds"],
  },
];

export default function NearbyAttractionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        aria-labelledby="attractions-hero-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0f2027 0%, #134e4a 50%, #0d9488 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex justify-center items-center gap-2 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">Nearby Attractions</li>
            </ol>
          </nav>
          <p className="section-tag text-teal-300 mb-3">Explore Wayanad</p>
          <h1 id="attractions-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Attractions Near K V Complex
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto">
            Stay at K V Complex, Adivaram and discover the stunning natural &amp; cultural attractions of Wayanad — all within easy reach.
          </p>
        </div>
      </section>

      {/* Location Advantage Bar */}
      <div className="bg-brand-light border-b border-teal-100 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center sm:justify-between items-center text-sm">
          <p className="font-semibold text-brand">
            📍 K V Complex — Adivaram, NH-766 (Base of Thamarassery Churam)
          </p>
          <p className="text-zinc-600">Your base for all Wayanad tourism</p>
        </div>
      </div>

      {/* Attractions List */}
      <section
        aria-labelledby="all-attractions-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="all-attractions-heading" className="sr-only">All Nearby Attractions</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {attractions.map((place) => (
              <li
                key={place.name}
                className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
              >
                {/* Image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${place.gradient} flex items-end p-5 relative`}>
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
                    {place.category}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl" aria-hidden="true">{place.icon}</span>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">{place.name}</p>
                      <p className="text-white/70 text-xs">{place.distance} · {place.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-zinc-600 text-sm leading-relaxed mb-5">{place.desc}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-zinc-700 uppercase tracking-wide mb-2">Tips for Visitors</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {place.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-xs text-zinc-500">
                          <span className="text-brand mt-0.5 shrink-0">✓</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {place.distance} from K V Complex
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/918113932004?text=Hi%2C%20I%20am%20visiting%20${encodeURIComponent(place.name)}%20and%20need%20a%20room%20nearby.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand hover:bg-brand-dark text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      Book Nearby Stay
                    </a>
                  </div>
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
        <h2 className="text-2xl font-bold text-white mb-2">Ready to Explore Wayanad?</h2>
        <p className="text-teal-100 mb-6">Book your stay at K V Complex — your ideal base at the gateway to Wayanad.</p>
        <a
          href="https://wa.me/918113932004?text=Hi%2C%20I%20am%20planning%20a%20Wayanad%20trip%20and%20want%20to%20book%20a%20room."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-brand font-bold px-8 py-3.5 rounded-xl hover:bg-zinc-50 transition-colors"
        >
          Book Your Stay via WhatsApp
        </a>
      </section>
    </>
  );
}
