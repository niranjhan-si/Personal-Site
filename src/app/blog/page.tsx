import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-lg font-medium hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-black/60 dark:text-white/60">{post.date}</p>
            <p className="text-black/70 dark:text-white/70">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
