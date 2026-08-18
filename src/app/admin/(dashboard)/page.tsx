import Link from "next/link";
import { prisma } from "@/lib/db";
import { getContactInfo, getIntro, getItems } from "@/lib/content";

export const metadata = { title: "Panel PTLGK" };

function truncate(text: string | null | undefined, max = 70): string {
  if (!text) return "—";
  return text.length > max ? `${text.slice(0, max).trim()}…` : text;
}

export default async function AdminDashboardPage() {
  const [
    hero,
    aboutItems,
    benefits,
    structureItems,
    newsCounts,
    collaboration,
    contact,
  ] = await Promise.all([
    getIntro("home-hero"),
    getItems("o-nas"),
    getItems("czlonkostwo-benefits"),
    getItems("struktura"),
    prisma.newsPost.groupBy({ by: ["published"], _count: true }),
    getIntro("wspolpraca"),
    getContactInfo(),
  ]);

  const published = newsCounts.find((c) => c.published)?._count ?? 0;
  const drafts = newsCounts.find((c) => !c.published)?._count ?? 0;

  const sections = [
    { href: "/admin/hero", title: "Strona główna", preview: truncate(hero?.title) },
    { href: "/admin/o-nas", title: "O nas", preview: `${aboutItems.length} kafelki treści` },
    { href: "/admin/czlonkostwo", title: "Członkostwo", preview: `${benefits.length} korzyści na liście` },
    { href: "/admin/struktura", title: "Struktura", preview: `${structureItems.length} organy Towarzystwa` },
    { href: "/admin/aktualnosci", title: "Aktualności", preview: `${published} opublikowane · ${drafts} szkice` },
    { href: "/admin/wspolpraca", title: "Współpraca", preview: truncate(collaboration?.lede) },
    { href: "/admin/kontakt", title: "Kontakt", preview: contact?.email ?? "brak danych" },
  ];

  return (
    <div>
      <div className="admin-page-head">
        <h1>Pulpit</h1>
      </div>
      <p className="small">Wybierz kafelek, żeby edytować daną sekcję. Zmiany są widoczne na stronie od razu po zapisaniu.</p>
      <div className="admin-grid">
        {sections.map((section) => (
          <Link href={section.href} className="admin-card" key={section.href}>
            <h3>{section.title}</h3>
            <p>{section.preview}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
