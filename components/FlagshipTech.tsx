import { Sheet, Prose, Card } from "./ui";

export function FlagshipTech() {
  return (
    <Sheet
      id="technology"
      index="§ 02"
      kicker="Flagship Technology"
      title="THAPAK® Ambient Air Purification System"
    >
      <Prose>
        <p>
          THAPAK Trade and Overseas Pvt. Ltd. has an exclusive patent licence
          for manufacturing and supplying/trading the THAPAK® Ambient Air
          Purification System. The patented technology is designed to purify
          ambient air without electricity and without an external source of
          energy.
        </p>
        <p className="mt-4">
          The technology is based on a ventilation and filtration mechanism
          in which ambient air enters the system, undergoes passive
          filtration, and purified air is released at scale — with no
          electricity requirement and no direct or indirect emissions during
          operation.
        </p>
      </Prose>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card title="Without external energy">
          The system is designed to operate without conventional electrical
          power.
        </Card>
        <Card title="Designed for ambient air">
          Intended for air purification at a scale beyond conventional
          room-level purification.
        </Card>
        <Card title="Large-scale application">
          Presented as capable of operating at cubic-kilometre scale.
        </Card>
      </div>
    </Sheet>
  );
}
