import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strefa Członka",
  description:
    "Zaloguj się do Strefy Członka Polskiego Towarzystwa Lekarzy Genetyków Klinicznych, aby uzyskać dostęp do materiałów szkoleniowych, wydarzeń i dokumentów Towarzystwa.",
};

export default function StrefaCzlonkaPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="container" style={{ maxWidth: '480px' }}>
          <p className="breadcrumb"><a href="/">Strona główna</a> / Strefa Członka</p>

          <div className="card" style={{ boxShadow: 'var(--shadow-md)' }}>
            <span className="eyebrow">Panel dla członków</span>
            <h1 style={{ fontSize: '1.6rem' }}>Strefa Członka</h1>
            <p className="lede" style={{ fontSize: '1rem' }}>
              Dostęp wyłącznie dla zweryfikowanych członków Polskiego Towarzystwa Lekarzy Genetyków Klinicznych. Strefa Członka jest w przygotowaniu.
            </p>

            <p className="small" style={{ marginTop: '20px' }}>
              Nie masz jeszcze konta? <a href="/dolacz">Dołącz do Towarzystwa</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
