import Link from "next/link";
import { prisma } from "@/lib/db";

export const metadata = { title: "Aktualności — Panel PTLGK" };

export default async function AdminAktualnosciPage({ searchParams }: { searchParams: { saved?: string } }) {
  const posts = await prisma.newsPost.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] });

  return (
    <div>
      <p className="breadcrumb"><Link href="/admin">Panel</Link> / Aktualności</p>
      <div className="admin-page-head">
        <h1>Aktualności</h1>
        <Link href="/admin/aktualnosci/new" className="btn btn--primary btn--sm">+ Dodaj wpis</Link>
      </div>
      {searchParams.saved && <div className="admin-alert admin-alert--success" style={{ marginTop: 20 }}>Zapisano zmiany.</div>}

      {posts.length === 0 ? (
        <p style={{ marginTop: 20 }}>Brak wpisów. Dodaj pierwszy.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Tytuł</th>
              <th>Data wydarzenia</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.eventDate ? post.eventDate.toLocaleDateString("pl-PL") : "—"}</td>
                <td>
                  <span className={`admin-badge ${post.published ? "admin-badge--published" : "admin-badge--draft"}`}>
                    {post.published ? "Opublikowany" : "Szkic"}
                  </span>
                </td>
                <td className="admin-table__actions">
                  <Link href={`/admin/aktualnosci/${post.id}`}>Edytuj</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
