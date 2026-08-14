import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statut Towarzystwa",
  description: "Statut Polskiego Towarzystwa Lekarzy Genetyków Klinicznych — postanowienia ogólne, cele i sposoby ich realizacji, członkostwo oraz władze Towarzystwa.",
};

export default function StatutPage() {
  return (
    <section className="section" style={{ paddingTop: '56px' }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Statut</p>

        <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: 0 }}>
          <span className="eyebrow">Dokument statutowy</span>
          <h1>Statut Polskiego Towarzystwa Lekarzy Genetyków Klinicznych</h1>
          <p className="lede">Tekst jednolity uchwalony przez Walne Zgromadzenie Członków, ostatnia aktualizacja: 12 marca 2025 r.</p>
        </div>


        <article className="policy__content" style={{ maxWidth: '820px' }}>
          <h2 style={{ marginTop: 0, borderTop: 'none' }}>Rozdział I — Postanowienia ogólne</h2>
          <p>§1. Polskie Towarzystwo Lekarzy Genetyków Klinicznych, zwane dalej „Towarzystwem", jest dobrowolnym,
          samorządnym i trwałym zrzeszeniem lekarzy specjalizujących się w genetyce klinicznej,
          działającym na podstawie ustawy Prawo o stowarzyszeniach oraz niniejszego statutu.</p>
          <p>§2. Towarzystwo posiada osobowość prawną i działa na terenie Rzeczypospolitej Polskiej.
          Siedzibą władz Towarzystwa jest miasto stołeczne Warszawa.</p>
          <p>§3. Towarzystwo może być reprezentowane przez przedstawicieli regionalnych powoływanych
          przy ośrodkach akademickich prowadzących diagnostykę i poradnictwo genetyczne.</p>

          <h2>Rozdział II — Cele i sposoby ich realizacji</h2>
          <p>§4. Celem Towarzystwa jest reprezentowanie interesów zawodowych lekarzy genetyków
          klinicznych, dbałość o standardy diagnostyczne i etyczne wykonywania zawodu oraz działanie
          na rzecz poprawy jakości opieki nad pacjentami z chorobami uwarunkowanymi genetycznie.</p>
          <p>§5. Towarzystwo realizuje swoje cele poprzez: działalność edukacyjną i szkoleniową
          w zakresie diagnostyki genetycznej, prowadzenie systemu certyfikacji metod laboratoryjnych,
          reprezentację środowiska wobec organów administracji publicznej, opracowywanie i publikację
          rekomendacji klinicznych oraz współpracę z krajowymi i zagranicznymi towarzystwami
          genetyki człowieka.</p>

          <h2>Rozdział III — Członkostwo</h2>
          <p>§6. Członkiem zwyczajnym Towarzystwa może zostać osoba posiadająca prawo wykonywania
          zawodu lekarza na terytorium Rzeczypospolitej Polskiej, specjalizująca się lub odbywająca
          szkolenie specjalizacyjne w zakresie genetyki klinicznej, która złoży deklarację
          członkowską i zostanie przyjęta przez Zarząd Główny.</p>
          <p>§7. Członkostwo ustaje na skutek: dobrowolnej rezygnacji zgłoszonej na piśmie, skreślenia
          z listy członków z powodu zalegania ze składkami przez okres dłuższy niż 12 miesięcy,
          wykluczenia w wyniku prawomocnego orzeczenia Sądu Koleżeńskiego albo śmierci członka.</p>

          <h2>Rozdział IV — Władze Towarzystwa</h2>
          <p>§8. Władzami Towarzystwa są: Walne Zgromadzenie Członków, Zarząd Główny, Główna
          Komisja Rewizyjna oraz Sąd Koleżeński. Kadencja władz trwa 4 lata.</p>
          <p>§9. Szczegółowy zakres kompetencji poszczególnych władz oraz zasady ich wyboru określa
          pełny tekst statutu, dostępny do wglądu w Biurze Zarządu Głównego oraz w Strefie Członka.</p>

          <div className="callout">
            Niniejszy fragment stanowi skróconą, poglądową wersję statutu przygotowaną na potrzeby
            szablonu strony internetowej. Pełny, aktualny tekst statutu udostępniany jest członkom
            Towarzystwa w formie dokumentu PDF w Strefie Członka.
          </div>
        </article>

      </div>
    </section>
  );
}
