import Link from "next/link";
import { getIntro } from "@/lib/content";
import { updateCollaboration } from "../actions";

export const metadata = { title: "Współpraca — Panel PTLGK" };

export default async function AdminWspolpracaPage({ searchParams }: { searchParams: { saved?: string } }) {
  const intro = await getIntro("wspolpraca");

  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / Współpraca</p>
      <div className="admin-page-head">
        <h1>Współpraca</h1>
      </div>
      {searchParams.saved && <div className="admin-alert admin-alert--success">Zapisano zmiany.</div>}

      <div className="admin-form-card">
        <form action={updateCollaboration} className="admin-form-card__stack">
          <input type="hidden" name="pageKey" value="wspolpraca" />
          <div>
            <label htmlFor="title">Nagłówek H1</label>
            <input type="text" id="title" name="title" defaultValue={intro?.title ?? ""} required />
          </div>
          <div>
            <label htmlFor="lede">Treść strony</label>
            <textarea id="lede" name="lede" defaultValue={intro?.lede ?? ""} rows={5} />
          </div>
          <button type="submit" className="btn btn--primary">Zapisz</button>
        </form>
      </div>
    </div>
  );
}
