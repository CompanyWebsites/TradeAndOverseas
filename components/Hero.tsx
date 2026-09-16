import { focusChain } from "@/lib/data";
import { PurificationSchematic } from "./diagrams/PurificationSchematic";
import { ChainFlow } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-paper">
      <div className="container-sheet grid grid-cols-1 gap-12 pb-16 pt-16 md:grid-cols-[88px_1fr] md:pt-24">
        <div className="hidden md:block" />
        <div>
          <p className="mb-5 font-mono text-xs text-pine">
            THAPAK TRADE AND OVERSEAS PVT. LTD.
          </p>
          <h1 className="max-w-3xl font-display text-[2.5rem] font-medium leading-[1.08] tracking-tight md:text-[3.6rem]">
            Ambient air, purified —
            <br />
            without a single watt.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/80">
            THAPAK Trade and Overseas Pvt. Ltd. holds an exclusive patent
            licence to manufacture and supply the THAPAK® Ambient Air
            Purification System — a technology engineered to filter open,
            ambient air without electricity or any external source of
            energy, at a scale conventional purifiers were never built for.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#technology"
              className="border border-ink bg-ink px-5 py-3 font-mono text-xs text-paper transition-colors hover:bg-pine hover:border-pine"
            >
              See how it works
            </a>
            <a
              href="#products"
              className="border border-ink/30 px-5 py-3 font-mono text-xs text-ink transition-colors hover:border-pine hover:text-pine"
            >
              View the product range
            </a>
          </div>

          <div className="mt-14 border border-line bg-white p-6">
            <PurificationSchematic />
          </div>

          <div className="mt-10">
            <p className="mb-3 font-mono text-xs text-smog">OUR FOCUS</p>
            <ChainFlow steps={focusChain} />
          </div>
        </div>
      </div>
    </section>
  );
}
