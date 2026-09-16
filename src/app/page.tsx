import Link from "next/link";
import { getSubstackPosts } from "@/lib/substack";
import { getGithubProjects } from "@/lib/github";
import { WORK_PROJECTS } from "@/lib/work";
import SubstackPostCard from "@/components/SubstackPostCard";
import GithubProjectCard from "@/components/GithubProjectCard";
import WorkProjectCard from "@/components/WorkProjectCard";
import ScrollRow from "@/components/ScrollRow";

export default async function Home() {
  const [posts, projects] = await Promise.all([
    getSubstackPosts(3),
    getGithubProjects(3),
  ]);
  const work = WORK_PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Product, systems, and agentic AI.
        </h1>
        <p className="max-w-2xl text-black/70 dark:text-white/70">
          Hello 👋 I&apos;m Niranjhan, and I&apos;m glad you stopped by. At work, I spend my
          time turning complex systems into effortless habits. For me that usually means
          building platforms, gamification loops, and agentic AI at Flutter Entertainment.
        </p>
        <p className="max-w-2xl text-black/70 dark:text-white/70">
          My path here wasn&apos;t a straight line. I started out running thermal simulations
          on high-voltage power circuits for the U.S. Navy, took a hard detour into consumer
          culture and brand strategy at MICA, and eventually landed on product management.
        </p>
        <p className="max-w-2xl text-black/70 dark:text-white/70">
          This site is where I park my working notes, side builds, and the occasional deep
          dive into technology, systems, and human behavior. Poke around, and feel free to
          reach out if something here resonates.
        </p>
      </div>

      {work.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Work</h2>
            <Link href="/work" className="text-sm hover:underline">
              View all →
            </Link>
          </div>
          <ScrollRow>
            {work.map((project) => (
              <WorkProjectCard
                key={project.name}
                project={project}
                className="w-80 shrink-0 snap-start"
              />
            ))}
          </ScrollRow>
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
          <ScrollRow>
            {projects.map((project) => (
              <GithubProjectCard
                key={project.url}
                project={project}
                className="w-80 shrink-0 snap-start"
              />
            ))}
          </ScrollRow>
        </div>
      )}

      {posts.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Latest from Substack</h2>
            <Link href="/blog" className="text-sm hover:underline">
              View all →
            </Link>
          </div>
          <ScrollRow>
            {posts.map((post) => (
              <SubstackPostCard
                key={post.link}
                post={post}
                className="w-80 shrink-0 snap-start"
              />
            ))}
          </ScrollRow>
        </div>
      )}
    </div>
  );
}
