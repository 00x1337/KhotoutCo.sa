import Link from "next/link";
import Image from "next/image";
import { company, services } from "@/lib/company";
import Icon from "./Icon";

export default function SiteFooter() {
  return <footer className="site-footer shell">
    <div className="footer-main">
      <div className="footer-brand"><Link href="/" aria-label="خطوط الإنشاء، الرئيسية"><Image src="/images/logo.png" width={90} height={100} alt="شعار خطوط الإنشاء" /></Link><p>نرسم خطوط المستقبل،<br />ونبنيها بإتقان.</p><span>من مكة المكرمة، برؤية طموحة.</span></div>
      <div><h3>تعرّف علينا</h3><Link href="/#about">عن خطوط الإنشاء</Link><Link href="/#quality">الجودة والالتزام</Link><Link href="/#sectors">القطاعات</Link><a href={company.profile} download>الملف التعريفي <Icon name="download" /></a></div>
      <div><h3>مجالات عملنا</h3>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}/`}>{s.title}</Link>)}<Link href="/#contact">طلب عرض سعر</Link></div>
      <div><h3>لنبنِ تواصلًا</h3><a href={`tel:${company.phone}`} dir="ltr">{company.phoneDisplay}</a><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">تحدث معنا على واتساب <Icon name="arrow" /></a><p>{company.address}</p><span className="footer-cr">سجل تجاري: <bdi>{company.commercialRegistration}</bdi></span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {company.legalName}. جميع الحقوق محفوظة.</span><Link href="/privacy/">الخصوصية</Link><span className="footer-signature" lang="en">BUILT ON TRUST.</span></div>
  </footer>;
}
