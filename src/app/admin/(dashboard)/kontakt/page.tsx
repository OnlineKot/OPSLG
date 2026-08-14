import Link from "next/link";
import { getContactInfo } from "@/lib/content";
import { updateContact } from "../actions";

export const metadata = { title: "Kontakt — Panel PTLGK" };

export default async function AdminKontaktPage({ searchParams }: { searchParams: { saved?: string } }) {
  const contact = await getContactInfo();

  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / Kontakt</p>
      <h1>Dane kontaktowe</h1>
      {searchParams.saved && <div className="admin-alert admin-alert--success">Zapisano zmiany.</div>}

      <div className="admin-form-card">
        <form action={updateContact} className="admin-form-card__stack">
          <div>
            <label htmlFor="address">Adres</label>
            <input type="text" id="address" name="address" defaultValue={contact?.address ?? ""} required />
          </div>
          <div>
            <label htmlFor="phone">Telefon</label>
            <input type="text" id="phone" name="phone" defaultValue={contact?.phone ?? ""} required />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" defaultValue={contact?.email ?? ""} required />
          </div>
          <div>
            <label htmlFor="officeHours">Godziny pracy biura</label>
            <input type="text" id="officeHours" name="officeHours" defaultValue={contact?.officeHours ?? ""} required />
          </div>
          <button type="submit" className="btn btn--primary">Zapisz</button>
        </form>
      </div>
    </div>
  );
}
