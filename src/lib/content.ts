import { prisma } from "./db";

export function getIntro(pageKey: string) {
  return prisma.pageIntro.findUnique({ where: { pageKey } });
}

export function getItems(pageKey: string) {
  return prisma.contentItem.findMany({ where: { pageKey }, orderBy: { order: "asc" } });
}

export function getContactInfo() {
  return prisma.contactInfo.findFirst();
}

export function getPublishedNews(limit?: number) {
  return prisma.newsPost.findMany({
    where: { published: true },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    take: limit,
  });
}

// Dzieli wolny tekst na akapity po pustej linii — używane dla pól
// PageIntro.body edytowanych w panelu jako zwykły tekst (bez HTML,
// więc bez ryzyka XSS przy renderowaniu).
export function toParagraphs(text: string | null | undefined): string[] {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
