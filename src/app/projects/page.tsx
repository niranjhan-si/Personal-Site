import { getGithubProjects } from "@/lib/github";
import GithubProjectCard from "@/components/GithubProjectCard";

export const metadata = {
  title: "Projects",
  description:
    "Side builds: an MCP server for Apple Notes, a local RAG pipeline, and a multi-agent content pipeline with a measurement harness.",
};

export default async function Projects() {
  const projects = await getGithubProjects(50);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      {projects.length === 0 ? (
        <p className="text-black/70 dark:text-white/70">
          Couldn&apos;t load projects right now — see them directly on{" "}
          <a
            href="https://github.com/niranjhan-si"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <GithubProjectCard key={project.url} project={project} />
          ))}
        </ul>
      )}
    </div>
  );
}
