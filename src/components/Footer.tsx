import Link from "next/link";

const YEAR = 2026;

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/apartments", label: "Apartments" },
  { href: "/nearby-attractions", label: "Nearby Attractions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const attractions = [
  { label: "Thamarassery Churam", href: "/nearby-attractions" },
  { label: "Lakkidi View Point", href: "/nearby-attractions" },
  { label: "Tusharagiri Waterfalls", href: "/nearby-attractions" },
  { label: "Wayanad Wildlife Sanctuary", href: "/nearby-attractions" },
  { label: "Chembra Peak", href: "/nearby-attractions" },
];

export default function Footer() {
  return (
    <footer className="bg-topbar text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center text-white font-extrabold text-base">KV</span>
              <span className="font-bold text-white text-sm leading-tight">
                KV Complex<br />
                <span className="font-normal text-zinc-400 text-xs">Rooms &amp; Apartments</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Budget-friendly accommodation at the gateway to Wayanad. Located on NH at Adivaram, Kozhikode, Kerala.
            </p>
            <address className="not-italic text-sm space-y-2">
              <a href="tel:+918113932004" className="flex items-center gap-2 hover:text-white transition-colors">
                <PhoneIcon />
                +91 81139 32004
              </a>
              <a
                href="https://wa.me/918113932004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsAppIcon />
                WhatsApp Booking
              </a>
              <p className="flex items-start gap-2">
                <LocationIcon />
                <span>Adivaram, NH, Thamarassery,<br />Kozhikode, Kerala — 673586</span>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                    <span className="text-brand">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Attractions */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Nearby Attractions</h3>
            <ul className="space-y-2">
              {attractions.map((a) => (
                <li key={a.label}>
                  <Link href={a.href} className="text-sm hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5">
                    <span className="text-brand">›</span>
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Booking Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Check-In</span>
                <span className="text-white font-medium">12:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Check-Out</span>
                <span className="text-white font-medium">11:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Rooms from</span>
                <span className="text-brand font-bold">₹599/night</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Contact Hours</span>
                <span className="text-white font-medium">24 × 7</span>
              </li>
            </ul>
            <a
              href="https://wa.me/918113932004?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%20K%20V%20Complex."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>
            &copy; {YEAR}{" "}
            <span className="text-white font-medium">K V Complex Rooms &amp; Apartments</span>. All rights reserved.
          </p>
          <p className="text-zinc-600">Adivaram · Kozhikode · Kerala · India</p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-brand" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}
