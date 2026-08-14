# Strona PTLGK — z panelem administracyjnym

Strona Polskiego Towarzystwa Lekarzy Genetyków Klinicznych, przebudowana z czystego
statycznego HTML na aplikację **Next.js 14 (App Router) + Prisma**, z panelem
administracyjnym (`/admin`) do edycji treści bez ingerencji w kod.

## Ważna zmiana: to już nie jest strona statyczna

Poprzednia wersja była zestawem plików HTML hostowanych przez **GitHub Pages**
(tryb „Deploy from a branch”). GitHub Pages obsługuje wyłącznie pliki statyczne —
**nie uruchomi tej wersji strony**, ponieważ panel administracyjny wymaga
działającego serwera (logowanie, zapisy do bazy danych, generowanie stron na
żądanie). Repozytorium trzeba wdrożyć na hostingu obsługującym Node.js.

Rekomendowane opcje hostingu (mają darmowy plan wystarczający na start):

- **Vercel** — twórcy Next.js, najprostsze wdrożenie (połącz repo z GitHub i gotowe).
- **Railway** / **Render** — jeśli wolisz mieć jeden kontener z aplikacją i bazą danych razem.

## Duży ruch — jak to działa

Strony publiczne (`/`, `/o-nas`, `/aktualnosci` itd.) są renderowane po stronie
serwera i **cache’owane** (ISR — `export const revalidate`). Baza danych jest
odpytywana tylko raz na określony czas (np. co 30–60 sekund) albo natychmiast po
zapisaniu zmiany w panelu (`revalidatePath`) — a nie przy każdym odwiedzającym.
Dzięki temu duży ruch obciąża głównie warstwę cache/CDN hostingu, a nie bazę danych.

Domyślnie baza to **SQLite** (plik, zero konfiguracji) — dobrze radzi sobie przy
ruchu, który jest głównie odczytem (typowe dla strony organizacji), ale **nie
nadaje się na hosting bezserwerowy typu Vercel Serverless Functions** (dysk jest
tam ulotny). Dwie opcje na produkcję:

1. Hosting z trwałym dyskiem (Railway/Render/Fly.io) — SQLite może zostać.
2. Hostowana baza Postgres (np. [Neon](https://neon.tech), Supabase, Railway
   Postgres) — zmień `provider = "sqlite"` na `provider = "postgresql"` w
   `prisma/schema.prisma`, ustaw `DATABASE_URL` na connection string bazy,
   uruchom `npx prisma migrate deploy`. To jedyna zmiana potrzebna do przejścia
   na Postgres.

## Pierwsze uruchomienie lokalnie

```bash
npm install
cp .env.example .env        # uzupełnij SESSION_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
npx prisma migrate dev      # tworzy bazę i tabele
npm run db:seed             # wypełnia bazę obecną treścią strony + tworzy konto admina
npm run dev                 # http://localhost:3000
```

Panel administracyjny: **http://localhost:3000/admin/login** — zaloguj się
danymi z `ADMIN_EMAIL` / `ADMIN_PASSWORD` z pliku `.env`.

## Wdrożenie na produkcję (Vercel + Neon Postgres — przykład)

1. Załóż bazę na [neon.tech](https://neon.tech) (darmowy plan), skopiuj connection string.
2. W `prisma/schema.prisma` zmień `provider = "sqlite"` na `provider = "postgresql"`.
3. Na Vercel: „Add New Project” → połącz to repozytorium GitHub.
4. W ustawieniach projektu na Vercel dodaj zmienne środowiskowe:
   - `DATABASE_URL` — connection string z Neon
   - `SESSION_SECRET` — długi losowy ciąg (`openssl rand -base64 32`)
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD` — dane pierwszego konta administratora
5. W ustawieniach builda na Vercel dodaj krok `npx prisma migrate deploy` przed
   `next build` (np. jako „Build Command”: `npx prisma migrate deploy && npx prisma generate && next build`).
6. Po pierwszym wdrożeniu uruchom jednorazowo `npm run db:seed` wskazując na
   produkcyjny `DATABASE_URL` (lokalnie, z odpowiednim `.env`), żeby utworzyć
   konto administratora i wgrać obecną treść strony.
7. **Zmień hasło administratora** po pierwszym zalogowaniu — na razie panel nie
   ma ekranu zmiany hasła; najprostszy sposób to ponownie uruchomić seed z nowym
   `ADMIN_PASSWORD` (seed nadpisuje tylko brakujące konto, więc dla realnej zmiany
   hasła trzeba na razie zaktualizować wpis bezpośrednio w bazie — to jedno z
   pierwszych usprawnień do dodania, patrz sekcja „Czego tu jeszcze brakuje”).
8. Skonfiguruj domenę w ustawieniach Vercel i (jeśli trzeba) przekieruj starą
   domenę z GitHub Pages.

## Co jest edytowalne z panelu `/admin`, a co nie

**Edytowalne przez administratora (bez ruszania kodu):**
- Hasło i lead na stronie głównej (hero)
- Sekcje „Kim jesteśmy” i „Działalność” na stronie głównej
- Treść strony „O nas” (wstęp, 4 kafelki, zdanie zamykające)
- Treść strony „Członkostwo” (wstęp, lista korzyści, „Jak zostać członkiem”, zamknięcie)
- Treść strony „Struktura” (wstęp, 4 organy Towarzystwa, zamknięcie)
- Treść strony „Współpraca”
- Dane kontaktowe (adres, telefon, e-mail, godziny pracy biura)
- **Aktualności** — pełne zarządzanie: dodawanie, edycja, usuwanie, publikacja/szkic

**Statyczne (wymagają edycji kodu i nowego wdrożenia):**
- Strony prawne: Polityka prywatności, Regulamin, Dostępność, Statut
- Strony informacyjne: Dla pacjentów, Dla genetyków klinicznych, Dla lekarzy
  kierujących, Dla studentów, Mapa strony, Dokumenty, Strefa Członka, Dołącz do nas

Te ostatnie zmieniają się rzadko (treści prawne/statutowe) — jeśli w praktyce
okaże się, że i one wymagają częstej edycji przez osobę bez dostępu do kodu,
można je w kolejnym kroku przenieść do tego samego modelu `PageIntro`/`ContentItem`
co reszta strony.

## Bezpieczeństwo

- Hasła haszowane `bcrypt` (12 rund), nigdy nie zapisywane jawnie.
- Sesja logowania: podpisany JWT (`jose`, HS256) w ciasteczku `HttpOnly`,
  `Secure` (w produkcji), `SameSite=Lax`, ważny 12 godzin.
- Panel chroniony dwuwarstwowo: `middleware.ts` (przed wejściem na `/admin/**`)
  oraz `requireAdmin()` wewnątrz każdej akcji zapisu (obrona w głąb).
- `.env` z sekretami jest w `.gitignore` — **nigdy nie commituj** `SESSION_SECRET`
  ani prawdziwego hasła administratora do repozytorium.

## Czego tu jeszcze brakuje (naturalne kolejne kroki)

- Ekran zmiany własnego hasła / zapraszania kolejnych administratorów z panelu.
- Kolejność aktualności / drag-and-drop.
- Podgląd „draft” przed publikacją na żywym linku.
- Historia zmian / kto i kiedy edytował daną sekcję.

## Struktura projektu

```
prisma/schema.prisma         — model danych
prisma/seed.ts                — dane startowe (obecna treść strony)
src/lib/                      — baza danych, sesje/hasła, pobieranie treści
src/middleware.ts             — ochrona /admin/**
src/components/               — nagłówek i stopka strony
src/app/(public)/             — strony publiczne (czytają z bazy)
src/app/admin/login/          — logowanie
src/app/admin/(dashboard)/    — panel administracyjny (chroniony)
```
