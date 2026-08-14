import { redirect } from "next/navigation";
import { attemptLogin, getCurrentAdmin } from "@/lib/auth";

export const metadata = { title: "Logowanie — Panel PTLGK" };

async function loginAction(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  const result = await attemptLogin(email, password);
  if (!result.ok) {
    redirect(`/admin/login?error=${encodeURIComponent(result.error)}&next=${encodeURIComponent(next)}`);
  }
  redirect(next.startsWith("/admin") ? next : "/admin");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error?: string; next?: string };
}) {
  const admin = await getCurrentAdmin();
  if (admin) redirect("/admin");

  const next = searchParams.next ?? "/admin";

  return (
    <div className="admin-login">
      <div className="admin-login-card">
        <h1 style={{ fontSize: "1.4rem" }}>Panel PTLGK</h1>
        <p className="small" style={{ marginBottom: 20 }}>Zaloguj się, aby zarządzać treścią strony.</p>

        {searchParams.error && (
          <div className="admin-alert admin-alert--error">{searchParams.error}</div>
        )}

        <form action={loginAction}>
          <input type="hidden" name="next" value={next} />
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="email">Adres e-mail</label>
            <input type="email" id="email" name="email" required autoComplete="username" />
          </div>
          <div style={{ marginBottom: 8 }}>
            <label htmlFor="password">Hasło</label>
            <input type="password" id="password" name="password" required autoComplete="current-password" />
          </div>
          <button type="submit" className="btn btn--primary btn--block" style={{ marginTop: 16 }}>
            Zaloguj się
          </button>
        </form>
      </div>
    </div>
  );
}
