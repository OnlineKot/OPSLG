import type { Metadata } from "next";
import Link from "next/link";
import { getIntro, getItems } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Struktura",
  description: "Struktura Polskiego Towarzystwa Lekarzy Genetyków Klinicznych: Walne Zebranie Członków, Zarząd, Komisja Rewizyjna oraz Kolegium Doradcze.",
};

export default async function StrukturaPage() {
  const [intro, items] = await Promise.all([getIntro("struktura"), getItems("struktura")]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Strona główna</Link> / Struktura</p>
          <span className="eyebrow">Struktura</span>
          <h1>{intro?.title ?? "Struktura organizacyjna"}</h1>
          {intro?.lede && <p className="lede">{intro.lede}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="def-list">
            {items.map((item, index) => (
              <div className="def-item" key={item.id}>
                <h3>
                  <span className="def-item__num">{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>

          {intro?.closing && (
            <p className="lede" style={{ maxWidth: 620, marginTop: 40 }}>{intro.closing}</p>
          )}
        </div>
      </section>
    </>
  );
}
