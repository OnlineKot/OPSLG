import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, SESSION_MAX_AGE, SessionPayload, createSessionToken, verifySessionToken } from "./session";
import { prisma } from "./db";
import { verifyPassword } from "./password";

export async function getCurrentAdmin(): Promise<SessionPayload | null> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

// Wywoływane na początku każdej strony /admin/** — dodatkowa warstwa
// ochrony niezależna od middleware (defense in depth).
export async function requireAdmin(): Promise<SessionPayload> {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect("/admin/login");
  }
  return admin;
}

export type LoginResult = { ok: true } | { ok: false; error: string };

export async function attemptLogin(email: string, password: string): Promise<LoginResult> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !password) {
    return { ok: false, error: "Podaj adres e-mail i hasło." };
  }

  const user = await prisma.adminUser.findUnique({ where: { email: normalizedEmail } });
  // Stała ścieżka czasowa niezależnie od tego, czy użytkownik istnieje —
  // ogranicza możliwość wykrycia zarejestrowanych adresów e-mail (timing attack).
  const passwordHash = user?.passwordHash ?? "$2a$12$invalidinvalidinvalidinvalidinvalidinvalidinvalidinva";
  const passwordValid = await verifyPassword(password, passwordHash);

  if (!user || !passwordValid) {
    return { ok: false, error: "Nieprawidłowy e-mail lub hasło." };
  }

  const token = await createSessionToken({ sub: user.id, email: user.email });
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  return { ok: true };
}

export function clearSession(): void {
  cookies().set(SESSION_COOKIE, "", { path: "/", maxAge: 0 });
}
