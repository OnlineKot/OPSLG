import type { Metadata } from "next";
import Link from "next/link";
import { getIntro } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Współpraca",
  description: "Współpraca z Polskim Towarzystwem Lekarzy Genetyków Klinicznych.",
};

export default async function WspolpracaPage() {
  const intro = await getIntro("wspolpraca");

  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Współpraca</p>

        <div className="section-header" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0 }}>
          <span className="eyebrow">Współpraca</span>
          <h1>{intro?.title ?? "Współpraca"}</h1>
          {intro?.lede && <p className="lede">{intro.lede}</p>}
        </div>

        <Link href="/kontakt" className="btn btn--primary">Skontaktuj się z nami</Link>
      </div>
    </section>
  );
}
