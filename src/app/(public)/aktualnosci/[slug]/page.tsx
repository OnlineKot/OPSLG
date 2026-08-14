import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export const revalidate = 30;

async function getPost(slug: string) {
  return prisma.newsPost.findUnique({ where: { slug } });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Nie znaleziono" };
  return { title: post.title, description: post.excerpt ?? undefined };
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post || !post.published) notFound();

  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container">
        <p className="breadcrumb">
          <a href="/">Strona główna</a> / <a href="/aktualnosci">Aktualności</a> / {post.title}
        </p>

        <div className="section-header" style={{ textAlign: "left", maxWidth: 820, marginLeft: 0 }}>
          <span className="eyebrow">Aktualności</span>
          <h1>{post.title}</h1>
          {post.eventDate && (
            <p className="lede">
              <time dateTime={post.eventDate.toISOString()}>
                {post.eventDate.toLocaleDateString("pl-PL", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
              </time>
            </p>
          )}
        </div>

        <div style={{ maxWidth: 820 }}>
          {post.body.split(/\n\s*\n/).map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
