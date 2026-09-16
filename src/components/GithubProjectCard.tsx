import type { GithubProject } from "@/lib/github";

export default function GithubProjectCard({ project }: { project: GithubProject }) {
  return (
    <li className="rounded-lg border border-black/10 p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-black/40 hover:shadow-lg dark:border-white/10 dark:hover:border-white/40 dark:hover:shadow-white/5">
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
        <h3 className="font-heading text-xl font-semibold group-hover:underline">
          {project.name}
        </h3>
        <p className="text-sm text-black/50 dark:text-white/50">
          {[project.language, project.stars > 0 ? `★ ${project.stars}` : null, "GitHub ↗"]
            .filter(Boolean)
            .join(" · ")}
        </p>
        {project.description && (
          <p className="text-black/70 dark:text-white/70">{project.description}</p>
        )}
      </a>
    </li>
  );
}
