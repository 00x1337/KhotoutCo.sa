"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/#about", label: "عن الشركة" },
  { href: "/#services", label: "خدماتنا" },
  { href: "/#sectors", label: "قطاعاتنا" },
  { href: "/#quality", label: "الجودة والسلامة" },
  { href: "/#contact", label: "تواصل معنا" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    function handleFocusOutside(event: FocusEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("focusin", handleFocusOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("focusin", handleFocusOutside);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner shell">
        <Link href="/" className="brand" aria-label="خطوط الإنشاء للمقاولات — الصفحة الرئيسية" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={43}
            height={58}
            className="brand-logo"
          />
          <span className="brand-name"><strong>خطوط الإنشاء</strong><span>للمقاولات العامة</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
          ))}
        </nav>

        <Link href="/#contact" className="header-cta button button-navy">
          ناقش مشروعك
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 12H5m7 7-7-7 7-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <nav id="mobile-navigation" className="mobile-nav shell" aria-label="التنقل عبر الهاتف" hidden={!menuOpen}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            {link.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
        <Link href="/#contact" className="button button-blue" onClick={() => setMenuOpen(false)}>ناقش مشروعك</Link>
      </nav>
    </header>
  );
}
