export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 py-6 dark:border-white/10">
      <div className="mx-auto max-w-3xl px-4 text-sm text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} yourname. Built with Next.js.
      </div>
    </footer>
  );
}
