import { models, capacityScale } from "@/lib/data";
import { Sheet, Prose } from "./ui";

export function Products() {
  return (
    <Sheet
      id="products"
      index="§ 07"
      kicker="Product Portfolio"
      title="20 models, 10 kW to 2 MW"
    >
      <Prose>
        <p>
          The current product portfolio comprises multiple configurations
          designed for different capacity requirements. The presentation
          identifies 20 models, ranging from approximately 10 kW to 2 MW.
        </p>
      </Prose>

      <div className="mt-10 overflow-x-auto border border-line">
        <table className="w-full min-w-[480px] border-collapse font-mono text-sm">
          <thead>
            <tr className="border-b border-line bg-white/60 text-left text-xs text-smog">
              <th className="px-4 py-3 font-normal">Model</th>
              <th className="px-4 py-3 font-normal">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m, i) => (
              <tr
                key={m.model}
                className={"border-b border-line last:border-0 " + (i % 2 === 0 ? "bg-white" : "bg-paper")}
              >
                <td className="px-4 py-2.5 text-ink/85">{m.model}</td>
                <td className="px-4 py-2.5 text-pine">{m.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-smog">
        The detailed portfolio and corresponding air-purification capacities
        are documented in the technology presentation.
      </p>

      <div className="mt-14">
        <p className="mb-3 font-mono text-xs text-smog">DESIGNED FOR SCALE</p>
        <Prose>
          <p>
            The product range is designed to provide different
            air-processing capacities depending on the selected model. The
            presentation provides daily and annual air-purification
            capacities ranging from approximately 1.5 lakh cubic metres per
            day for the 10 kW models to approximately 5 crore cubic metres
            per day for the 2 MW model.
          </p>
        </Prose>

        <div className="mt-8 flex items-end gap-3 overflow-x-auto pb-2">
          {capacityScale.map((c, i) => (
            <div key={c} className="flex flex-col items-center gap-2">
              <div
                className="w-9 bg-pine/70"
                style={{ height: 18 + i * 12 }}
                aria-hidden
              />
              <span className="whitespace-nowrap font-mono text-[0.65rem] text-ink/60">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
