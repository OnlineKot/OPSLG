import type { Metadata } from "next";
import { getContactInfo, getIntro } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Dane kontaktowe Polskiego Towarzystwa Lekarzy Genetyków Klinicznych.",
};

export default async function KontaktPage() {
  const [intro, contact] = await Promise.all([getIntro("kontakt"), getContactInfo()]);

  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container">
        <p className="breadcrumb"><a href="/">Strona główna</a> / Kontakt</p>

        <div className="section-header" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0 }}>
          <span className="eyebrow">Kontakt</span>
          <h1>{intro?.title ?? "Skontaktuj się z nami"}</h1>
        </div>

        <div className="grid grid--2" style={{ gap: 48, alignItems: "start" }}>
          <div>
            <p className="lede" style={{ fontSize: "1rem" }}>
              Napisz do nas bezpośrednio — chętnie odpowiemy na pytania dotyczące Towarzystwa,
              członkostwa lub współpracy.
            </p>
            {contact && (
              <a href={`mailto:${contact.email}`} className="btn btn--primary" style={{ marginTop: 8 }}>
                Napisz e-mail
              </a>
            )}
          </div>

          {contact && (
            <div className="info-panel">
              <h3>Zarząd Główny PTLGK</h3>
              <ul className="info-list">
                <li><span className="icon">📍</span> {contact.address}</li>
                <li><span className="icon">📞</span> {contact.phone}</li>
                <li><span className="icon">✉️</span> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li><span className="icon">🕘</span> Biuro czynne: {contact.officeHours}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
