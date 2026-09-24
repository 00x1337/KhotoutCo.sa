"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { company, services as companyServices } from "@/lib/company";

type FieldName = "name" | "phone" | "service" | "city" | "details" | "consent";
type FormValues = Record<Exclude<FieldName, "consent">, string> & {
  consent: boolean;
};
type FormErrors = Partial<Record<FieldName, string>>;

const services: Record<string, string> = Object.fromEntries(companyServices.map(service => [service.slug, service.title]));

const initialValues: FormValues = {
  name: "",
  phone: "",
  service: "",
  city: "",
  details: "",
  consent: false,
};

function normalizePhone(value: string) {
  return value
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[\s()\-]/g, "")
    .replace(/^00/, "+");
}

function validateField(field: FieldName, values: FormValues): string | undefined {
  switch (field) {
    case "name":
      if (values.name.trim().length < 2) return "اكتب اسمك من حرفين على الأقل.";
      if (values.name.trim().length > 80) return "اكتب الاسم في ٨٠ حرفًا أو أقل.";
      break;
    case "phone": {
      const phone = normalizePhone(values.phone);
      const validPhone = /^\+?966/.test(phone)
        ? /^\+?966[15]\d{8}$/.test(phone)
        : /^(?:0[15]\d{8}|5\d{8}|\+[1-9]\d{7,14})$/.test(phone);
      if (!validPhone) return "أدخل رقمًا سعوديًا صحيحًا، أو رقمًا دوليًا يبدأ بـ + ورمز الدولة.";
      break;
    }
    case "service":
      if (!Object.keys(services).includes(values.service)) return "اختر الخدمة المناسبة لمشروعك.";
      break;
    case "city":
      if (values.city.trim().length > 100) return "اكتب اسم المدينة في ١٠٠ حرف أو أقل.";
      break;
    case "details":
      if (values.details.trim().length < 10) return "أضف نبذة عن مشروعك من ١٠ أحرف على الأقل.";
      if (values.details.trim().length > 2000) return "اختصر نبذة المشروع إلى ٢٠٠٠ حرف أو أقل.";
      break;
    case "consent":
      if (!values.consent) return "يرجى الموافقة على مشاركة هذه البيانات لمناقشة مشروعك.";
      break;
  }
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState("");

  function updateField<K extends FieldName>(field: K, value: FormValues[K]) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    setFeedback("");
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: validateField(field, nextValues),
      }));
    }
  }

  function checkField(field: FieldName) {
    setErrors((current) => ({ ...current, [field]: validateField(field, values) }));
  }

  function submitProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    const fields = Object.keys(initialValues) as FieldName[];

    for (const field of fields) {
      const error = validateField(field, values);
      if (error) nextErrors[field] = error;
    }

    setErrors(nextErrors);
    const firstInvalid = fields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setFeedback("راجع الحقول الموضحة أدناه لإكمال طلبك.");
      const control = event.currentTarget.elements.namedItem(firstInvalid);
      if (control instanceof HTMLElement) control.focus();
      return;
    }

    const message = [
      "السلام عليكم، أرغب في مناقشة مشروع مع شركة خطوط الإنشاء للمقاولات.",
      "",
      `الاسم: ${values.name.trim()}`,
      `رقم التواصل: ${normalizePhone(values.phone)}`,
      `الخدمة: ${services[values.service as keyof typeof services]}`,
      `مدينة المشروع: ${values.city.trim() || "لم تُحدد بعد"}`,
      "",
      "نبذة عن المشروع:",
      values.details.trim(),
    ].join("\n");

    window.open(`${company.whatsapp}?text=${encodeURIComponent(message)}`, "_self", "noopener,noreferrer");
  }

  function fieldError(field: FieldName) {
    return errors[field] ? (
      <span className="field-error" id={`project-${field}-error`}>
        {errors[field]}
      </span>
    ) : null;
  }

  return (
    <form className="contact-form" onSubmit={submitProject} noValidate aria-label="ناقش مشروعك">
      <p className="form-note">الحقول المميزة بعلامة * مطلوبة.</p>
      <p className="form-feedback" role="status" aria-live="polite">
        {feedback}
      </p>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="project-name">الاسم <span aria-hidden="true">*</span></label>
          <input
            id="project-name"
            name="name"
            autoComplete="name"
            placeholder="اسمك الكريم"
            required
            minLength={2}
            maxLength={80}
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            onBlur={() => checkField("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "project-name-error" : undefined}
          />
          {fieldError("name")}
        </div>

        <div className="form-field">
          <label htmlFor="project-phone">رقم التواصل <span aria-hidden="true">*</span></label>
          <input
            id="project-phone"
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            placeholder="05XXXXXXXX"
            required
            maxLength={30}
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            onBlur={() => checkField("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "project-phone-error" : undefined}
          />
          {fieldError("phone")}
        </div>

        <div className="form-field">
          <label htmlFor="project-service">نوع الخدمة <span aria-hidden="true">*</span></label>
          <select
            id="project-service"
            name="service"
            required
            value={values.service}
            onChange={(event) => updateField("service", event.target.value)}
            onBlur={() => checkField("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "project-service-error" : undefined}
          >
            <option value="" disabled>اختر الخدمة</option>
            {Object.entries(services).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          {fieldError("service")}
        </div>

        <div className="form-field">
          <label htmlFor="project-city">مدينة المشروع <span>(اختياري)</span></label>
          <input
            id="project-city"
            name="city"
            autoComplete="address-level2"
            placeholder="مثل: الرياض"
            maxLength={100}
            value={values.city}
            onChange={(event) => updateField("city", event.target.value)}
            onBlur={() => checkField("city")}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "project-city-error" : undefined}
          />
          {fieldError("city")}
        </div>

        <div className="form-field field-wide">
          <label htmlFor="project-details">حدثنا عن مشروعك <span aria-hidden="true">*</span></label>
          <textarea
            id="project-details"
            name="details"
            placeholder="نوع المشروع، موقعه، ونطاق الأعمال الذي تحتاجه…"
            required
            minLength={10}
            maxLength={2000}
            rows={4}
            value={values.details}
            onChange={(event) => updateField("details", event.target.value)}
            onBlur={() => checkField("details")}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={errors.details ? "project-details-error" : undefined}
          />
          {fieldError("details")}
        </div>
      </div>

      <div className="form-field field-wide">
        <div className="consent-row">
          <input
            id="project-consent"
            name="consent"
            type="checkbox"
            required
            checked={values.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            onBlur={() => checkField("consent")}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "project-consent-error" : undefined}
          />
          <label htmlFor="project-consent">
            أوافق على مشاركة بياناتي لمناقشة مشروعي وفق <Link href="/privacy/" target="_blank" rel="noopener noreferrer">سياسة الخصوصية (تفتح في صفحة جديدة)</Link>.
          </label>
        </div>
        {fieldError("consent")}
      </div>

      <button type="submit" className="button button-blue">
        متابعة عبر واتساب
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M19 12H5m7 7-7-7 7-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="form-note">
        يفتح الزر واتساب لمراجعة رسالتك وإرسالها بنفسك. لا تُحفظ بيانات النموذج على الموقع.
      </p>
      <p className="form-note"><a href={`tel:${company.phone}`}>أو اتصل بنا مباشرة</a></p>
    </form>
  );
}
