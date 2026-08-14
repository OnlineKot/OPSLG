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
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Członkostwo</p>

        <div className="section-header" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0 }}>
          <span className="eyebrow">Członkostwo</span>
          <h1>{intro?.title ?? "Dołącz do PTLGK!"}</h1>
          {intro?.lede && <p className="lede">{intro.lede}</p>}
        </div>

        {benefits.length > 0 && (
          <>
            <div className="section-header" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0, marginTop: 8 }}>
              <h2 style={{ fontSize: "1.3rem", borderBottom: "none" }}>Co daje członkostwo?</h2>
            </div>
            <div className="grid grid--3" style={{ marginBottom: 40 }}>
              {benefits.map((item) => (
                <div className="card card--flat" key={item.id}>
                  <div className="card__icon card__icon--zone">{item.title}</div>
                  <p>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}.</p>
                </div>
              ))}
            </div>
          </>
        )}

        {intro?.body && (
          <details className="tile-card" open style={{ maxWidth: 820 }}>
            <summary><span className="tile-card__icon">?</span> Jak zostać członkiem?</summary>
            <div className="tile-card__body">
              <RichText value={intro.body} />
            </div>
          </details>
        )}

        {intro?.closing && (
          <p className="text-center" style={{ marginTop: 32 }}>{intro.closing}</p>
        )}
        <p className="text-center">
          <Link href="/dolacz" className="btn btn--primary" style={{ marginTop: 8 }}>Wypełnij deklarację członkowską</Link>
        </p>
      </div>
    </section>
  );
}
