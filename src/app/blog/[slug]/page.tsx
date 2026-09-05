import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { getAllPosts, getPostSource } from "@/lib/posts";
import "highlight.js/styles/github.css";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let content: string;
  let data: { title: string; date: string };
  try {
    const source = getPostSource(slug);
    content = source.content;
    data = source.data as { title: string; date: string };
  } catch {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>{data.title}</h1>
      <p className="text-sm text-black/60 dark:text-white/60">{data.date}</p>
      <MDXRemote source={content} options={{ mdxOptions: { rehypePlugins: [rehypeHighlight] } }} />
    </article>
  );
}
