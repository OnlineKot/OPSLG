import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dokumenty do pobrania",
  description:
    "Statut, kodeks etyki i sprawozdania Polskiego Towarzystwa Lekarzy Genetyków Klinicznych do pobrania.",
};

export default function DokumentyPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '56px' }}>
        <div className="container">
          <p className="breadcrumb"><a href="/">Strona główna</a> / Dokumenty do pobrania</p>

          <div className="section-header" style={{ textAlign: 'left', maxWidth: '820px', marginLeft: '0' }}>
            <span className="eyebrow">Do pobrania</span>
            <h1>Wytyczne, rekomendacje i dokumenty Towarzystwa</h1>
            <p className="lede">Dokumenty przeznaczone dla członków Towarzystwa oraz osób zainteresowanych bieżącą działalnością statutową.</p>
          </div>

          <ul className="doc-list" style={{ maxWidth: '720px' }}>
            <li><a href="/statut">Statut Polskiego Towarzystwa Lekarzy Genetyków Klinicznych</a></li>
            <li><a href="#">Kodeks Etyki członka Towarzystwa (PDF)</a></li>
            <li><a href="/dolacz">Deklaracja członkowska</a></li>
            <li><a href="#">Rekomendacje dotyczące diagnostyki prenatalnej 2026 — wersja pełna (PDF)</a></li>
            <li><a href="#">Standardy poradnictwa genetycznego — wersja kieszonkowa (PDF)</a></li>
            <li><a href="#">Wykaz certyfikowanych metod diagnostyki genetycznej (aCGH, FISH, MLPA, NGS)</a></li>
            <li><a href="#">Sprawozdanie merytoryczne i finansowe za 2025 rok (PDF)</a></li>
            <li><a href="#">Regulamin przyznawania Nagrody PTLGK (PDF)</a></li>
            <li><a href="#">Regulamin postępowania dyscyplinarnego Sądu Koleżeńskiego (PDF)</a></li>
            <li><a href="#">Uchwały Zarządu Głównego — archiwum</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
