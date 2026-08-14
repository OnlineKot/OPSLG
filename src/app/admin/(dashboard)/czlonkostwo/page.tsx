import Link from "next/link";
import { getIntro, getItems } from "@/lib/content";
import { RichTextEditorField } from "@/components/admin/RichTextEditorField";
import { updateBenefitItem, updateMembershipIntro } from "../actions";

export const metadata = { title: "Członkostwo — Panel PTLGK" };

export default async function AdminCzlonkostwoPage({ searchParams }: { searchParams: { saved?: string } }) {
  const [intro, benefits] = await Promise.all([getIntro("czlonkostwo"), getItems("czlonkostwo-benefits")]);

  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / Członkostwo</p>
      <div className="admin-page-head">
        <h1>Członkostwo</h1>
      </div>
      {searchParams.saved && <div className="admin-alert admin-alert--success">Zapisano zmiany.</div>}

      <div className="admin-form-card">
        <h3>Treść strony</h3>
        <form action={updateMembershipIntro} className="admin-form-card__stack">
          <input type="hidden" name="pageKey" value="czlonkostwo" />
          <div>
            <label htmlFor="title">Nagłówek H1</label>
            <input type="text" id="title" name="title" defaultValue={intro?.title ?? ""} required />
          </div>
          <div>
            <label htmlFor="lede">Kto może zostać członkiem (akapit pod H1)</label>
            <textarea id="lede" name="lede" defaultValue={intro?.lede ?? ""} rows={3} />
          </div>
          <RichTextEditorField id="body" name="body" label="„Jak zostać członkiem?”" defaultValue={intro?.body ?? ""} />
          <div>
            <label htmlFor="closing">Zdanie zamykające</label>
            <textarea id="closing" name="closing" defaultValue={intro?.closing ?? ""} rows={2} />
          </div>
          <button type="submit" className="btn btn--primary">Zapisz</button>
        </form>
      </div>

      <h2 style={{ marginTop: 40, fontSize: "1.2rem" }}>Co daje członkostwo? (lista korzyści)</h2>
      {benefits.map((item) => (
        <div className="admin-form-card" key={item.id}>
          <form action={updateBenefitItem} className="admin-form-card__stack">
            <input type="hidden" name="id" value={item.id} />
            <div>
              <label htmlFor={`benefit-${item.id}`}>Korzyść nr {item.title}</label>
              <textarea id={`benefit-${item.id}`} name="body" defaultValue={item.body} rows={2} required />
            </div>
            <button type="submit" className="btn btn--outline">Zapisz</button>
          </form>
        </div>
      ))}
    </div>
  );
}
