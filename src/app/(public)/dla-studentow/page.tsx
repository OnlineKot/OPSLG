import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dla studentów i młodych lekarzy",
  description:
    "Edukacja, konferencje, granty, stypendia i informacje dla studentów oraz młodych lekarzy zainteresowanych genetyką kliniczną.",
};

export default function DlaStudentowPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="container">
          <p className="breadcrumb"><a href="/">Strona główna</a> / Dla studentów</p>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: '0' }}>
            <span className="eyebrow">Strefa studentów i młodych lekarzy</span>
            <h1>Dla studentów i młodych lekarzy</h1>
            <p className="lede">Informacje edukacyjne i możliwości rozwoju dla osób zainteresowanych genetyką kliniczną — od studiów po pierwsze lata specjalizacji.</p>
          </div>

          <div className="grid grid--2">
            <div className="card">
              <h3>Edukacja</h3>
              <p>Informacje o nadchodzących konferencjach, szkoleniach i kursach z zakresu genetyki
              klinicznej, w tym wydarzeniach objętych patronatem Towarzystwa.</p>
              <a href="/aktualnosci" className="btn btn--outline btn--sm">Zobacz nadchodzące wydarzenia →</a>
            </div>
            <div className="card">
              <h3>Badania kliniczne i granty</h3>
              <p>Ogłoszenia dotyczące aktualnie prowadzonych badań klinicznych oraz badań realizowanych
              w ramach grantów naukowych, w które mogą zaangażować się młodzi lekarze i studenci.</p>
            </div>
            <div className="card">
              <h3>Stypendia</h3>
              <p>Informacje o stypendiach naukowych oraz programach mentoringowych dla studentów
              i lekarzy rozpoczynających specjalizację z genetyki klinicznej.</p>
            </div>
            <div className="card">
              <h3>Osiągnięcia</h3>
              <p>Informacje o osiągnięciach naukowych członków Towarzystwa oraz stypendystów —
              publikacjach, wyróżnieniach i sukcesach na arenie międzynarodowej.</p>
            </div>
          </div>

          <div className="dot-divider" style={{ margin: '40px 0' }}><span>•</span><span>•</span><span>•</span></div>

          <div className="card">
            <h3>Dla studentów</h3>
            <p>Jeśli jesteś studentem medycyny zainteresowanym genetyką kliniczną, zapraszamy do
            udziału w wydarzeniach edukacyjnych organizowanych przez Towarzystwo i objętych jego
            patronatem oraz do kontaktu z przedstawicielami regionalnymi przy Twoim ośrodku akademickim.</p>
          </div>

        </div>
      </section>
    </>
  );
}
