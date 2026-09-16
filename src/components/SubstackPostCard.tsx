import type { SubstackPost } from "@/lib/substack";

export default function SubstackPostCard({ post }: { post: SubstackPost }) {
  return (
    <li className="rounded-lg border border-black/10 p-5 transition-colors hover:border-black/25 dark:border-white/10 dark:hover:border-white/25">
      <a href={post.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
        <h3 className="font-heading text-xl font-semibold group-hover:underline">
          {post.title}
        </h3>
        <p className="text-sm text-black/50 dark:text-white/50">
          {new Date(post.pubDate).toLocaleDateString()} · Substack ↗
        </p>
        <p className="text-black/70 dark:text-white/70">{post.description}</p>
      </a>
    </li>
  );
}
