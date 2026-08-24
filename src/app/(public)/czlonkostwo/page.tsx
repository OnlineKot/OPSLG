import type { Metadata } from "next";
import Link from "next/link";
import { getIntro, getItems } from "@/lib/content";
import { RichText } from "@/components/RichText";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Członkostwo",
  description: "Zasady członkostwa w Polskim Towarzystwie Lekarzy Genetyków Klinicznych.",
};

export default async function CzlonkostwoPage() {
  const [intro, benefits] = await Promise.all([
    getIntro("czlonkostwo"),
    getItems("czlonkostwo-benefits"),
  ]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Strona główna</Link> / Członkostwo</p>
          <span className="eyebrow">Członkostwo</span>
          <h1>{intro?.title ?? "Dołącz do PTLGK!"}</h1>
          {intro?.lede && <p className="lede">{intro.lede}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {benefits.length > 0 && (
            <>
              <h2 style={{ fontSize: "1.5rem", marginBottom: 24 }}>Co daje członkostwo?</h2>
              <ul className="benefit-list">
                {benefits.map((item, index) => (
                  <li key={item.id}>
                    <span className="benefit-list__num">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {intro?.body && (
            <div style={{ marginTop: 56, maxWidth: 760 }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: 16 }}>Jak zostać członkiem?</h2>
              <RichText value={intro.body} />
            </div>
          )}

          {intro?.closing && (
            <p className="lede" style={{ maxWidth: 620, marginTop: 40 }}>{intro.closing}</p>
          )}

          <div style={{ marginTop: 32 }}>
            <Link href="/dolacz" className="btn btn--primary">Wypełnij deklarację członkowską</Link>
          </div>
        </div>
      </section>
    </>
  );
}
