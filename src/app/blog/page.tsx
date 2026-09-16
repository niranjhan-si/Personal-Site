import { getSubstackPosts } from "@/lib/substack";
import SubstackPostCard from "@/components/SubstackPostCard";

export default async function Blog() {
  const posts = await getSubstackPosts(50);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-black/70 dark:text-white/70">
          Couldn&apos;t load posts right now — see them directly on{" "}
          <a
            href="https://niranjhan.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Substack
          </a>
          .
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <SubstackPostCard key={post.link} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
}
