"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { sanitizeRichText } from "@/lib/sanitize";

function str(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}
function optionalStr(formData: FormData, key: string): string | null {
  const value = str(formData, key);
  return value.length > 0 ? value : null;
}

async function saveIntro(
  formData: FormData,
  fields: Array<"eyebrow" | "title" | "lede" | "body" | "closing">,
  richFields: Array<"body"> = []
) {
  await requireAdmin();
  const pageKey = str(formData, "pageKey");
  if (!pageKey) throw new Error("Brak pageKey.");

  const data: Record<string, string | null> = {};
  for (const field of fields) {
    if (field === "title") {
      data[field] = str(formData, field);
    } else if ((richFields as string[]).includes(field)) {
      const raw = str(formData, field);
      data[field] = raw ? sanitizeRichText(raw) : null;
    } else {
      data[field] = optionalStr(formData, field);
    }
  }

  await prisma.pageIntro.upsert({
    where: { pageKey },
    create: { pageKey, title: data.title ?? "", ...data },
    update: data,
  });
}

async function saveItem(formData: FormData) {
  await requireAdmin();
  const id = str(formData, "id");
  const title = str(formData, "title");
  const body = str(formData, "body");
  if (!id) throw new Error("Brak id.");
  await prisma.contentItem.update({ where: { id }, data: { title, body } });
}

// --- Hero ---
export async function updateHero(formData: FormData) {
  await saveIntro(formData, ["title", "lede"]);
  revalidatePath("/");
  redirect("/admin/hero?saved=1");
}

// --- O nas ---
export async function updateAboutPageIntro(formData: FormData) {
  await saveIntro(formData, ["eyebrow", "title", "lede", "closing"]);
  revalidatePath("/o-nas");
  redirect("/admin/o-nas?saved=1");
}
export async function updateAboutItem(formData: FormData) {
  await saveItem(formData);
  revalidatePath("/o-nas");
  redirect("/admin/o-nas?saved=1");
}

// --- Strona główna: "Kim jesteśmy" / "Działalność" (osobne pageKeye) ---
export async function updateHomeAboutItem(formData: FormData) {
  await saveItem(formData);
  revalidatePath("/");
  redirect("/admin/hero?saved=1");
}
export async function updateHomeActivityItem(formData: FormData) {
  await saveItem(formData);
  revalidatePath("/");
  redirect("/admin/hero?saved=1");
}

// --- Członkostwo ---
export async function updateMembershipIntro(formData: FormData) {
  await saveIntro(formData, ["eyebrow", "title", "lede", "body", "closing"], ["body"]);
  revalidatePath("/czlonkostwo");
  revalidatePath("/");
  redirect("/admin/czlonkostwo?saved=1");
}
export async function updateBenefitItem(formData: FormData) {
  await requireAdmin();
  const id = str(formData, "id");
  const body = str(formData, "body");
  if (!id) throw new Error("Brak id.");
  await prisma.contentItem.update({ where: { id }, data: { body } });
  revalidatePath("/czlonkostwo");
  redirect("/admin/czlonkostwo?saved=1");
}

// --- Struktura ---
export async function updateStructureIntro(formData: FormData) {
  await saveIntro(formData, ["eyebrow", "title", "lede", "closing"]);
  revalidatePath("/struktura-organizacyjna");
  revalidatePath("/");
  redirect("/admin/struktura?saved=1");
}
export async function updateStructureItem(formData: FormData) {
  await saveItem(formData);
  revalidatePath("/struktura-organizacyjna");
  revalidatePath("/");
  redirect("/admin/struktura?saved=1");
}

// --- Współpraca ---
export async function updateCollaboration(formData: FormData) {
  await saveIntro(formData, ["eyebrow", "title", "lede"]);
  revalidatePath("/wspolpraca");
  redirect("/admin/wspolpraca?saved=1");
}

// --- Kontakt ---
export async function updateContact(formData: FormData) {
  await requireAdmin();
  const address = str(formData, "address");
  const phone = str(formData, "phone");
  const email = str(formData, "email");
  const officeHours = str(formData, "officeHours");

  const existing = await prisma.contactInfo.findFirst();
  if (existing) {
    await prisma.contactInfo.update({ where: { id: existing.id }, data: { address, phone, email, officeHours } });
  } else {
    await prisma.contactInfo.create({ data: { address, phone, email, officeHours } });
  }
  revalidatePath("/kontakt");
  revalidatePath("/");
  redirect("/admin/kontakt?saved=1");
}

// --- Aktualności (pełne CRUD) ---
function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80) || "wpis";
}

export async function createNewsPost(formData: FormData) {
  await requireAdmin();
  const title = str(formData, "title");
  const excerpt = optionalStr(formData, "excerpt");
  const body = sanitizeRichText(str(formData, "body"));
  const eventDateRaw = str(formData, "eventDate");
  const published = formData.get("published") === "on";
  if (!title || !body) throw new Error("Tytuł i treść są wymagane.");

  let slug = slugify(title);
  const existingCount = await prisma.newsPost.count({ where: { slug } });
  if (existingCount > 0) slug = `${slug}-${Date.now()}`;

  const lastOrder = await prisma.newsPost.findFirst({ orderBy: { order: "desc" } });

  await prisma.newsPost.create({
    data: {
      slug,
      title,
      excerpt,
      body,
      eventDate: eventDateRaw ? new Date(eventDateRaw) : null,
      published,
      order: (lastOrder?.order ?? -1) + 1,
    },
  });

  revalidatePath("/aktualnosci");
  revalidatePath("/");
  redirect("/admin/aktualnosci?saved=1");
}

export async function updateNewsPost(formData: FormData) {
  await requireAdmin();
  const id = str(formData, "id");
  const title = str(formData, "title");
  const excerpt = optionalStr(formData, "excerpt");
  const body = sanitizeRichText(str(formData, "body"));
  const eventDateRaw = str(formData, "eventDate");
  const published = formData.get("published") === "on";
  if (!id || !title || !body) throw new Error("Brak wymaganych danych.");

  await prisma.newsPost.update({
    where: { id },
    data: { title, excerpt, body, eventDate: eventDateRaw ? new Date(eventDateRaw) : null, published },
  });

  revalidatePath("/aktualnosci");
  revalidatePath("/");
  redirect("/admin/aktualnosci?saved=1");
}

export async function deleteNewsPost(formData: FormData) {
  await requireAdmin();
  const id = str(formData, "id");
  if (!id) throw new Error("Brak id.");
  await prisma.newsPost.delete({ where: { id } });
  revalidatePath("/aktualnosci");
  revalidatePath("/");
  redirect("/admin/aktualnosci?saved=1");
}
