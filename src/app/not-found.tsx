import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-black/70 dark:text-white/70">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-sm hover:underline">
        Back home
      </Link>
    </div>
  );
}
