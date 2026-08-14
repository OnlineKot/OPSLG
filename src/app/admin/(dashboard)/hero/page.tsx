import Link from "next/link";
import { getIntro, getItems } from "@/lib/content";
import { updateHero, updateHomeAboutItem, updateHomeActivityItem } from "../actions";

export const metadata = { title: "Strona główna — Panel PTLGK" };

export default async function AdminHeroPage({ searchParams }: { searchParams: { saved?: string } }) {
  const [hero, aboutItems, activityItems] = await Promise.all([
    getIntro("home-hero"),
    getItems("home-about"),
    getItems("home-activity"),
  ]);

  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / Strona główna</p>
      <h1>Strona główna</h1>
      {searchParams.saved && <div className="admin-alert admin-alert--success">Zapisano zmiany.</div>}

      <div className="admin-form-card">
        <h3>Hasło hero</h3>
        <form action={updateHero} className="admin-form-card__stack">
          <input type="hidden" name="pageKey" value="home-hero" />
          <div>
            <label htmlFor="hero-title">Nagłówek</label>
            <input type="text" id="hero-title" name="title" defaultValue={hero?.title ?? ""} required />
          </div>
          <div>
            <label htmlFor="hero-lede">Tekst pod nagłówkiem</label>
            <textarea id="hero-lede" name="lede" defaultValue={hero?.lede ?? ""} rows={4} />
          </div>
          <button type="submit" className="btn btn--primary">Zapisz</button>
        </form>
      </div>

      <h2 style={{ marginTop: 40, fontSize: "1.2rem" }}>Sekcja „Kim jesteśmy” (01–03)</h2>
      {aboutItems.map((item) => (
        <div className="admin-form-card" key={item.id}>
          <form action={updateHomeAboutItem} className="admin-form-card__stack">
            <input type="hidden" name="id" value={item.id} />
            <div>
              <label htmlFor={`about-title-${item.id}`}>Tytuł</label>
              <input type="text" id={`about-title-${item.id}`} name="title" defaultValue={item.title} required />
            </div>
            <div>
              <label htmlFor={`about-body-${item.id}`}>Treść</label>
              <textarea id={`about-body-${item.id}`} name="body" defaultValue={item.body} rows={4} required />
            </div>
            <button type="submit" className="btn btn--outline">Zapisz</button>
          </form>
        </div>
      ))}

      <h2 style={{ marginTop: 40, fontSize: "1.2rem" }}>Sekcja „Działalność” (01–04)</h2>
      {activityItems.map((item) => (
        <div className="admin-form-card" key={item.id}>
          <form action={updateHomeActivityItem} className="admin-form-card__stack">
            <input type="hidden" name="id" value={item.id} />
            <div>
              <label htmlFor={`activity-title-${item.id}`}>Tytuł</label>
              <input type="text" id={`activity-title-${item.id}`} name="title" defaultValue={item.title} required />
            </div>
            <div>
              <label htmlFor={`activity-body-${item.id}`}>Treść</label>
              <textarea id={`activity-body-${item.id}`} name="body" defaultValue={item.body} rows={4} required />
            </div>
            <button type="submit" className="btn btn--outline">Zapisz</button>
          </form>
        </div>
      ))}
    </div>
  );
}
