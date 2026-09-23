import type { SubstackPost } from "@/lib/substack";

export default function SubstackPostCard({
  post,
  className = "",
}: {
  post: SubstackPost;
  className?: string;
}) {
  return (
    <li
      className={`rounded-lg border border-black/10 p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-black/40 hover:shadow-lg dark:border-white/10 dark:hover:border-white/40 dark:hover:shadow-white/5 ${className}`}
    >
      <div className="flex flex-col gap-2">
        <a href={post.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
          <h3 className="font-heading text-xl font-semibold group-hover:underline">
            {post.title}
          </h3>
          <p className="text-sm text-black/50 dark:text-white/50">
            {new Date(post.pubDate).toLocaleDateString()} · Substack ↗
          </p>
          <p className="text-black/70 dark:text-white/70">{post.description}</p>
        </a>

        {post.projectUrl && (
          <a
            href={post.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-black/15 px-3 py-1 text-sm text-black/70 transition-colors hover:border-black/40 hover:text-black dark:border-white/15 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
          >
            View the project →
          </a>
        )}
      </div>
    </li>
  );
}
