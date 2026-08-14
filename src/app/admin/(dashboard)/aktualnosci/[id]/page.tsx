import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { RichTextEditorField } from "@/components/admin/RichTextEditorField";
import { deleteNewsPost, updateNewsPost } from "../../actions";

export const metadata = { title: "Edytuj wpis — Panel PTLGK" };

function toLocalInputValue(date: Date | null): string {
  if (!date) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export default async function AdminNewsEditPage({ params }: { params: { id: string } }) {
  const post = await prisma.newsPost.findUnique({ where: { id: params.id } });
  if (!post) notFound();

  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / <Link href="/admin/aktualnosci">Aktualności</Link> / {post.title}</p>
      <div className="admin-page-head">
        <h1>Edytuj wpis</h1>
      </div>

      <div className="admin-form-card">
        <form action={updateNewsPost} className="admin-form-card__stack">
          <input type="hidden" name="id" value={post.id} />
          <div>
            <label htmlFor="title">Tytuł</label>
            <input type="text" id="title" name="title" defaultValue={post.title} required />
          </div>
          <div>
            <label htmlFor="eventDate">Data wydarzenia (opcjonalnie)</label>
            <input type="datetime-local" id="eventDate" name="eventDate" defaultValue={toLocalInputValue(post.eventDate)} />
          </div>
          <div>
            <label htmlFor="excerpt">Krótka zajawka (widoczna na stronie głównej)</label>
            <input type="text" id="excerpt" name="excerpt" defaultValue={post.excerpt ?? ""} />
          </div>
          <RichTextEditorField id="body" name="body" label="Treść wpisu" defaultValue={post.body} />
          <div className="consent-row">
            <input type="checkbox" id="published" name="published" defaultChecked={post.published} />
            <label htmlFor="published" style={{ display: "inline", marginBottom: 0 }}>Opublikowany (widoczny na stronie)</label>
          </div>
          <button type="submit" className="btn btn--primary">Zapisz zmiany</button>
        </form>
      </div>

      <div className="admin-form-card" style={{ borderColor: "#f3c6bf" }}>
        <h3>Usuń wpis</h3>
        <p className="small">Tej operacji nie można cofnąć.</p>
        <form action={deleteNewsPost}>
          <input type="hidden" name="id" value={post.id} />
          <button type="submit" className="btn btn--danger">Usuń wpis</button>
        </form>
      </div>
    </div>
  );
}
