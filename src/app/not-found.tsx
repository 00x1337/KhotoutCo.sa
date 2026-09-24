import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <main id="main-content" className="legal-page inner-page shell">
      <div className="legal-card">
        <span className="section-tag">خطوط الإنشاء <span aria-hidden="true">/ 404</span></span>
        <h1>لم نعثر على هذه الصفحة.</h1>
        <p>قد يكون الرابط تغير أو كُتب بشكل غير صحيح. يمكنك العودة للرئيسية لاستكشاف خدماتنا، أو التواصل معنا لمناقشة مشروعك.</p>
        <div className="detail-cta">
          <Link href="/" className="button button-blue">العودة إلى الرئيسية <Icon name="arrow" /></Link>
          <Link href="/#contact" className="button button-quiet">تواصل معنا</Link>
        </div>
      </div>
    </main>
  );
}
