import { ReactNode } from "react";

export function Sheet({
  id,
  index,
  title,
  kicker,
  tone = "paper",
  children,
}: {
  id: string;
  index: string;
  title: ReactNode;
  kicker?: string;
  tone?: "paper" | "ink";
  children: ReactNode;
}) {
  const isDark = tone === "ink";
  return (
    <section
      id={id}
      className={
        "relative border-b border-line py-16 md:py-24 " +
        (isDark ? "bg-ink text-paper" : "bg-paper text-ink")
      }
    >
      <div className="container-sheet">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[88px_1fr]">
          <div className="flex items-start md:justify-end">
            <span className={"sheet-index " + (isDark ? "text-pine-light" : "")}>
              {index}
            </span>
          </div>
          <div>
            {kicker ? (
              <p
                className={
                  "mb-3 font-mono text-xs " +
                  (isDark ? "text-pine-light" : "text-pine")
                }
              >
                {kicker}
              </p>
            ) : null}
            <h2 className="mb-8 max-w-2xl font-display text-3xl font-medium leading-tight md:text-4xl">
              {title}
            </h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[62ch] font-body text-[1.05rem] leading-relaxed text-ink/85">
      {children}
    </div>
  );
}

export function Tag({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={
        "inline-block border px-3 py-1 font-mono text-xs " +
        (dark ? "border-paper/25 text-paper/80" : "border-pine/30 text-pine")
      }
    >
      {children}
    </span>
  );
}

export function Card({
  title,
  children,
  dark,
}: {
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={
        "border p-6 " +
        (dark ? "border-paper/15 bg-paper/[0.03]" : "border-line bg-white")
      }
    >
      <h3 className="mb-2 font-display text-base font-semibold">{title}</h3>
      <p className={"font-body text-sm leading-relaxed " + (dark ? "text-paper/70" : "text-ink/70")}>
        {children}
      </p>
    </div>
  );
}

export function ChainFlow({
  steps,
  dark,
}: {
  steps: string[];
  dark?: boolean;
}) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={
              "border px-3 py-1.5 font-mono text-xs " +
              (dark ? "border-paper/25 text-paper/85" : "border-pine/35 text-ink")
            }
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden className={dark ? "text-paper/30" : "text-smog"}>
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                <line x1="0" y1="5" x2="14" y2="5" stroke="currentColor" />
                <path d="M11 1L15 5L11 9" stroke="currentColor" fill="none" />
              </svg>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
