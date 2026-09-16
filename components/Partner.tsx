import { partners } from "@/lib/data";
import { Sheet, Card } from "./ui";

export function Partner() {
  return (
    <Sheet id="partner" index="§ 14" kicker="Partner With THAPAK" title="Let's build cleaner air together">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => (
          <Card key={p.title} title={p.title}>
            {p.body}
          </Card>
        ))}
      </div>
    </Sheet>
  );
}
