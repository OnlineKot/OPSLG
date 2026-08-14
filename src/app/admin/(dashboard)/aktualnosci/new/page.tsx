import Link from "next/link";
import { createNewsPost } from "../../actions";

export const metadata = { title: "Nowy wpis — Panel PTLGK" };

export default function AdminNewsNewPage() {
  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / <Link href="/admin/aktualnosci">Aktualności</Link> / Nowy wpis</p>
      <h1>Nowy wpis</h1>

      <div className="admin-form-card">
        <form action={createNewsPost} className="admin-form-card__stack">
          <div>
            <label htmlFor="title">Tytuł</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label htmlFor="eventDate">Data wydarzenia (opcjonalnie)</label>
            <input type="datetime-local" id="eventDate" name="eventDate" />
          </div>
          <div>
            <label htmlFor="excerpt">Krótki zajawka (widoczna na stronie głównej)</label>
            <input type="text" id="excerpt" name="excerpt" />
          </div>
          <div>
            <label htmlFor="body">Treść — osobne akapity oddziel pustą linią</label>
            <textarea id="body" name="body" rows={10} required />
          </div>
          <div className="consent-row">
            <input type="checkbox" id="published" name="published" defaultChecked />
            <label htmlFor="published" style={{ display: "inline", marginBottom: 0 }}>Opublikowany (widoczny na stronie)</label>
          </div>
          <button type="submit" className="btn btn--primary">Utwórz wpis</button>
        </form>
      </div>
    </div>
  );
}
