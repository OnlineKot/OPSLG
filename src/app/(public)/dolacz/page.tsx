import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dołącz do Towarzystwa",
  description: "Jak dołączyć do Polskiego Towarzystwa Lekarzy Genetyków Klinicznych — organizacji reprezentującej interesy zawodowe lekarzy w Polsce.",
};

export default function DolaczPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="container">
          <p className="breadcrumb"><a href="/">Strona główna</a> / Dołącz do Towarzystwa</p>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '720px', marginLeft: '0' }}>
            <span className="eyebrow">Deklaracja członkowska</span>
            <h1>Zostań członkiem Polskiego Towarzystwa Lekarzy Genetyków Klinicznych</h1>
            <p className="lede">
              Aby dołączyć do Towarzystwa, napisz do nas — prześlemy deklarację członkowską
              i wszystkie informacje potrzebne do jej złożenia.
            </p>
            <a href="mailto:czlonkostwo@ptlgk-przyklad.pl" className="btn btn--primary" style={{ marginTop: '8px' }}>Napisz w sprawie członkostwa</a>
          </div>

          <div className="grid grid--2" style={{ gap: '48px', alignItems: 'start' }}>
            <div className="info-panel">
              <h3>Jak przebiega proces?</h3>
              <ul className="info-list">
                <li><span className="icon">1</span> Kontakt e-mailowy lub zgłoszenie na spotkaniu inauguracyjnym.</li>
                <li><span className="icon">2</span> Wypełnienie deklaracji członkowskiej.</li>
                <li><span className="icon">3</span> Przyjęcie na podstawie uchwały Zarządu PTLGK.</li>
              </ul>
              <p className="small" style={{ color: '#cfd9e4', marginTop: '16px' }}>
                Masz pytania dotyczące członkostwa? Napisz na
                <a href="mailto:czlonkostwo@ptlgk-przyklad.pl">czlonkostwo@ptlgk-przyklad.pl</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
