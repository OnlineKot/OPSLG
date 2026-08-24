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
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Strona główna</Link> / Współpraca</p>
          <span className="eyebrow">Współpraca</span>
          <h1>{intro?.title ?? "Współpraca"}</h1>
          {intro?.lede && <p className="lede">{intro.lede}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 620 }}>
            <p className="lede">
              Jesteśmy otwarci na współpracę z ośrodkami klinicznymi, laboratoriami,
              organizacjami pacjentów oraz partnerami krajowymi i zagranicznymi.
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/kontakt" className="btn btn--primary">Skontaktuj się z nami</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
