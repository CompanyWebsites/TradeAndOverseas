import { engagementLocations } from "@/lib/data";
import { Sheet, Prose, Tag } from "./ui";

export function Government() {
  return (
    <Sheet
      id="government"
      index="§ 12"
      kicker="Government & Institutional Engagement"
      title="Working toward large-scale air quality solutions"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <Prose>
            <p>
              The THAPAK presentation identifies engagement across multiple
              Indian locations, and with organizations and authorities
              including the Commission for Air Quality Management (CAQM) and
              local/institutional stakeholders.
            </p>
            <p className="mt-4">
              Our objective is to work with governments, institutions,
              industries and other stakeholders to explore practical
              solutions for ambient-air-quality challenges.
            </p>
          </Prose>
          <div className="mt-6 flex flex-wrap gap-2">
            {engagementLocations.map((loc) => (
              <Tag key={loc}>{loc}</Tag>
            ))}
          </div>
        </div>

        <div className="border-l-0 border-pine/30 pl-0 md:border-l md:pl-12">
          <p className="mb-3 font-mono text-xs text-smog">NATIONAL CLEAN AIR PROGRAMME</p>
          <Prose>
            <p>
              India&apos;s National Clean Air Programme provides an important
              national framework for improving air quality. The THAPAK®
              technology is designed around the challenge of improving
              ambient, non-industrial and non-residential air, particularly
              at large scale.
            </p>
            <p className="mt-4">
              THAPAK aims to contribute technology and engineering solutions
              that can be evaluated for deployment in cities and other areas
              facing air-quality challenges.
            </p>
          </Prose>
        </div>
      </div>
    </Sheet>
  );
}
