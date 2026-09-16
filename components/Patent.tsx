import { Sheet, Prose, ChainFlow } from "./ui";

export function Patent() {
  return (
    <Sheet id="patent" index="§ 03" kicker="The Patent" title="Protected technology" tone="ink">
      <Prose>
        <p className="text-paper/85">
          The THAPAK® technology is supported by a granted patent covering
          the ventilation mechanism and process, relating to electricity-free
          ambient air ventilation and purification. THAPAK Trade and
          Overseas Pvt. Ltd. holds an exclusive patent licence for
          manufacturing and supplying/trading the technology.
        </p>
      </Prose>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs text-pine-light">OPERATING CONCEPT</p>
          <ol className="space-y-3">
            {[
              "Ambient polluted air enters",
              "Passive filtration takes place without electricity",
              "Purified air is released at scale",
            ].map((step, i) => (
              <li key={step} className="flex gap-3 border-t border-paper/15 pt-3 text-sm text-paper/85">
                <span className="font-mono text-pine-light">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs text-pine-light">FROM IP TO INFRASTRUCTURE</p>
          <ChainFlow steps={["Patent", "Product", "Manufacturing", "Deployment"]} dark />
          <p className="mt-6 text-sm text-paper/70">
            Our objective is to transform protected intellectual property
            into practical, scalable air-purification infrastructure.
          </p>
        </div>
      </div>
    </Sheet>
  );
}
