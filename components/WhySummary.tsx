import { whySummary } from "@/lib/data";
import { Sheet } from "./ui";

export function WhySummary() {
  return (
    <Sheet
      id="why"
      index="§ 15"
      kicker="Why THAPAK®"
      title="Patent. Technology. Scale. Engineering."
      tone="ink"
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
        {whySummary.map((item) => (
          <div key={item.title} className="bg-ink p-6">
            <h3 className="font-display text-base font-semibold text-paper">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/65">{item.body}</p>
          </div>
        ))}
      </div>
    </Sheet>
  );
}
