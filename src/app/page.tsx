import Link from "next/link";
import { getSubstackPosts } from "@/lib/substack";
import { getGithubProjects } from "@/lib/github";
import SubstackPostCard from "@/components/SubstackPostCard";
import GithubProjectCard from "@/components/GithubProjectCard";

export default async function Home() {
  const [posts, projects] = await Promise.all([
    getSubstackPosts(3),
    getGithubProjects(3),
  ]);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Product, systems, and agentic AI.
        </h1>
        <p className="max-w-2xl text-black/70 dark:text-white/70">
          At work, I spend my time figuring out how to turn complex systems into effortless
          habits. Currently, that looks like building platforms, gamification loops, and
          agentic AI at Flutter Entertainment.
        </p>
        <p className="max-w-2xl text-black/70 dark:text-white/70">
          My route here wasn&apos;t linear: I started out running thermal simulations on
          high-voltage power circuits for the U.S. Navy, took a hard detour into consumer
          culture and brand strategy at MICA, and eventually realized product management is
          the one place where that split brain actually makes sense.
        </p>
        <p className="max-w-2xl text-black/70 dark:text-white/70">
          This site is where I park my working notes, side builds, and occasional deep dives
          into technology, systems, and human behavior.
        </p>
      </div>

      {posts.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Latest from Substack</h2>
            <Link href="/blog" className="text-sm hover:underline">
              View all →
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            {posts.map((post) => (
              <SubstackPostCard key={post.link} post={post} />
            ))}
          </ul>
        </div>
      )}

      {projects.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Recent projects</h2>
            <Link href="/projects" className="text-sm hover:underline">
              View all →
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <GithubProjectCard key={project.url} project={project} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
