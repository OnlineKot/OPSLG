import Link from "next/link";
import { getIntro, getItems } from "@/lib/content";
import { updateAboutItem, updateAboutPageIntro } from "../actions";

export const metadata = { title: "O nas — Panel PTLGK" };

export default async function AdminONasPage({ searchParams }: { searchParams: { saved?: string } }) {
  const [intro, items] = await Promise.all([getIntro("o-nas"), getItems("o-nas")]);

  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / O nas</p>
      <div className="admin-page-head">
        <h1>O nas</h1>
      </div>
      {searchParams.saved && <div className="admin-alert admin-alert--success">Zapisano zmiany.</div>}

      <div className="admin-form-card">
        <h3>Wstęp i zakończenie</h3>
        <form action={updateAboutPageIntro} className="admin-form-card__stack">
          <input type="hidden" name="pageKey" value="o-nas" />
          <div>
            <label htmlFor="lede">Akapit wprowadzający (pod nagłówkiem H1)</label>
            <textarea id="lede" name="lede" defaultValue={intro?.lede ?? ""} rows={4} />
          </div>
          <div>
            <label htmlFor="closing">Zdanie zamykające (na dole strony)</label>
            <textarea id="closing" name="closing" defaultValue={intro?.closing ?? ""} rows={2} />
          </div>
          <button type="submit" className="btn btn--primary">Zapisz</button>
        </form>
      </div>

      <h2 style={{ marginTop: 40, fontSize: "1.2rem" }}>Kafelki</h2>
      {items.map((item) => (
        <div className="admin-form-card" key={item.id}>
          <form action={updateAboutItem} className="admin-form-card__stack">
            <input type="hidden" name="id" value={item.id} />
            <div>
              <label htmlFor={`title-${item.id}`}>Tytuł kafelka</label>
              <input type="text" id={`title-${item.id}`} name="title" defaultValue={item.title} required />
            </div>
            <div>
              <label htmlFor={`body-${item.id}`}>Treść</label>
              <textarea id={`body-${item.id}`} name="body" defaultValue={item.body} rows={5} required />
            </div>
            <button type="submit" className="btn btn--outline">Zapisz</button>
          </form>
        </div>
      ))}
    </div>
  );
}
