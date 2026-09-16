import { WORK_PROJECTS } from "@/lib/work";
import WorkProjectCard from "@/components/WorkProjectCard";

export const metadata = { title: "Work" };

export default function Work() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tight">Work</h1>
      <p className="text-black/70 dark:text-white/70">
        Products I&apos;ve owned or built at work.
      </p>
      <ul className="flex flex-col gap-4">
        {WORK_PROJECTS.map((project) => (
          <WorkProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </div>
  );
}
