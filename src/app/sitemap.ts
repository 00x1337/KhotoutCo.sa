import type { MetadataRoute } from "next";
import { company, services } from "@/lib/company";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${company.url}/`, changeFrequency: "monthly", priority: 1 },
    ...services.map(s => ({ url: `${company.url}/services/${s.slug}/`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${company.url}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
