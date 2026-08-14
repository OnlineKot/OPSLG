import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dla pacjentów",
  description: "Informacje dla pacjentów i ich rodzin: czym jest poradnictwo genetyczne, jak znaleźć poradnię genetyczną, organizacje pacjentów oraz badania kliniczne chorób genetycznych.",
};

export default function DlaPacjentowPage() {
  return (
    <section className="section" style={{ paddingTop: '56px' }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Dla pacjentów</p>

        <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: 0 }}>
          <span className="eyebrow">Strefa pacjenta</span>
          <h1>Dla pacjentów i ich rodzin</h1>
          <p className="lede">Informacje dla osób, u których podejrzewa się lub rozpoznano chorobę uwarunkowaną genetycznie, oraz dla ich bliskich.</p>
        </div>


        <div className="grid grid--2" style={{ marginBottom: '56px' }}>
          <div className="card">
            <h3>Poradnictwo genetyczne</h3>
            <p>Poradnictwo genetyczne to proces, w którym lekarz genetyk kliniczny pomaga zrozumieć
            przyczyny, sposób dziedziczenia i ryzyko wystąpienia choroby genetycznej w rodzinie, a także
            omawia dostępne opcje diagnostyczne i reprodukcyjne.</p>
            <p><strong>Jak przygotować się do wizyty?</strong> Warto zebrać informacje o chorobach
            występujących w rodzinie (co najmniej trzy pokolenia wstecz), wyniki wcześniejszych badań
            genetycznych oraz dokumentację medyczną dotyczącą podejrzewanej choroby.</p>
          </div>
          <div className="card">
            <h3>Poradnie genetyczne</h3>
            <p>Poradnie genetyczne działają przy głównych ośrodkach akademickich w Polsce. Skierowanie
            do poradni wystawia lekarz dowolnej specjalizacji — nie jest wymagane skierowanie od
            specjalisty.</p>
            <ul className="doc-list" style={{ textAlign: 'left', margin: 0 }}>
              <li>Warszawa</li>
              <li>Kraków</li>
              <li>Poznań</li>
              <li>Wrocław</li>
              <li>Gdańsk</li>
              <li>Łódź</li>
              <li>Katowice</li>
              <li>Białystok</li>
            </ul>
          </div>
        </div>

        <div className="dot-divider" style={{ marginBottom: '40px' }}><span>•</span><span>•</span><span>•</span></div>

        <div className="grid grid--2">
          <div className="card">
            <h3>Organizacje pacjentów</h3>
            <p>Współpracujemy z organizacjami zrzeszającymi pacjentów z chorobami rzadkimi
            i genetycznymi oraz ich rodziny, które oferują wsparcie informacyjne i psychologiczne.</p>
            <ul className="doc-list" style={{ textAlign: 'left', margin: 0 }}>
              <li><a href="#">Krajowe Forum na rzecz Terapii Chorób Rzadkich</a></li>
              <li><a href="#">Stowarzyszenie Rodzin z Chorobami Genetycznymi</a></li>
              <li><a href="#">Fundacja Wsparcia Pacjentów Onkogenetycznych</a></li>
            </ul>
          </div>
          <div className="card">
            <h3>Badania kliniczne</h3>
            <p>W Polsce prowadzonych jest wiele badań klinicznych dotyczących nowych metod diagnostyki
            i terapii chorób o podłożu genetycznym. Aktualną listę rekrutujących badań publikujemy
            w Strefie Członka oraz udostępniamy lekarzom kierującym pacjentów.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
