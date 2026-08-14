import Link from "next/link";
import { getIntro, getItems } from "@/lib/content";
import { updateStructureIntro, updateStructureItem } from "../actions";

export const metadata = { title: "Struktura — Panel PTLGK" };

export default async function AdminStrukturaPage({ searchParams }: { searchParams: { saved?: string } }) {
  const [intro, items] = await Promise.all([getIntro("struktura"), getItems("struktura")]);

  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / Struktura</p>
      <div className="admin-page-head">
        <h1>Struktura organizacyjna</h1>
      </div>
      {searchParams.saved && <div className="admin-alert admin-alert--success">Zapisano zmiany.</div>}

      <div className="admin-form-card">
        <h3>Wstęp i zakończenie</h3>
        <form action={updateStructureIntro} className="admin-form-card__stack">
          <input type="hidden" name="pageKey" value="struktura" />
          <div>
            <label htmlFor="title">Nagłówek H1</label>
            <input type="text" id="title" name="title" defaultValue={intro?.title ?? ""} required />
          </div>
          <div>
            <label htmlFor="lede">Akapit wprowadzający</label>
            <textarea id="lede" name="lede" defaultValue={intro?.lede ?? ""} rows={3} />
          </div>
          <div>
            <label htmlFor="closing">Zdanie zamykające (np. długość kadencji)</label>
            <textarea id="closing" name="closing" defaultValue={intro?.closing ?? ""} rows={2} />
          </div>
          <button type="submit" className="btn btn--primary">Zapisz</button>
        </form>
      </div>

      <h2 style={{ marginTop: 40, fontSize: "1.2rem" }}>Organy Towarzystwa</h2>
      {items.map((item) => (
        <div className="admin-form-card" key={item.id}>
          <form action={updateStructureItem} className="admin-form-card__stack">
            <input type="hidden" name="id" value={item.id} />
            <div>
              <label htmlFor={`title-${item.id}`}>Nazwa organu</label>
              <input type="text" id={`title-${item.id}`} name="title" defaultValue={item.title} required />
            </div>
            <div>
              <label htmlFor={`body-${item.id}`}>Opis</label>
              <textarea id={`body-${item.id}`} name="body" defaultValue={item.body} rows={5} required />
            </div>
            <button type="submit" className="btn btn--outline">Zapisz</button>
          </form>
        </div>
      ))}
    </div>
  );
}
