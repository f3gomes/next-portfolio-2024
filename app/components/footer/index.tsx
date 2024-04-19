export const Footer = () => {
  const linkStyle =
    "font-semibold text-emerald-600 hover:text-emerald-500 transition-all duration-300";

  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        <div className="flex items-center justify-center gap-2 mt-5 text-black dark:text-white">
          <span>Powered by</span>
          <a
            target="_blank"
            aria-label="Next.js"
            rel="noreferrer"
            className={linkStyle}
            href="https://nextjs.org"
          >
            Next.js
          </a>
          <span>and</span>
          <a
            target="_blank"
            aria-label="Vercel"
            rel="noreferrer"
            className={linkStyle}
            href="https://vercel.com"
          >
            Vercel
          </a>
        </div>
      </span>
    </footer>
  );
};
