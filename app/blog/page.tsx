import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-14">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold">
          The <span className="text-[#b8914a]">journal</span>
        </h1>
        <p className="mt-2 text-sm text-[#8a8070] max-w-xl">
          Notes on Dhaka neighbourhoods, pricing, and how to buy, rent, or sell with fewer surprises.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white border border-[#ddd5c4] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <div className="relative h-52 bg-[#e8e0d0]">
              <Image src={post.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="p-5">
              <p className="text-[0.68rem] font-bold tracking-[1.2px] uppercase text-[#b8914a] mb-2">
                {post.category} · {post.read}
              </p>
              <h2 className="font-display text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-[#8a8070]">{post.excerpt}</p>
              <p className="text-xs text-[#8a8070] mt-4">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
