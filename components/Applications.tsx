import { applications } from "@/lib/data";
import { Sheet, Prose } from "./ui";
import { ScaleDiagram } from "./diagrams/ScaleDiagram";

export function Applications() {
  return (
    <Sheet
      id="applications"
      index="§ 08"
      kicker="Applications"
      title="Where can THAPAK® technology be used?"
    >
      <Prose>
        <p>
          The technology can be considered for large-scale ambient-air and
          enclosed-premises applications, depending upon system
          configuration and site requirements.
        </p>
      </Prose>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {applications.map((a) => (
          <div key={a.title} className="bg-paper p-6">
            <h3 className="font-display text-base font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{a.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <p className="mb-2 font-mono text-xs text-smog">CITY-SCALE AIR PURIFICATION</p>
        <h3 className="mb-6 font-display text-2xl font-medium">
          From cubic metres to cubic kilometres
        </h3>
        <Prose>
          <p>
            One of the central propositions of THAPAK® technology is its
            focus on large-scale ambient air purification. Traditional air
            purifiers generally operate at the scale of individual rooms or
            relatively small spaces; THAPAK® technology is designed with a
            different scale in mind, presented as capable of operating at
            cubic-kilometre scale.
          </p>
        </Prose>
        <div className="mt-10">
          <ScaleDiagram />
        </div>
      </div>
    </Sheet>
  );
}
