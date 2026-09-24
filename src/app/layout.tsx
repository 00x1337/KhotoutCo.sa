import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { company } from "@/lib/company";
import "./globals.css";

const tajawal = localFont({
  src: [
    { path: "../fonts/Tajawal-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Tajawal-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Tajawal-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Tajawal-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  display: "swap", variable: "--font-arabic",
});
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: "خطوط الإنشاء | نبني المستقبل بإتقان", template: "%s | خطوط الإنشاء" },
  description: "شركة خطوط الإنشاء للمقاولات العامة في مكة المكرمة. خدمات أعمال المباني والبنية التحتية والإنشاءات المدنية. تعرّف على خدماتنا وتواصل لمناقشة مشروعك.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ar_SA", siteName: company.legalName, title: "خطوط الإنشاء | نبني المستقبل بإتقان", description: "من الفكرة إلى البناء. شريكك في أعمال المباني والبنية التحتية والإنشاءات المدنية.", url: company.url, images: [{ url: "/images/social-card.png", width: 1200, height: 630, alt: company.legalName }] },
  twitter: { card: "summary_large_image", title: company.legalName, images: ["/images/social-card.png"] },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};
export const viewport: Viewport = { themeColor: "#f3f4f3", width: "device-width", initialScale: 1 };
const structuredData = {
  "@context": "https://schema.org", "@type": "GeneralContractor", name: company.legalName, alternateName: company.englishName,
  url: company.url, logo: `${company.url}/images/logo.png`, telephone: company.phone,
  address: { "@type": "PostalAddress", addressLocality: "مكة المكرمة", streetAddress: "حي الملك فهد، أم الكتاد", addressCountry: "SA" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl" className={tajawal.variable}><body>
    <a className="skip-link" href="#main-content">انتقل إلى المحتوى</a>
    <SiteHeader />{children}<SiteFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
  </body></html>;
}
