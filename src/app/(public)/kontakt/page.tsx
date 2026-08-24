import type { Metadata } from "next";
import Link from "next/link";
import { getContactInfo, getIntro } from "@/lib/content";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Dane kontaktowe Polskiego Towarzystwa Lekarzy Genetyków Klinicznych.",
};

export default async function KontaktPage() {
  const [intro, contact] = await Promise.all([getIntro("kontakt"), getContactInfo()]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb"><Link href="/">Strona główna</Link> / Kontakt</p>
          <span className="eyebrow">Kontakt</span>
          <h1>{intro?.title ?? "Skontaktuj się z nami"}</h1>
          <p className="lede">
            Chętnie odpowiemy na pytania dotyczące Towarzystwa, członkostwa lub współpracy.
          </p>
        </div>
      </section>

      {contact && (
        <section className="section">
          <div className="container">
            <div className="def-list">
              <div className="def-item">
                <h3>Adres</h3>
                <p>{contact.address}</p>
              </div>
              <div className="def-item">
                <h3>Telefon</h3>
                <p><a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></p>
              </div>
              <div className="def-item">
                <h3>E-mail</h3>
                <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              </div>
              <div className="def-item">
                <h3>Biuro czynne</h3>
                <p>{contact.officeHours}</p>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <a href={`mailto:${contact.email}`} className="btn btn--primary">Napisz e-mail</a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
