import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة خطوط الإنشاء للمقاولات العامة | Khotout Al-Enshaa",
  description: "شركة خطوط الإنشاء للمقاولات العامة - رائدة في مجال المباني والإنشاءات والبنية التحتية، مصنفة بالدرجة الأولى A+ ومعتمدة من كدانة وهيئة المقاولين بمكة المكرمة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
