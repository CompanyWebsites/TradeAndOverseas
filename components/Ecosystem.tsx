import { ecosystemCapabilities, innovationChain, futureDirections } from "@/lib/data";
import { Sheet, Prose, ChainFlow, Tag } from "./ui";

export function Ecosystem() {
  return (
    <Sheet id="ecosystem" index="§ 16" kicker="Beyond a Single Product" title="Our technology ecosystem">
      <Prose>
        <p>
          THAPAK&apos;s broader technology ecosystem includes capabilities
          and interests spanning research, testing, automation, robotics,
          renewable energy, manufacturing, environmental technology and
          international trade. The ambient air purification technology
          represents one of the key technology platforms being
          commercialized through THAPAK Trade and Overseas Pvt. Ltd.
        </p>
      </Prose>
      <div className="mt-6 flex flex-wrap gap-2">
        {[...ecosystemCapabilities, "Environmental technology"].map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-xs text-smog">OUR APPROACH TO INNOVATION</p>
          <h3 className="mb-4 font-display text-xl font-medium">
            Innovation that can be deployed
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-ink/70">
            We believe that successful technology requires more than an
            invention. Our objective is to create a complete pathway from
            innovation to real-world deployment.
          </p>
          <ChainFlow steps={innovationChain} />
        </div>

        <div>
          <p className="mb-2 font-mono text-xs text-smog">FUTURE DIRECTION</p>
          <h3 className="mb-4 font-display text-xl font-medium">
            Scaling technology for a cleaner future
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-ink/70">
            Our vision is to build technologies that can move from
            laboratory and engineering development to practical deployment
            at scale, through:
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {futureDirections.map((item) => (
              <li key={item} className="border-l-2 border-pine/40 pl-3 text-sm leading-snug text-ink/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Sheet>
  );
}
