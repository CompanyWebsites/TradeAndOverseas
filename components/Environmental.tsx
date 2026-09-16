import { Sheet, Prose, ChainFlow } from "./ui";

export function Environmental() {
  return (
    <Sheet
      id="environmental"
      index="§ 09"
      kicker="Environmental Positioning & Sustainability"
      title="Air purification without electricity"
      tone="ink"
    >
      <p className="mb-3 font-mono text-xs text-pine-light">OPERATING IMPLICATIONS</p>
      <ChainFlow
        dark
        steps={[
          "No electricity requirement",
          "No electricity-related power demand",
          "No direct operational emissions",
          "Reduced dependence on powered purification",
        ]}
      />

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Prose>
          <p className="text-paper/85">
            The technology presentation specifically characterizes the
            system as having no direct or indirect emissions during
            operation. THAPAK® technology is positioned as a
            zero-operational-emission and carbon-credit-generating model in
            the source presentation, with the system&apos;s electricity-free
            operating principle central to this environmental positioning.
          </p>
          <p className="mt-4 text-xs text-paper/50">
            Any carbon-credit or emissions-related claims will be presented
            subject to applicable standards, methodologies, verification and
            regulatory requirements.
          </p>
        </Prose>
        <div>
          <p className="mb-3 font-mono text-xs text-pine-light">BROADER OBJECTIVE</p>
          <ul className="space-y-2">
            {[
              "Cleaner air",
              "Reduced dependence on electricity",
              "Lower operational energy demand",
              "Sustainable infrastructure",
              "Environmental improvement",
              "Long-term resource efficiency",
            ].map((item) => (
              <li key={item} className="border-t border-paper/15 pt-2 text-sm text-paper/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Sheet>
  );
}
