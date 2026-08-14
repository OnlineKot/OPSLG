import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin serwisu",
  description: "Regulamin korzystania z serwisu internetowego Polskiego Towarzystwa Lekarzy Genetyków Klinicznych.",
};

export default function RegulaminPage() {
  return (
    <section className="section" style={{ paddingTop: '56px' }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Regulamin serwisu</p>

        <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: 0 }}>
          <span className="eyebrow">Informacje prawne</span>
          <h1>Regulamin serwisu internetowego</h1>
          <p className="lede">Wersja 1.0 · obowiązuje od 6 sierpnia 2026 r.</p>
        </div>


        <article className="policy__content" style={{ maxWidth: '820px' }}>
          <h2 style={{ marginTop: 0, borderTop: 'none' }}>1. Postanowienia ogólne</h2>
          <p>Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod
          adresem ptlgk-przyklad.pl, prowadzonego przez Polskie Towarzystwo Lekarzy Genetyków Klinicznych z siedzibą
          w Warszawie.</p>

          <h2>2. Zakres usług</h2>
          <p>Za pośrednictwem serwisu Towarzystwo udostępnia informacje o swojej działalności oraz —
          dla zalogowanych członków — Strefę Członka z dostępem do dokumentów i materiałów szkoleniowych.</p>

          <h2>3. Obowiązki użytkownika</h2>
          <p>Korzystając z serwisu, użytkownik zobowiązuje się do niepodejmowania działań mogących
          zakłócić prawidłowe funkcjonowanie serwisu oraz przestrzegania obowiązujących przepisów prawa.</p>

          <h2>4. Własność intelektualna</h2>
          <p>Treści publikowane w serwisie, w tym teksty, grafiki i logotyp Towarzystwa, chronione
          są przepisami prawa autorskiego. Ich wykorzystanie wymaga uprzedniej zgody Towarzystwa,
          chyba że przepisy prawa stanowią inaczej.</p>

          <h2>5. Odpowiedzialność</h2>
          <p>Towarzystwo dokłada starań, aby informacje publikowane w serwisie były aktualne
          i rzetelne, jednak nie ponosi odpowiedzialności za decyzje podjęte wyłącznie na ich
          podstawie. Treści o charakterze medycznym mają charakter informacyjny i nie zastępują
          konsultacji ze specjalistą.</p>

          <h2>6. Reklamacje</h2>
          <p>Uwagi dotyczące funkcjonowania serwisu można zgłaszać na adres
          <a href="mailto:kontakt@ptlgk-przyklad.pl">kontakt@ptlgk-przyklad.pl</a>. Reklamacje
          rozpatrywane są w terminie 14 dni roboczych.</p>

          <h2>7. Postanowienia końcowe</h2>
          <p>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa
          polskiego. Towarzystwo zastrzega sobie prawo do zmiany Regulaminu, o czym poinformuje
          poprzez publikację nowej wersji na niniejszej stronie.</p>
        </article>

      </div>
    </section>
  );
}
