import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedNews } from "@/lib/content";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Aktualności",
  description: "Najnowsze komunikaty, wydarzenia i informacje Polskiego Towarzystwa Lekarzy Genetyków Klinicznych.",
};

export default async function AktualnosciPage() {
  const news = await getPublishedNews();

  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Aktualności</p>

        <div className="section-header" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0 }}>
          <span className="eyebrow">Aktualności</span>
          <h1>Aktualności</h1>
        </div>

        {news.length === 0 && <p>Brak aktualności do wyświetlenia.</p>}

        <div className="grid grid--2">
          {news.map((item, index) => (
            <details className="tile-card" key={item.id} open={index < 2}>
              <summary>
                <span className="tile-card__icon">{item.title.charAt(0)}</span> {item.title}
              </summary>
              <div className="tile-card__body">
                {item.eventDate && (
                  <p className="small" style={{ marginBottom: 8 }}>
                    <time dateTime={item.eventDate.toISOString()}>
                      {item.eventDate.toLocaleDateString("pl-PL", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </time>
                  </p>
                )}
                {item.body.split(/\n\s*\n/).map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph.trim()}</p>
                ))}
                <p><Link href={`/aktualnosci/${item.slug}`}>Stały link do wpisu →</Link></p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
