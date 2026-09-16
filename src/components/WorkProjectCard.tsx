import type { WorkProject } from "@/lib/work";

export default function WorkProjectCard({
  project,
  className = "",
}: {
  project: WorkProject;
  className?: string;
}) {
  return (
    <li
      className={`rounded-lg border border-black/10 p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-black/40 hover:shadow-lg dark:border-white/10 dark:hover:border-white/40 dark:hover:shadow-white/5 ${className}`}
    >
      <div className="flex flex-col gap-2">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-2"
        >
          <h3 className="font-heading text-xl font-semibold group-hover:underline">
            {project.name}
          </h3>
          <p className="text-sm text-black/50 dark:text-white/50">
            {project.company} · {project.live ? "Live ↗" : "Read more ↗"}
          </p>
          <p className="text-black/70 dark:text-white/70">{project.description}</p>
        </a>

        {project.video && (
          <a
            href={project.video}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-black/15 px-3 py-1 text-sm text-black/70 transition-colors hover:border-black/40 hover:text-black dark:border-white/15 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
          >
            ▶ Watch demo
          </a>
        )}
      </div>
    </li>
  );
}
