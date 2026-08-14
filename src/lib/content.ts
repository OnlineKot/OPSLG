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
