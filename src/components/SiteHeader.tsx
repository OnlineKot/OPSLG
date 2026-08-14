"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MAIN_NAV } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <span className="brand__mark" aria-hidden="true">PTLGK</span>
          <span className="brand__text">
            <span className="brand__name">Polskie Towarzystwo Lekarzy Genetyków Klinicznych</span>
            <span className="brand__sub">Organizacja pożytku publicznego</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Otwórz menu nawigacji"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
        </button>

        <nav className={`main-nav${isOpen ? " is-open" : ""}`} aria-label="Nawigacja główna">
          <ul>
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <Link href="/dolacz" className="btn--card">
            <span className="btn--card__sub">PTLGK</span>
            <span className="btn--card__label">Dołącz do nas</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
