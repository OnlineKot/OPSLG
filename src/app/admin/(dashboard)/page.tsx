import Link from "next/link";

export const metadata = { title: "Panel PTLGK" };

const SECTIONS = [
  { href: "/admin/hero", title: "Strona główna — hasło", desc: "Nagłówek i lead sekcji hero." },
  { href: "/admin/o-nas", title: "O nas", desc: "Wstęp i 4 kafelki opisujące Towarzystwo." },
  { href: "/admin/czlonkostwo", title: "Członkostwo", desc: "Zasady, korzyści i proces przystąpienia." },
  { href: "/admin/struktura", title: "Struktura", desc: "Organy Towarzystwa." },
  { href: "/admin/aktualnosci", title: "Aktualności", desc: "Lista wpisów — dodawaj, edytuj, publikuj." },
  { href: "/admin/wspolpraca", title: "Współpraca", desc: "Treść zakładki Współpraca." },
  { href: "/admin/kontakt", title: "Kontakt", desc: "Dane kontaktowe wyświetlane na stronie." },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1>Panel PTLGK</h1>
      <p className="small">Wybierz sekcję, którą chcesz edytować. Zmiany są widoczne na stronie od razu po zapisaniu.</p>
      <div className="admin-grid">
        {SECTIONS.map((section) => (
          <Link href={section.href} className="admin-card" key={section.href}>
            <h3>{section.title}</h3>
            <p>{section.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
