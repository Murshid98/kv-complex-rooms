import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Gallery | K V Complex Rooms & Apartments, Adivaram",
  description:
    "View photos of K V Complex Rooms & Apartments in Adivaram — rooms, apartments, location, and nearby Wayanad attractions. Budget stay near Thamarassery Churam.",
  alternates: { canonical: "/gallery" },
};

const galleryItems = [
  { label: "Exterior / Building View", category: "Property", gradient: "from-slate-700 to-teal-700", span: "col-span-2 row-span-2" },
  { label: "Budget Room", category: "Rooms", gradient: "from-teal-800 to-teal-600", span: "" },
  { label: "Double Room", category: "Rooms", gradient: "from-teal-700 to-cyan-600", span: "" },
  { label: "Family Room", category: "Rooms", gradient: "from-emerald-800 to-teal-600", span: "col-span-2" },
  { label: "Room Interior", category: "Rooms", gradient: "from-slate-800 to-teal-700", span: "" },
  { label: "Bathroom", category: "Rooms", gradient: "from-zinc-700 to-teal-700", span: "" },
  { label: "1 BHK Apartment", category: "Apartments", gradient: "from-teal-800 to-emerald-700", span: "" },
  { label: "Apartment Kitchen", category: "Apartments", gradient: "from-slate-700 to-teal-600", span: "" },
  { label: "Thamarassery Churam", category: "Attractions", gradient: "from-emerald-900 to-teal-600", span: "col-span-2" },
  { label: "Lakkidi View Point", category: "Attractions", gradient: "from-teal-900 to-cyan-700", span: "" },
  { label: "Tusharagiri Falls", category: "Attractions", gradient: "from-teal-800 to-teal-500", span: "" },
  { label: "NH Location", category: "Location", gradient: "from-zinc-800 to-teal-800", span: "" },
];

const categories = ["All", "Property", "Rooms", "Apartments", "Attractions", "Location"];

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        aria-labelledby="gallery-hero-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 text-white"
        style={{ background: "linear-gradient(135deg, #0f2027 0%, #1a3a3a 50%, #0d9488 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex justify-center items-center gap-2 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">Gallery</li>
            </ol>
          </nav>
          <p className="section-tag text-teal-300 mb-3">Our Gallery</p>
          <h1 id="gallery-hero-heading" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Photo Gallery
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto">
            Take a look at our rooms, apartments, property, and the stunning attractions that await you near K V Complex.
          </p>
        </div>
      </section>

      {/* Category Filter (visual only — JS-free for SEO) */}
      <div className="bg-zinc-50 border-b border-zinc-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer ${
                cat === "All"
                  ? "bg-brand text-white"
                  : "bg-white border border-zinc-200 text-zinc-600 hover:border-brand hover:text-brand"
              } transition-colors`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section
        aria-labelledby="gallery-grid-heading"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="gallery-grid-heading" className="sr-only">Photo Gallery Grid</h2>

          {/* Upload prompt */}
          <div className="mb-8 p-5 rounded-2xl bg-brand-light border border-teal-200 flex items-start gap-4">
            <span className="text-2xl shrink-0" aria-hidden="true">📸</span>
            <div>
              <p className="font-semibold text-brand text-sm mb-1">Add Your Photos Here</p>
              <p className="text-teal-700 text-xs">
                Place your property images in <code className="bg-teal-100 px-1.5 py-0.5 rounded text-xs">/public/images/</code> and update this gallery page with{" "}
                <code className="bg-teal-100 px-1.5 py-0.5 rounded text-xs">next/image</code> components. Name them descriptively for SEO (e.g. <code className="bg-teal-100 px-1.5 py-0.5 rounded text-xs">kv-complex-double-room.jpg</code>).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`${item.span} rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} flex flex-col justify-end p-4 group hover:opacity-90 transition-opacity cursor-pointer relative`}
                role="img"
                aria-label={`${item.label} — ${item.category}`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors rounded-2xl" aria-hidden="true" />
                <div className="relative z-10">
                  <span className="inline-block bg-black/40 text-white text-xs px-2 py-0.5 rounded-full mb-1">
                    {item.category}
                  </span>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center bg-zinc-50">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Like What You See?</h2>
        <p className="text-zinc-500 mb-6">Book your stay at K V Complex Rooms &amp; Apartments today. Rooms from ₹599/night.</p>
        <a
          href="https://wa.me/918113932004?text=Hi%2C%20I%20saw%20your%20gallery%20and%20want%20to%20book%20a%20room."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
        >
          Book via WhatsApp
        </a>
      </section>
    </>
  );
}
