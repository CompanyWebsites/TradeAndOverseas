import { commercialActivities, internationalActivities } from "@/lib/data";
import { Sheet, Prose, Card, Tag } from "./ui";

export function Business() {
  return (
    <Sheet id="business" index="§ 13" kicker="Business & Commercialization" title="From technology to market">
      <Prose>
        <p>
          THAPAK Trade and Overseas Pvt. Ltd. provides the commercial and
          manufacturing platform for the technology.
        </p>
      </Prose>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {commercialActivities.map((c) => (
          <Card key={c.title} title={c.title}>
            {c.body}
          </Card>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <p className="mb-2 font-mono text-xs text-smog">INTERNATIONAL BUSINESS</p>
        <h3 className="mb-4 font-display text-2xl font-medium">
          Taking Indian technology to the world
        </h3>
        <Prose>
          <p>
            THAPAK Trade and Overseas Pvt. Ltd. aims to develop markets for
            innovative technologies in India and internationally. The
            THAPAK® Ambient Air Purification System provides an opportunity
            to take an electricity-free ambient-air technology platform to
            markets facing air-quality and energy-access challenges.
          </p>
        </Prose>
        <div className="mt-6 flex flex-wrap gap-2">
          {internationalActivities.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
