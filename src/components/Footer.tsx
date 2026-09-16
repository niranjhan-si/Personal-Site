const SOCIAL_LINKS = [
  { href: "https://github.com/niranjhan-si", label: "GitHub" },
  { href: "https://www.linkedin.com/in/niranjhan-sivakumar/", label: "LinkedIn" },
  { href: "https://niranjhan.substack.com/", label: "Substack" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 py-6 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between dark:text-white/60">
        <span>© {new Date().getFullYear()} Niranjhan Sivakumar. Built with Next.js.</span>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
