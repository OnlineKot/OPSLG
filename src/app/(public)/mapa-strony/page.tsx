import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa strony",
  description: "Pełna mapa serwisu Polskiego Towarzystwa Lekarzy Genetyków Klinicznych — lista wszystkich podstron.",
};

export default function MapaStronyPage() {
  return (
    <section className="section" style={{ paddingTop: '56px' }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Mapa strony</p>

        <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: 0 }}>
          <span className="eyebrow">Nawigacja</span>
          <h1>Mapa strony</h1>
        </div>


        <div className="grid grid--3">
          <div>
            <h3 style={{ fontSize: '1.05rem' }}>Towarzystwo</h3>
            <ul className="doc-list" style={{ textAlign: 'left', margin: 0 }}>
              <li><a href="/">Strona główna</a></li>
              <li><a href="/o-nas">O nas</a></li>
              <li><a href="/struktura-organizacyjna">Struktura organizacyjna</a></li>
              <li><a href="/dzialalnosc">Działalność</a></li>
              <li><a href="/statut">Statut</a></li>
              <li><a href="/aktualnosci">Aktualności</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem' }}>Dla lekarzy</h3>
            <ul className="doc-list" style={{ textAlign: 'left', margin: 0 }}>
              <li><a href="/czlonkostwo">Sprawy członkowskie</a></li>
              <li><a href="/dolacz">Deklaracja członkowska</a></li>
              <li><a href="/strefa-czlonka">Strefa Członka</a></li>
              <li><a href="/dokumenty">Dokumenty do pobrania</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem' }}>Informacje prawne</h3>
            <ul className="doc-list" style={{ textAlign: 'left', margin: 0 }}>
              <li><a href="/polityka-prywatnosci">Polityka prywatności (RODO)</a></li>
              <li><a href="/regulamin">Regulamin serwisu</a></li>
              <li><a href="/dostepnosc">Deklaracja dostępności</a></li>
              <li><a href="/mapa-strony">Mapa strony</a></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
