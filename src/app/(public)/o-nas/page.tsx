import type { Metadata } from "next";
import { getIntro, getItems } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "O nas",
  description: "Polskie Towarzystwo Lekarzy Genetyków Klinicznych (PTLGK) — kim jesteśmy i czym się zajmujemy.",
};

export default async function ONasPage() {
  const [intro, items] = await Promise.all([getIntro("o-nas"), getItems("o-nas")]);

  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / O nas</p>

        <div className="section-header" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0 }}>
          <span className="eyebrow">O nas</span>
          <h1>O nas</h1>
        </div>

        {intro?.lede && (
          <p className="lede" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0 }}>{intro.lede}</p>
        )}

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
