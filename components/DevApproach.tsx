import { devApproach, supportChain } from "@/lib/data";
import { Sheet, Prose, ChainFlow } from "./ui";

export function DevApproach() {
  return (
    <Sheet
      id="approach"
      index="§ 11"
      kicker="Technology Development Approach"
      title="From intellectual property to deployment"
      tone="ink"
    >
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-9">
        {devApproach.map((s, i) => (
          <li key={s.step} className="border-t border-paper/20 pt-3">
            <span className="font-mono text-xs text-pine-light">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 font-display text-sm font-semibold text-paper">{s.step}</p>
            <p className="mt-1 text-xs leading-snug text-paper/60">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 border-t border-paper/15 pt-12">
        <p className="mb-2 font-mono text-xs text-pine-light">INSTALLATION &amp; SUPPORT</p>
        <h3 className="mb-4 font-display text-2xl font-medium text-paper">Beyond manufacturing</h3>
        <Prose>
          <p className="max-w-2xl text-paper/80">
            Our responsibility does not end with manufacturing the
            equipment. This integrated approach enables us to support
            customers through the complete product life cycle.
          </p>
        </Prose>
        <div className="mt-8">
          <ChainFlow dark steps={supportChain} />
        </div>
      </div>
    </Sheet>
  );
}
