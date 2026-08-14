import type { Metadata } from "next";
import { getIntro, getItems } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Struktura",
  description: "Struktura Polskiego Towarzystwa Lekarzy Genetyków Klinicznych: Walne Zebranie Członków, Zarząd, Komisja Rewizyjna oraz Kolegium Doradcze.",
};

export default async function StrukturaPage() {
  const [intro, items] = await Promise.all([getIntro("struktura"), getItems("struktura")]);

  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Struktura</p>

        <div className="section-header" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0 }}>
          <span className="eyebrow">Struktura</span>
          <h1>{intro?.title ?? "Struktura organizacyjna"}</h1>
          {intro?.lede && <p className="lede">{intro.lede}</p>}
        </div>

        <div className="grid grid--2">
          {items.map((item, index) => (
            <details className="tile-card" key={item.id} open={index === 0}>
              <summary><span className="tile-card__icon">{item.title.charAt(0)}</span> {item.title}</summary>
              <div className="tile-card__body"><p>{item.body}</p></div>
            </details>
          ))}
        </div>

        {intro?.closing && (
          <p className="text-center" style={{ marginTop: 32 }}>{intro.closing}</p>
        )}
      </div>
    </section>
  );
}
