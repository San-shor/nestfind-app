import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="max-w-[760px] mx-auto px-4 md:px-6 py-14">
      <Link href="/blog" className="text-sm font-medium text-[#b8914a] hover:text-[#1a1714]">
        ← All articles
      </Link>
      <p className="text-[0.68rem] font-bold tracking-[1.2px] uppercase text-[#8a8070] mt-6 mb-2">
        {post.category} · {post.date} · {post.read}
      </p>
      <h1 className="font-display text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-[#e8e0d0] mb-8">
        <Image src={post.image} alt="" fill className="object-cover" sizes="760px" priority />
      </div>
      <div className="space-y-4 text-[#4a4540] leading-relaxed">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
