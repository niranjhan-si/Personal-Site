import Link from "next/link";
import Image from "next/image";
import { getSubstackPosts } from "@/lib/substack";
import { getGithubProjects } from "@/lib/github";
import { WORK_PROJECTS } from "@/lib/work";
import SubstackPostCard from "@/components/SubstackPostCard";
import GithubProjectCard from "@/components/GithubProjectCard";
import WorkProjectCard from "@/components/WorkProjectCard";

export const metadata = {
  title: "Niranjhan Sivakumar — Product Manager, AI & Platforms",
  description:
    "Product Manager at Junglee Games (Flutter Entertainment). Building engagement platforms, gamification, and agentic AI. Working notes and side builds.",
};

export default async function Home() {
  const [posts, projects] = await Promise.all([
    getSubstackPosts(3),
    getGithubProjects(3),
  ]);
  const work = WORK_PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <Image
          src="/images/niranjhan.png"
          alt="Niranjhan Sivakumar"
          width={96}
          height={96}
          className="rounded-full"
          priority
        />
        <h1 className="text-3xl font-semibold tracking-tight">
          Product, systems, and agentic AI.
        </h1>
        <p className="max-w-2xl text-black/70 dark:text-white/70">
          Hello! 👋 I&apos;m Niranjhan, and I&apos;m glad you stopped by. I&apos;m a Product
          Manager at Junglee Games (Flutter Entertainment) in Bengaluru, where I spend my time
          turning complex systems into effortless habits.
        </p>
        <p className="max-w-2xl text-black/70 dark:text-white/70">
          My path here wasn&apos;t a straight line. I started out engineering gate-driver
          circuits and thermal dissipation models for a U.S. Navy power electronics project,
          took a hard detour into consumer culture and brand strategy at MICA, and eventually
          landed on product management.
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
          <ul className="flex gap-4 overflow-x-auto p-1 -m-1 snap-x snap-mandatory">
            {work.map((project) => (
              <WorkProjectCard
                key={project.name}
                project={project}
                className="w-80 shrink-0 snap-start"
              />
            ))}
          </ul>
        </div>
      )}

      {projects.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Recent Projects</h2>
            <Link href="/projects" className="text-sm hover:underline">
              View all →
            </Link>
          </div>
          <ul className="flex gap-4 overflow-x-auto p-1 -m-1 snap-x snap-mandatory">
            {projects.map((project) => (
              <GithubProjectCard
                key={project.url}
                project={project}
                className="w-80 shrink-0 snap-start"
              />
            ))}
          </ul>
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
          <ul className="flex gap-4 overflow-x-auto p-1 -m-1 snap-x snap-mandatory">
            {posts.map((post) => (
              <SubstackPostCard
                key={post.link}
                post={post}
                className="w-80 shrink-0 snap-start"
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
