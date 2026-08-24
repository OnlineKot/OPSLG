import type { Metadata } from "next";
import Link from "next/link";
import { getIntro, getItems } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "O nas",
  description: "Polskie Towarzystwo Lekarzy Genetyków Klinicznych (PTLGK) — kim jesteśmy i czym się zajmujemy.",
};

export default async function ONasPage() {
  const [intro, items] = await Promise.all([getIntro("o-nas"), getItems("o-nas")]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Strona główna</Link> / O nas</p>
          <span className="eyebrow">O nas</span>
          <h1>O nas</h1>
          {intro?.lede && <p className="lede">{intro.lede}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="def-list">
            {items.map((item) => (
              <div className="def-item" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>

          {intro?.closing && (
            <p className="lede" style={{ maxWidth: 620, marginTop: 40 }}>{intro.closing}</p>
          )}

          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/czlonkostwo" className="btn btn--primary">Dołącz do Towarzystwa</Link>
            <Link href="/struktura-organizacyjna" className="btn btn--outline">Zobacz strukturę</Link>
          </div>
        </div>
      </section>
    </>
  );
}
