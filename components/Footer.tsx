import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-paper">
      <div className="container-sheet">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold">
              THAPAK<span className="text-pine-light">®</span> Trade and Overseas Pvt. Ltd.
            </p>
            <p className="mt-2 font-mono text-xs text-paper/50">
              Advanced Technology · Engineering · Manufacturing · Global Trade
            </p>
            <p className="mt-6 text-sm italic text-paper/60">
              Ambient air purification without external source of energy.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-5 md:text-right">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#top"
                className="font-mono text-xs text-paper/60 transition-colors hover:text-pine-light"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© THAPAK Trade and Overseas Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pine-light">Patent &amp; Intellectual Property</a>
            <a href="#" className="hover:text-pine-light">Privacy Policy</a>
            <a href="#" className="hover:text-pine-light">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
