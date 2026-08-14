import { redirect } from "next/navigation";
import { clearSession, requireAdmin } from "@/lib/auth";
import { AdminSidebarNav } from "@/components/admin/AdminSidebarNav";

async function logoutAction() {
  "use server";
  clearSession();
  redirect("/admin/login");
}

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <a href="/admin" className="admin-sidebar__brand">Panel PTLGK</a>
        <AdminSidebarNav />
        <div className="admin-sidebar__footer">
          <div className="admin-sidebar__user">{admin.email}</div>
          <a href="/" target="_blank" className="admin-nav-link">Zobacz stronę ↗</a>
          <form action={logoutAction}>
            <button type="submit" className="admin-nav-link" style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", font: "inherit" }}>
              Wyloguj
            </button>
          </form>
        </div>
      </aside>
      <div className="admin-content">
        <div className="admin-content-inner">{children}</div>
      </div>
    </div>
  );
}
