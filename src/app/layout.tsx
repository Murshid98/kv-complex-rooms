import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kvcomplexrooms.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "K V Complex Rooms & Apartments | Budget Stay in Adivaram Near Wayanad",
    template: "%s | K V Complex Rooms & Apartments",
  },
  description:
    "Book budget-friendly rooms & apartments at K V Complex, Adivaram — on NH at the gateway to Wayanad. Rooms starting from ₹599/night. Near Thamarassery Churam, Tusharagiri & Lakkidi. Daily & monthly rentals.",
  keywords: [
    "rooms in Adivaram",
    "rooms near Wayanad",
    "budget rooms in Adivaram",
    "daily room rent in Adivaram",
    "rooms near Thamarassery Churam",
    "stay near Wayanad",
    "accommodation in Adivaram",
    "apartments for rent in Adivaram",
    "family rooms in Adivaram",
    "rooms near Tusharagiri Waterfalls",
    "rooms near Lakkidi View Point",
    "budget stay near Wayanad",
    "rooms starting from 599 in Adivaram",
    "K V Complex Rooms",
    "Adivaram accommodation",
    "Kozhikode rooms",
    "Kerala budget hotel",
  ],
  authors: [{ name: "K V Complex Rooms & Apartments" }],
  creator: "K V Complex Rooms & Apartments",
  publisher: "K V Complex Rooms & Apartments",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "K V Complex Rooms & Apartments",
    title: "K V Complex Rooms & Apartments | Budget Stay Near Wayanad from ₹599",
    description:
      "Clean, affordable rooms & apartments at the gateway to Wayanad. On NH at Adivaram — near Thamarassery Churam, Tusharagiri & Lakkidi. Book via WhatsApp: +91 81139 32004.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "K V Complex Rooms & Apartments — Adivaram, Kozhikode, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K V Complex Rooms & Apartments | Budget Stay Near Wayanad from ₹599",
    description:
      "Clean, affordable rooms & apartments at the gateway to Wayanad. Daily & monthly rentals. Book via WhatsApp: +91 81139 32004.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: BASE_URL },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD: LocalBusiness / Hotel
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LodgingBusiness"],
  name: "K V Complex Rooms & Apartments",
  description:
    "Budget-friendly rooms and apartments at Adivaram, on National Highway at the foothills of Thamarassery Churam — the gateway to Wayanad. Daily and monthly rentals starting from ₹599.",
  url: BASE_URL,
  telephone: "+918113932004",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Adivaram, National Highway",
    addressLocality: "Adivaram",
    addressRegion: "Kozhikode",
    postalCode: "673586",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.5499,
    longitude: 75.9333,
  },
  priceRange: "₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  checkinTime: "12:00",
  checkoutTime: "11:00",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Daily Room Rental", value: true },
    { "@type": "LocationFeatureSpecification", name: "Monthly Rental", value: true },
    { "@type": "LocationFeatureSpecification", name: "Family Rooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant Nearby", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bus Stop Nearby", value: true },
    { "@type": "LocationFeatureSpecification", name: "Supermarket Nearby", value: true },
    { "@type": "LocationFeatureSpecification", name: "Café in Building", value: true },
  ],
};

// JSON-LD: FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the room tariffs at K V Complex Rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rooms start from ₹599 per night. We offer standard single rooms, double rooms, family rooms, and monthly rentals. Contact us on WhatsApp +91 81139 32004 for the latest tariffs.",
      },
    },
    {
      "@type": "Question",
      name: "Where is K V Complex Rooms & Apartments located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at Adivaram on the National Highway (NH-766), at the foothills of Thamarassery Churam, Kozhikode District, Kerala — 673586. We are the perfect gateway stay for Wayanad tourism.",
      },
    },
    {
      "@type": "Question",
      name: "How far is K V Complex from Thamarassery Churam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "K V Complex Rooms is located right at the base of Thamarassery Churam (Ghat Road). The entrance to the ghat road is approximately 2 km from our property.",
      },
    },
    {
      "@type": "Question",
      name: "Is food available near K V Complex?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! New Star Chappathi Company and a tea café are located in the same building. A luncheon hotel and family supermarket are also within walking distance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a room via WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can book directly via WhatsApp at +91 81139 32004. Share your check-in date, number of guests, and room type and we will confirm availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer monthly rentals and apartments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer long-term monthly rental rooms and apartments. These are ideal for working professionals, students, or anyone looking for comfortable extended accommodation in the Adivaram area.",
      },
    },
    {
      "@type": "Question",
      name: "How close is K V Complex to Wayanad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "K V Complex is located at Adivaram, which is the entrance point to Wayanad via the Thamarassery Churam Ghat Road. Wayanad district begins just beyond the ghat, making us an ideal base for Wayanad tourism.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
