import { nav } from "@/lib/data";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-sheet flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          THAPAK<span className="text-pine">®</span>
          <span className="ml-2 hidden font-mono text-[0.65rem] font-normal text-smog sm:inline">
            TRADE &amp; OVERSEAS
          </span>
        </a>
        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-ink/70 transition-colors hover:text-pine"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="border border-ink px-4 py-2 font-mono text-xs transition-colors hover:border-pine hover:text-pine"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
