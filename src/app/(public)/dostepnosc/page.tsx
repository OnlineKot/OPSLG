import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deklaracja dostępności",
  description: "Deklaracja dostępności cyfrowej serwisu Polskiego Towarzystwa Lekarzy Genetyków Klinicznych zgodnie z ustawą o dostępności cyfrowej.",
};

export default function DostepnoscPage() {
  return (
    <section className="section" style={{ paddingTop: '56px' }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Dostępność</p>

        <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: 0 }}>
          <span className="eyebrow">Informacje prawne</span>
          <h1>Deklaracja dostępności</h1>
          <p className="lede">Polskie Towarzystwo Lekarzy Genetyków Klinicznych dokłada starań, aby serwis internetowy był dostępny dla jak najszerszego grona użytkowników, w tym osób z niepełnosprawnościami.</p>
        </div>


        <article className="policy__content" style={{ maxWidth: '820px' }}>
          <h2 style={{ marginTop: 0, borderTop: 'none' }}>Status zgodności</h2>
          <p>Serwis jest częściowo zgodny z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej
          stron internetowych i aplikacji mobilnych podmiotów publicznych, z powodu niezgodności
          wymienionych poniżej.</p>

          <h2>Zastosowane rozwiązania ułatwiające dostęp</h2>
          <ul>
            <li>możliwość powiększenia tekstu za pomocą ustawień przeglądarki,</li>
            <li>widoczny fokus klawiatury dla elementów interaktywnych,</li>
            <li>link „Przejdź do treści głównej” umożliwiający pominięcie nawigacji,</li>
            <li>zachowany kontrast tekstu względem tła zgodny z wytycznymi WCAG 2.1 na poziomie AA,</li>
            <li>opisy alternatywne dla elementów graficznych pełniących funkcję informacyjną.</li>
          </ul>

          <h2>Skróty klawiaturowe</h2>
          <p>Serwis nie udostępnia niestandardowych skrótów klawiaturowych — nawigacja odbywa się
          przy użyciu klawisza Tab oraz standardowych mechanizmów przeglądarki.</p>

          <h2>Zgłaszanie uwag i informacja zwrotna</h2>
          <p>Uwagi dotyczące dostępności serwisu prosimy zgłaszać na adres
          <a href="mailto:dostepnosc@ptlgk-przyklad.pl">dostepnosc@ptlgk-przyklad.pl</a>. W zgłoszeniu
          prosimy podać adres podstrony, której dotyczy problem, oraz opis napotkanej trudności.
          Na zgłoszenia odpowiadamy w terminie do 7 dni roboczych.</p>

          <h2>Dostępność architektoniczna</h2>
          <p>Siedziba Biura Zarządu Głównego przy ul. Przykładowej 12 w Warszawie posiada podjazd dla
          wózków oraz windę umożliwiającą dostęp do wszystkich kondygnacji.</p>

          <p className="small">Deklarację sporządzono dnia 6 sierpnia 2026 r. na podstawie samooceny
          przeprowadzonej przez Towarzystwo.</p>
        </article>

      </div>
    </section>
  );
}
