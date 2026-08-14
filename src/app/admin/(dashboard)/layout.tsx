import Link from "next/link";
import { redirect } from "next/navigation";
import { clearSession, requireAdmin } from "@/lib/auth";

async function logoutAction() {
  "use server";
  clearSession();
  redirect("/admin/login");
}

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <div className="container admin-topbar__actions">
          <Link href="/admin" className="admin-topbar__brand">Panel PTLGK</Link>
          <div className="admin-topbar__actions">
            <span className="admin-topbar__user">{admin.email}</span>
            <Link href="/" target="_blank">Zobacz stronę ↗</Link>
            <form action={logoutAction}>
              <button type="submit" className="btn btn--outline-light btn--sm">Wyloguj</button>
            </form>
          </div>
        </div>
      </div>
      <div className="admin-main">
        <div className="container">{children}</div>
      </div>
    </div>
  );
}
