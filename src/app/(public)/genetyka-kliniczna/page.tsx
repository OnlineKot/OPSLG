import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genetyka kliniczna",
  description:
    "Informacje o zawodzie genetyka klinicznego, specjalizacji, standardach i rekomendacjach oraz działaniach Koalicji na rzecz genetyki klinicznej w Polsce.",
};

export default function GenetykaKlinicznaPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="container">
          <p className="breadcrumb"><a href="/">Strona główna</a> / Genetyka kliniczna</p>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: '0' }}>
            <span className="eyebrow">Strefa genetyków klinicznych</span>
            <h1>Genetyka kliniczna</h1>
            <p className="lede">Centrum wiedzy dla lekarzy genetyków klinicznych oraz osób zainteresowanych tą specjalizacją.</p>
          </div>

          <div className="grid grid--2" style={{ marginBottom: '56px' }}>
            <div className="card">
              <h3>Standardy i rekomendacje</h3>
              <p>Publikujemy standardy, rekomendacje, wytyczne i stanowiska Towarzystwa w zakresie
              diagnostyki i terapii chorób uwarunkowanych genetycznie.</p>
              <a href="/dokumenty" className="btn btn--outline btn--sm">Zobacz dokumenty →</a>
            </div>
            <div className="card">
              <h3>Aktualności</h3>
              <p>Informacje dotyczące znaczących wydarzeń, odkryć naukowych i zmian w świecie genetyki
              klinicznej w Polsce i na świecie.</p>
              <a href="/aktualnosci" className="btn btn--outline btn--sm">Czytaj aktualności →</a>
            </div>
          </div>

          <div className="dot-divider" style={{ marginBottom: '40px' }}><span>•</span><span>•</span><span>•</span></div>

          <div className="section-header">
            <h2>Zawód genetyka klinicznego</h2>
            <p className="lede">Informacje o specjalizacji z genetyki klinicznej oraz ośrodkach akredytowanych do prowadzenia szkolenia specjalizacyjnego i staży.</p>
          </div>
          <div className="grid grid--2" style={{ marginBottom: '56px' }}>
            <div className="card">
              <h3>Specjalizacja</h3>
              <p>Genetyka kliniczna jest specjalizacją podstawową. Szkolenie specjalizacyjne trwa 5 lat
              i obejmuje staże kierunkowe z cytogenetyki, genetyki molekularnej oraz poradnictwa
              genetycznego.</p>
            </div>
            <div className="card">
              <h3>Ośrodki akredytowane</h3>
              <p>Akredytację do prowadzenia szkolenia specjalizacyjnego z genetyki klinicznej posiadają
              ośrodki akademickie w Warszawie, Krakowie, Poznaniu, Wrocławiu, Gdańsku, Łodzi, Katowicach
              i Białymstoku.</p>
            </div>
          </div>

          <div className="section-header">
            <span className="eyebrow">Rzecznictwo</span>
            <h2>Koalicja na rzecz genetyki klinicznej</h2>
            <p className="lede">Informacje o istotnych zmianach prawnych dotyczących genetyków klinicznych oraz inicjatywach mających na celu zjednoczenie środowiska.</p>
          </div>
          <div className="card">
            <p style={{ margin: 0 }}>Towarzystwo koordynuje inicjatywę zrzeszającą genetyków klinicznych,
            diagnostów laboratoryjnych i przedstawicieli organizacji pacjentów wokół wspólnych postulatów
            dotyczących finansowania diagnostyki genetycznej i rozwoju kadr specjalizacyjnych. Bieżące
            stanowiska Koalicji publikowane są w Strefie Członka.</p>
          </div>

        </div>
      </section>
    </>
  );
}
