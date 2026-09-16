import { validationInstitutions, engineeringCapabilities } from "@/lib/data";
import { Sheet, Prose, Tag } from "./ui";

export function Engineering() {
  return (
    <Sheet
      id="engineering"
      index="§ 10"
      kicker="Quality, Validation & Engineering"
      title="Technology backed by engineering capability"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <Prose>
            <p>
              Quality, performance and independent validation are important
              components of the THAPAK® technology program. The source
              presentation identifies validation involvement from recognized
              technical and research institutions.
            </p>
          </Prose>
          <div className="mt-6 flex flex-wrap gap-2">
            {validationInstitutions.map((inst) => (
              <Tag key={inst}>{inst}</Tag>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/65">
            Where applicable, individual projects and installations can be
            supported by third-party testing, verification and performance
            assessment.
          </p>
        </div>

        <div>
          <Prose>
            <p>
              The broader THAPAK ecosystem provides capabilities that
              support the journey from technology development to
              manufactured product and field deployment.
            </p>
          </Prose>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
            {engineeringCapabilities.map((item) => (
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
