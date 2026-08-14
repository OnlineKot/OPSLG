import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dla lekarzy kierujących",
  description:
    "Informacje dla lekarzy innych specjalizacji: kogo kierować do poradni genetycznej, rekomendacje dotyczące opieki nad pacjentami z chorobami genetycznymi oraz możliwości współpracy.",
};

export default function DlaLekarzyKierujacychPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="container">
          <p className="breadcrumb"><a href="/">Strona główna</a> / Dla lekarzy kierujących</p>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: '0' }}>
            <span className="eyebrow">Strefa lekarzy kierujących</span>
            <h1>Dla lekarzy kierujących</h1>
            <p className="lede">Informacje dla lekarzy innych specjalizacji, którzy rozważają skierowanie pacjenta do poradni genetycznej lub opiekują się pacjentem z chorobą uwarunkowaną genetycznie.</p>
          </div>

          <div className="grid grid--2" style={{ marginBottom: '56px' }}>
            <div className="card">
              <h3>Kogo kierować</h3>
              <p><strong>Tryb standardowy:</strong> pacjenci z podejrzeniem choroby jednogenowej,
              niepełnosprawnością intelektualną o niewyjaśnionej przyczynie, wadami wrodzonymi lub
              obciążonym wywiadem rodzinnym w kierunku chorób nowotworowych.</p>
              <p><strong>Tryb pilny:</strong> ciąże z nieprawidłowym wynikiem badań prenatalnych, noworodki
              z ciężkimi wadami wrodzonymi wymagające pilnej diagnostyki różnicowej.</p>
            </div>
            <div className="card">
              <h3>Rekomendacje</h3>
              <p>Stanowiska, rekomendacje i zalecenia dotyczące opieki nad pacjentami z chorobami
              uwarunkowanymi genetycznie, opracowane wspólnie z innymi towarzystwami naukowymi.</p>
              <a href="/dokumenty" className="btn btn--outline btn--sm">Zobacz rekomendacje →</a>
            </div>
          </div>

          <div className="dot-divider" style={{ marginBottom: '40px' }}><span>•</span><span>•</span><span>•</span></div>

          <div className="card">
            <h3>Współpraca</h3>
            <p>Zapraszamy do współpracy lekarzy prowadzących pacjentów, którzy mogliby zostać objęci
            badaniem klinicznym w zakresie chorób genetycznych, a także zachęcamy do zgłaszania uwag
            dotyczących luk i potrzeb w zakresie kierunków rozwoju poradnictwa genetycznego w Polsce.</p>
            <a href="/kontakt" className="btn btn--primary btn--sm">Zgłoś potrzebę lub propozycję współpracy →</a>
          </div>

        </div>
      </section>
    </>
  );
}
