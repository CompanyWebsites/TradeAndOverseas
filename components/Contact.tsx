import { enquiryTopics } from "@/lib/data";
import { Sheet, Tag } from "./ui";

export function Contact() {
  return (
    <Sheet
      id="contact"
      index="§ 17"
      kicker="Contact Us"
      title="Bring electricity-free air purification to your application"
    >
      <p className="max-w-xl text-sm leading-relaxed text-ink/75">
        Interested in the THAPAK® Ambient Air Purification System? We
        welcome enquiries regarding:
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {enquiryTopics.map((topic) => (
          <Tag key={topic}>{topic}</Tag>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-mono text-xs text-smog">REGISTERED OFFICE</p>
          <p className="mt-2 text-sm text-ink/70">[Address]</p>
        </div>
        <div>
          <p className="font-mono text-xs text-smog">EMAIL</p>
          <p className="mt-2 text-sm text-ink/70">[Official Email]</p>
        </div>
        <div>
          <p className="font-mono text-xs text-smog">PHONE</p>
          <p className="mt-2 text-sm text-ink/70">[Contact Number]</p>
        </div>
        <div>
          <p className="font-mono text-xs text-smog">WEBSITE</p>
          <p className="mt-2 text-sm text-ink/70">[Website]</p>
        </div>
      </div>

      <a
        href="#contact"
        className="mt-12 inline-block border border-ink bg-ink px-6 py-3 font-mono text-xs text-paper transition-colors hover:bg-pine hover:border-pine"
      >
        Enquire about THAPAK® →
      </a>
      <p className="mt-3 text-xs text-smog">
        Replace with a mailto: or form link once contact details are confirmed.
      </p>
    </Sheet>
  );
}
