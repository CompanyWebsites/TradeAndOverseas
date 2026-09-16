import { Sheet, Prose } from "./ui";
import { PurificationSchematic } from "./diagrams/PurificationSchematic";

const steps = [
  {
    n: "1",
    title: "Ambient air intake",
    body: "Polluted ambient air enters the system.",
  },
  {
    n: "2",
    title: "Passive filtration",
    body: "The air passes through the purification/filtration mechanism without conventional electrical power.",
  },
  {
    n: "3",
    title: "Purified air",
    body: "The treated air is released back into the surrounding environment.",
  },
];

export function HowItWorks() {
  return (
    <Sheet id="how-it-works" index="§ 05" kicker="How the Technology Works" title="Passive air purification">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="border-t border-pine/40 pt-4">
            <span className="font-mono text-xs text-pine">{step.n}</span>
            <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 border border-line bg-white p-6">
        <PurificationSchematic />
      </div>

      <Prose>
        <p className="mt-8 text-sm text-ink/70">
          The technology therefore seeks to achieve air movement and
          purification without combustion and without electrical energy
          consumption during operation.
        </p>
      </Prose>
    </Sheet>
  );
}
