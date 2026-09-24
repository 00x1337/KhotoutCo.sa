import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { company, services } from "@/lib/company";

type ServicePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: `${service.title} | ${company.name}`,
      description: service.description,
      url: `${company.url}/services/${service.slug}/`,
      type: "website",
      locale: "ar_SA",
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);
  const whatsappMessage = `السلام عليكم، أرغب في مناقشة مشروع في مجال ${service.title} مع شركة خطوط الإنشاء للمقاولات.`;

  return (
    <main id="main-content" className="inner-page shell">
      <nav className="breadcrumb" aria-label="مسار الصفحة">
        <Link href="/">الرئيسية</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#services">خدماتنا</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{service.title}</span>
      </nav>

      <section className="service-detail-hero" aria-labelledby="service-title">
        <div className="service-detail-copy">
          <span className="section-tag">خدمات خطوط الإنشاء <span aria-hidden="true">/ {service.number}</span></span>
          <h1 id="service-title">{service.title}</h1>
          <p><strong>{service.subtitle}</strong></p>
          <p>{service.detail}</p>
          <Link href="/#contact" className="button button-blue">ناقش مشروعك معنا <Icon name="arrow" /></Link>
        </div>
        <figure className="service-detail-image">
          <Image src={service.image} alt={service.imageAlt} width={1100} height={850} preload sizes="(max-width: 800px) 100vw, 50vw" />
          <figcaption className="photo-source">من صور الملف التعريفي للشركة</figcaption>
        </figure>
      </section>

      <div className="detail-content">
        <section className="detail-panel" aria-labelledby="service-scope">
          <Icon name={service.icon} />
          <h2 id="service-scope">نطاق أعمالنا</h2>
          <p>{service.description}</p>
          <ul className="check-list">
            {service.items.map((item) => <li key={item}><Icon name="check" /><span>{item}</span></li>)}
          </ul>
        </section>

        <section className="detail-panel" aria-labelledby="service-preparation">
          <Icon name="file" />
          <h2 id="service-preparation">لنبدأ من صورة واضحة</h2>
          <p>شاركنا ما يتوفر لديك من المعلومات التالية، لنناقش احتياجات مشروعك ونطاق العمل المناسب.</p>
          <ul className="check-list">
            {service.preparation.map((item) => <li key={item}><Icon name="check" /><span>{item}</span></li>)}
          </ul>
        </section>
      </div>

      <section className="detail-cta" aria-labelledby="service-contact">
        <div>
          <span className="section-tag">الخطوة الأولى تبدأ بحوار</span>
          <h2 id="service-contact">لديك مشروع في {service.title}؟</h2>
          <p>تواصل مع فريقنا لمناقشة التفاصيل والمتطلبات والخطوات القادمة.</p>
        </div>
        <a href={`${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`} className="button button-blue">
          تحدث معنا عبر واتساب <Icon name="whatsapp" />
        </a>
      </section>

      <section className="related-services" aria-labelledby="related-services-title">
        <h2 id="related-services-title">تعرّف على خدماتنا الأخرى</h2>
        {otherServices.map((item) => (
          <article key={item.slug} className="service-card">
            <Icon name={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={`/services/${item.slug}/`} className="button button-quiet">استكشف الخدمة <Icon name="arrow" /></Link>
          </article>
        ))}
      </section>
    </main>
  );
}
