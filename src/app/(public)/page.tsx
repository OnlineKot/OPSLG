import Link from "next/link";
import { getIntro, getItems, getPublishedNews } from "@/lib/content";

export const revalidate = 60;

export default async function HomePage() {
  const [hero, facts, about, aboutItems, news] = await Promise.all([
    getIntro("home-hero"),
    getItems("home-facts"),
    getIntro("home-about"),
    getItems("home-about"),
    getPublishedNews(2),
  ]);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <h1>{hero?.title ?? "Genetycy kliniczni, łączcie się"}</h1>
            {hero?.lede && <p className="lede">{hero.lede}</p>}
            <div className="hero__actions">
              <Link href="/dolacz" className="btn btn--primary">Zostań członkiem</Link>
              <Link href="/o-nas" className="btn btn--outline-light">Poznaj naszą misję</Link>
            </div>
          </div>
        </div>
      </section>

      {facts.length > 0 && (
        <section className="section--editorial" style={{ padding: 0 }}>
          <div className="container">
            <div className="fact-row">
              {facts.map((fact) => (
                <div className="fact-row__item" key={fact.id}>
                  <strong>{fact.title}</strong><br /><span>{fact.body}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {about && (
        <section className="section--editorial" id="o-nas">
          <div className="container">
            <div className="section-header">
              {about.eyebrow && <span className="eyebrow">{about.eyebrow}</span>}
              <h2>{about.title}</h2>
              {about.lede && <p>{about.lede}</p>}
            </div>
            <div className="numbered-list">
              {aboutItems.map((item, index) => (
                <div className="numbered-item" key={item.id}>
                  <div className="numbered-item__num">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 16 }}>
              <Link href="/o-nas" style={{ color: "#fff", fontWeight: 600 }}>Dowiedz się więcej o Towarzystwie →</Link>
            </p>
          </div>
        </section>
      )}

      {news.length > 0 && (
        <section className="section" id="aktualnosci">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Aktualności</span>
              <h2>Aktualności</h2>
            </div>
            <div className="announcement-list">
              {news.map((item) => (
                <p className="announcement announcement--wydarzenie" key={item.id}>
                  {item.eventDate && (
                    <time dateTime={item.eventDate.toISOString()}>
                      {item.eventDate.toLocaleDateString("pl-PL", { day: "2-digit", month: "long", year: "numeric" })}
                    </time>
                  )}
                  <Link href={`/aktualnosci/${item.slug}`}>{item.excerpt ?? item.title}</Link>
                </p>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: 32 }}>
              <Link href="/aktualnosci" className="btn btn--doc">Zobacz więcej aktualności</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section section--navy" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "#fff" }}>Dołącz do Polskiego Towarzystwa Lekarzy Genetyków Klinicznych</h2>
          <p className="lede" style={{ maxWidth: 640, margin: "0 auto 28px" }}>
            Członkostwo jest otwarte dla lekarzy specjalizujących się lub odbywających
            szkolenie specjalizacyjne w zakresie genetyki klinicznej.
          </p>
          <div className="hero__actions">
            <Link href="/dolacz" className="btn btn--primary">Dołącz do nas</Link>
            <Link href="/czlonkostwo" className="btn btn--outline-light">Zasady członkostwa</Link>
          </div>
        </div>
      </section>
    </>
  );
}
