import { businessActivities, ecosystemCapabilities } from "@/lib/data";
import { Sheet, Prose, Tag } from "./ui";

export function About() {
  return (
    <Sheet id="about" index="§ 01" kicker="About THAPAK" title="Who we are">
      <Prose>
        <p>
          THAPAK Trade and Overseas Pvt. Ltd. is an Indian company focused on
          bringing innovative technologies and engineering solutions from
          concept and intellectual property to practical products and
          applications.
        </p>
        <p className="mt-4">
          The company operates within a broader THAPAK ecosystem that has
          developed capabilities in research, testing, product development,
          automation, robotics, renewable energy, manufacturing and trade.
          Our approach is to combine technological innovation with
          engineering, manufacturing and market capabilities to create
          solutions that can be deployed in real-world environments.
        </p>
      </Prose>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs text-smog">BUSINESS ACTIVITIES</p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {businessActivities.map((item) => (
              <li key={item} className="border-l-2 border-pine/40 pl-3 text-sm leading-snug text-ink/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs text-smog">ECOSYSTEM CAPABILITIES</p>
          <div className="flex flex-wrap gap-2">
            {ecosystemCapabilities.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Sheet>
  );
}
