"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/admin", label: "Pulpit" },
  { href: "/admin/hero", label: "Strona główna" },
  { href: "/admin/o-nas", label: "O nas" },
  { href: "/admin/czlonkostwo", label: "Członkostwo" },
  { href: "/admin/struktura", label: "Struktura" },
  { href: "/admin/aktualnosci", label: "Aktualności" },
  { href: "/admin/wspolpraca", label: "Współpraca" },
  { href: "/admin/kontakt", label: "Kontakt" },
];

export function AdminSidebarNav() {
  const pathname = usePathname();

  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {LINKS.map((link) => {
        const isActive = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
        return (
          <Link key={link.href} href={link.href} className={`admin-nav-link${isActive ? " is-active" : ""}`}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
