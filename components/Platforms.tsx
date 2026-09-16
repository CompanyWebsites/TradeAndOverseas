import { platforms } from "@/lib/data";
import { Sheet, Prose } from "./ui";

export function Platforms() {
  return (
    <Sheet id="platforms" index="§ 06" kicker="Two Technology Platforms" title="APS and AVS">
      <Prose>
        <p>The THAPAK presentation identifies two patented product lines.</p>
      </Prose>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {platforms.map((p) => (
          <div key={p.code} className="bg-white p-8">
            <p className="font-mono text-sm text-pine">{p.code}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{p.name}</h3>
            <p className="mt-3 inline-block border border-pine/30 px-3 py-1 font-mono text-xs text-pine">
              {p.setting}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">{p.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/70">
        Together, these technologies represent a broader THAPAK approach to
        electricity-free air movement, ventilation and purification.
      </p>
    </Sheet>
  );
}
