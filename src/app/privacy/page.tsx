import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "كيف يتعامل موقع خطوط الإنشاء مع بيانات نموذج التواصل والانتقال إلى واتساب والخدمات الخارجية.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="legal-page inner-page shell">
      <nav className="breadcrumb" aria-label="مسار الصفحة">
        <Link href="/">الرئيسية</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">سياسة الخصوصية</span>
      </nav>

      <article className="legal-card">
        <span className="section-tag">بياناتك وخصوصيتك</span>
        <h1>سياسة الخصوصية</h1>
        <p>توضح هذه الصفحة طريقة التعامل مع البيانات عند استخدام موقع {company.legalName}.</p>

        <section aria-labelledby="privacy-form">
          <h2 id="privacy-form">نموذج مناقشة المشروع</h2>
          <p>يطلب النموذج اسمك ورقم التواصل ونوع الخدمة ونبذة عن المشروع، مع إمكانية إضافة المدينة. تُستخدم هذه المعلومات لإعداد رسالة تتيح لك مناقشة احتياجات مشروعك مع فريق الشركة.</p>
          <p>لا يرسل الموقع بيانات النموذج إلى خادم لحفظها، ولا يحفظها في التخزين المحلي للمتصفح أو في ملفات تعريف الارتباط. تبقى البيانات ضمن الصفحة أثناء تعبئة النموذج.</p>
        </section>

        <section aria-labelledby="privacy-whatsapp">
          <h2 id="privacy-whatsapp">المتابعة عبر واتساب</h2>
          <p>بعد موافقتك على مشاركة البيانات والضغط على «متابعة عبر واتساب»، تُضاف المعلومات إلى رابط واتساب لفتح رسالة مُعدّة مسبقًا. يمكنك مراجعة نص الرسالة قبل إرسالها بنفسك إلى الشركة.</p>
          <p>يتضمن رابط الانتقال بياناتك، وقد يظهر في سجل المتصفح. يخضع استخدام واتساب ومعالجته للبيانات لسياسة الخصوصية الخاصة به.</p>
        </section>

        <section aria-labelledby="privacy-technical">
          <h2 id="privacy-technical">البيانات التقنية وملفات تعريف الارتباط</h2>
          <p>لا يضيف الموقع حاليًا أدوات تحليلات أو إعلانات أو ملفات تعريف ارتباط. قد تسجل جهة الاستضافة معلومات تقنية عن طلبات زيارة الموقع، مثل عنوان الإنترنت ووقت الطلب، لأغراض تشغيل الخدمة وحمايتها.</p>
        </section>

        <section aria-labelledby="privacy-external">
          <h2 id="privacy-external">الخدمات والروابط الخارجية</h2>
          <p>عند فتح روابط واتساب أو خرائط Google، تنتقل إلى خدمة خارجية لها سياساتها الخاصة. لا تُحمّل خريطة خارجية داخل هذا الموقع؛ يفتح رابط الموقع الجغرافي خدمة الخرائط عند اختياره.</p>
        </section>

        <section aria-labelledby="privacy-contact">
          <h2 id="privacy-contact">التواصل بشأن الخصوصية</h2>
          <p>لأي استفسار عن بياناتك أو عن رسالة سبق أن شاركتها مع الشركة، يمكنك التواصل معنا على <a href={`tel:${company.phone}`}><bdi dir="ltr">{company.phoneDisplay}</bdi></a>.</p>
        </section>

        <Link href="/#contact" className="button button-blue">العودة إلى التواصل <Icon name="arrow" /></Link>
      </article>
    </main>
  );
}
