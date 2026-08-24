import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedNews } from "@/lib/content";
import { RichText } from "@/components/RichText";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Aktualności",
  description: "Najnowsze komunikaty, wydarzenia i informacje Polskiego Towarzystwa Lekarzy Genetyków Klinicznych.",
};

export default async function AktualnosciPage() {
  const news = await getPublishedNews();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Strona główna</Link> / Aktualności</p>
          <span className="eyebrow">Aktualności</span>
          <h1>Aktualności</h1>
          <p className="lede">Komunikaty Zarządu, wydarzenia i informacje o działalności Towarzystwa.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {news.length === 0 && <p>Brak aktualności do wyświetlenia.</p>}

          <div className="news-list">
            {news.map((item) => {
              const date = item.eventDate ?? item.createdAt;
              return (
                <article className="news-entry" key={item.id}>
                  <div className="news-entry__meta">
                    <time dateTime={date.toISOString()}>
                      {date.toLocaleDateString("pl-PL", { day: "2-digit", month: "long", year: "numeric" })}
                    </time>
                  </div>
                  <div className="news-entry__body">
                    <h2>
                      <Link href={`/aktualnosci/${item.slug}`}>{item.title}</Link>
                    </h2>
                    <RichText value={item.body} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
