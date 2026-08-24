import Link from "next/link";
import { getIntro, getItems, getPublishedNews } from "@/lib/content";

export const revalidate = 60;

export default async function HomePage() {
  const [hero, facts, about, aboutItems, news, membership, benefits] = await Promise.all([
    getIntro("home-hero"),
    getItems("home-facts"),
    getIntro("home-about"),
    getItems("home-about"),
    getPublishedNews(2),
    getIntro("czlonkostwo"),
    getItems("czlonkostwo-benefits"),
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
        <section className="section section--dark" id="aktualnosci">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Aktualności</span>
              <h2>Aktualności</h2>
            </div>
            <div className="announcement-list">
              {news.map((item) => {
                const date = item.eventDate ?? item.createdAt;
                return (
                  <p className="announcement announcement--wydarzenie" key={item.id}>
                    <time dateTime={date.toISOString()}>
                      {date.toLocaleDateString("pl-PL", { day: "2-digit", month: "long", year: "numeric" })}
                    </time>
                    <Link href={`/aktualnosci/${item.slug}`}>{item.excerpt ?? item.title}</Link>
                  </p>
                );
              })}
            </div>
            <div style={{ marginTop: 32 }}>
              <Link href="/aktualnosci" className="btn btn--outline">Zobacz więcej aktualności</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section section--dark" id="czlonkostwo">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Członkostwo</span>
            <h2>{membership?.title ?? "Dołącz do PTLGK"}</h2>
          </div>
          <div className="grid grid--3">
            <div className="card card--flat">
              <h3>Kto może wstąpić</h3>
              {membership?.lede && <p>{membership.lede}</p>}
            </div>
            <div className="card card--flat">
              <h3>Co daje członkostwo</h3>
              {benefits.length > 0 && (
                <ul className="doc-list" style={{ textAlign: "left", margin: 0 }}>
                  {benefits.slice(0, 3).map((item) => (
                    <li key={item.id}>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card card--flat">
              <h3>Jak wstąpić</h3>
              <p>Napisz do nas, aby otrzymać deklarację członkowską — elektronicznie lub na spotkaniu inauguracyjnym.</p>
            </div>
          </div>
          <p style={{ marginTop: 32 }}>
            <Link href="/czlonkostwo">Pełne zasady członkostwa →</Link>
          </p>
        </div>
      </section>

      <section className="section section--navy cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Gotowy, żeby dołączyć?</h2>
            <p style={{ margin: 0 }}>Wypełnij deklarację i dołącz do środowiska genetyków klinicznych.</p>
          </div>
          <Link href="/dolacz" className="btn btn--primary">Wypełnij deklarację</Link>
        </div>
      </section>
    </>
  );
}
