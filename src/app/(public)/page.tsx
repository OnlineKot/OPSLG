import Link from "next/link";
import { getContactInfo, getIntro, getItems, getPublishedNews } from "@/lib/content";

export const revalidate = 60;

export default async function HomePage() {
  const [hero, facts, about, aboutItems, activity, activityItems, structureItems, membership, news, contact] =
    await Promise.all([
      getIntro("home-hero"),
      getItems("home-facts"),
      getIntro("home-about"),
      getItems("home-about"),
      getIntro("home-activity"),
      getItems("home-activity"),
      getItems("struktura"),
      getIntro("czlonkostwo"),
      getPublishedNews(2),
      getContactInfo(),
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
          </div>
        </section>
      )}

      {activity && (
        <section className="section--editorial" id="dzialalnosc">
          <div className="container">
            <div className="section-header">
              {activity.eyebrow && <span className="eyebrow">{activity.eyebrow}</span>}
              <h2>{activity.title}</h2>
            </div>
            <div className="numbered-list">
              {activityItems.map((item, index) => (
                <div className="numbered-item" key={item.id}>
                  <div className="numbered-item__num">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {structureItems.length > 0 && (
        <section className="section" id="struktura">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Władze Towarzystwa</span>
              <h2>Struktura organizacyjna</h2>
            </div>
            <div className="grid grid--4">
              {structureItems.map((item) => (
                <div className="card card--flat" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.body.length > 140 ? `${item.body.slice(0, 140).trim()}…` : item.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center" style={{ marginTop: 32 }}>
              <Link href="/struktura-organizacyjna">Zobacz pełną strukturę organizacyjną →</Link>
            </p>
          </div>
        </section>
      )}

      <div className="dot-divider"><span>•</span><span>•</span><span>•</span></div>

      <section className="section" id="czlonkostwo">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "center", gap: 56 }}>
            <div>
              <span className="eyebrow">Sprawy członkowskie</span>
              <h2>Dołącz do Polskiego Towarzystwa Lekarzy Genetyków Klinicznych</h2>
              {membership?.lede && <p className="lede">{membership.lede}</p>}

              <div className="steps">
                <div className="step">
                  <div className="step__num" aria-hidden="true"></div>
                  <div>
                    <h3>Napisz do nas</h3>
                    <p>Skontaktuj się z nami, aby otrzymać deklarację członkowską.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num" aria-hidden="true"></div>
                  <div>
                    <h3>Złóż deklarację</h3>
                    <p>Elektronicznie lub fizycznie na spotkaniu inauguracyjnym.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num" aria-hidden="true"></div>
                  <div>
                    <h3>Przyjęcie w poczet członków</h3>
                    <p>Na podstawie uchwały Zarządu PTLGK.</p>
                  </div>
                </div>
              </div>

              <Link href="/dolacz" className="btn btn--primary">Dołącz do nas</Link>
            </div>

            <blockquote className="quote">
              „Członkostwo w Towarzystwie dało mi realne wsparcie merytoryczne i poczucie
              przynależności do środowiska, które dba o wspólne standardy diagnostyki genetycznej.”
              <footer>— lek. med. Anna Kowalska, specjalista genetyki klinicznej</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {news.length > 0 && (
        <section className="section section--alt" id="aktualnosci">
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

      <div className="dot-divider"><span>•</span><span>•</span><span>•</span></div>

      <section className="section section--alt" id="dokumenty">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Do pobrania</span>
            <h2>Wytyczne, rekomendacje i dokumenty Towarzystwa</h2>
            <p className="lede">
              Dokumenty przeznaczone dla członków Towarzystwa oraz osób zainteresowanych
              bieżącą działalnością statutową.
            </p>
          </div>
          <ul className="doc-list">
            <li><Link href="/statut">Statut Polskiego Towarzystwa Lekarzy Genetyków Klinicznych</Link></li>
            <li><Link href="/dolacz">Deklaracja członkowska</Link></li>
            <li><Link href="/dokumenty">Zobacz pełną listę dokumentów →</Link></li>
          </ul>
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Kontakt</span>
            <h2>Skontaktuj się z Zarządem</h2>
          </div>
          <div className="grid grid--2" style={{ gap: 48, alignItems: "start" }}>
            <div>
              <p className="lede" style={{ fontSize: "1rem" }}>
                Napisz do nas bezpośrednio — chętnie odpowiemy na pytania dotyczące Towarzystwa,
                członkostwa lub współpracy.
              </p>
              {contact && (
                <a href={`mailto:${contact.email}`} className="btn btn--primary" style={{ marginTop: 8 }}>
                  Napisz e-mail
                </a>
              )}
            </div>
            {contact && (
              <div className="info-panel">
                <h3>Zarząd Główny PTLGK</h3>
                <ul className="info-list">
                  <li><span className="icon">📍</span> {contact.address}</li>
                  <li><span className="icon">📞</span> {contact.phone}</li>
                  <li><span className="icon">✉️</span> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                  <li><span className="icon">🕘</span> Biuro czynne: {contact.officeHours}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="partners-strip">
        <div className="container">
          <span className="eyebrow">Patroni i partnerzy honorowi</span>
          <div className="partners-strip__row">
            <span className="partner-badge" aria-hidden="true">OIL</span>
            <span className="partner-badge" aria-hidden="true">NRL</span>
            <span className="partner-badge" aria-hidden="true">PTL</span>
            <span className="partner-badge" aria-hidden="true">UM</span>
          </div>
          <p className="small" style={{ marginTop: 16 }}>Symbole poglądowe — miejsce na logotypy rzeczywistych patronów i partnerów Towarzystwa.</p>
        </div>
      </div>
    </>
  );
}
