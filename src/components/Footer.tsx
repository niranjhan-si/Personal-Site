import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 py-6 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between dark:text-white/60">
        <span>© {new Date().getFullYear()} Niranjhan Sivakumar. Built with Next.js.</span>
        <SocialLinks />
      </div>
    </footer>
  );
}
