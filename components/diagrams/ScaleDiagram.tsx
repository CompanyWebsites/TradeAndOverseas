import { scaleComparison } from "@/lib/data";

export function ScaleDiagram() {
  const sizes = [34, 68, 120];
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:items-end">
      {scaleComparison.map((tier, i) => (
        <div key={tier.tier} className="flex flex-col items-start gap-4">
          <div className="flex h-[132px] w-full items-end">
            <div
              className="border border-pine/50 bg-pine/[0.06]"
              style={{ width: sizes[i], height: sizes[i] }}
            />
          </div>
          <div>
            <p className="font-mono text-xs text-pine">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="font-display text-base font-semibold">{tier.tier}</p>
            <p className="text-sm text-ink/65">{tier.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
