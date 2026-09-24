import type { CSSProperties, ReactNode } from "react";

export type IconName = "arrow" | "download" | "building" | "route" | "waves" | "shield" | "compass" | "spark" | "pin" | "phone" | "check" | "plus" | "whatsapp" | "file" | "school" | "health" | "store" | "home";
const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M19 12H5m7-7-7 7 7 7" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />,
  building: <path d="M4 21V7l9-4v18M13 9h7v12M2 21h20M8 8v1m0 3v1m0 3v1m9-4v1m0 3v1" />,
  route: <path d="M8 3 4 21M16 3l4 18M12 4v3m0 4v3m0 4v3M3 12h4m10 0h4" />,
  waves: <path d="M2 17c2-3 4 3 6 0s4 3 6 0 4 3 8 0M2 21c2-3 4 3 6 0s4 3 6 0 4 3 8 0M4 13l4-9h8l4 9M8 4l2 9m6-9-2 9" />,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-2 6-6 2 2-6 6-2Z" /></>,
  spark: <path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7L12 2Z" />,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <path d="m7 3 3 5-3 2a14 14 0 0 0 7 7l2-3 5 3-1 4C10 23 1 14 3 4l4-1Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  whatsapp: <><path d="M20 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.1-4.3A8.5 8.5 0 1 1 20 11.5Z" /><path d="m9 7 1.5 2.5L9 11a8 8 0 0 0 4 4l1.5-1.5L17 15" /></>,
  file: <path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M9 12h6m-6 4h6" />,
  school: <path d="m2 9 10-6 10 6-10 6L2 9Zm4 3v6l6 3 6-3v-6m4-3v8" />,
  health: <><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M12 8v8m-4-4h8" /></>,
  store: <path d="M4 10v11h16V10M3 10l2-7h14l2 7M3 10c0 3 4 3 4 0 0 3 5 3 5 0 0 3 5 3 5 0 0 3 4 3 4 0M9 21v-6h6v6" />,
  home: <path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7" />,
};
export default function Icon({ name, className = "", style }: { name: IconName; className?: string; style?: CSSProperties }) {
  return <svg className={`icon ${className}`} style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
