import { paradigmCards } from "@/lib/data";
import { Sheet, Prose, Card } from "./ui";

export function Paradigm() {
  return (
    <Sheet
      id="paradigm"
      index="§ 04"
      kicker="Why THAPAK® Ambient Air Purification"
      title="A new paradigm for ambient air"
    >
      <Prose>
        <p>
          Air pollution is increasingly a challenge at the scale of cities
          and large communities. Traditional approaches may be designed for
          individual rooms, buildings, localized spaces or limited areas.
          The THAPAK® approach is designed to address ambient air at much
          larger scale.
        </p>
      </Prose>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {paradigmCards.map((card) => (
          <Card key={card.title} title={card.title}>
            {card.body}
          </Card>
        ))}
      </div>
    </Sheet>
  );
}
