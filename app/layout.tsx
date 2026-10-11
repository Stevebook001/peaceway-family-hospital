import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://peaceway-family-hospital.vercel.app";
const brandImage = "https://i.ibb.co/8DnNhyzN/WA-1791745407700.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Peaceway Family Hospital | Family Healthcare in Soka, Ibadan",
    template: "%s | Peaceway Family Hospital",
  },
  description:
    "Peaceway Family Hospital in Soka, Ibadan, supports healthier families through compassionate healthcare, health education and community outreach.",
  applicationName: "Peaceway Family Hospital",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Peaceway Family Hospital",
    title: "Peaceway Family Hospital | Caring for You, Every Step of the Way",
    description:
      "Family-focused healthcare, health education and community care in Soka, Ibadan, Oyo State, Nigeria.",
    images: [{ url: brandImage, width: 1200, height: 630, alt: "Peaceway Family Hospital" }],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peaceway Family Hospital",
    description: "Caring for you and your family in Soka, Ibadan.",
    images: [brandImage],
  },
  robots: { index: true, follow: true },
  verification: { google: "gcIuNfHshpZd1RlDKs9TSKnSs0U-KpPkrJOZrs1FaOc" },
  icons: { icon: [{ url: brandImage, type: "image/jpeg" }] },
};

export const viewport: Viewport = {
  themeColor: "#1769AA",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body>{children}</body>
    </html>
  );
}
