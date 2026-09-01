"use client";

import { useState } from "react";
import { EXHIBITS, type Exhibit } from "@/content/media";
import { useAboud } from "@/content/schema-ext";
import { Scan } from "@/components/motion/scan";

type Tab = "exterior" | "detail" | "interior";

/**
 * One exhibit: a museum wall label beside its frames. The plate reproduces
 * exactly the fields Khaled Aboud published for that car, in their order, and
 * the paint chip renders the colour they named.
 */
function ExhibitCard({ ex, index }: { ex: Exhibit; index: number }) {
  const c = useAboud();
  const [tab, setTab] = useState<Tab>("exterior");
  const [frame, setFrame] = useState(0);

  const groups: Record<Tab, string[]> = {
    exterior: ex.exterior,
    detail: ex.detail,
    interior: ex.interior,
  };
  const tabs: { key: Tab; label: string }[] = [
    { key: "exterior", label: c.collection.exteriorLabel },
    { key: "detail", label: c.collection.detailLabel },
    { key: "interior", label: c.collection.interiorLabel },
  ];
  const shots = groups[tab];
  const active = shots[Math.min(frame, shots.length - 1)];
  const tr = (map: Record<string, string>, v: string) => map[v] ?? v;

  return (
    <Scan className="border-t border-white/12 py-14 sm:py-20">
      {/* Exhibit number, the way a museum numbers a case. */}
      <div className="mb-8 flex items-baseline gap-4">
        <span className="tnum label-serif text-steel">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-white/12" />
        <span className="label-serif text-steel">{ex.make}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Frames */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[3/2] overflow-hidden bg-void-2">
            <img
              key={active}
              src={active}
              alt={`${ex.make} ${ex.model} — ${tr(c.collection.status, ex.status)}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ animation: "scan-in 700ms both cubic-bezier(.65,0,.35,1)" }}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex gap-4">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setTab(t.key);
                    setFrame(0);
                  }}
                  disabled={groups[t.key].length === 0}
                  className={`label-serif transition-colors disabled:opacity-30 ${
                    tab === t.key ? "text-beam" : "text-steel hover:text-chalk"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex gap-1.5 ms-auto">
              {shots.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setFrame(i)}
                  aria-label={`${tabs.find((t) => t.key === tab)?.label} ${i + 1}`}
                  aria-current={i === frame}
                  className={`h-1.5 w-6 transition-colors ${
                    i === frame ? "bg-beam" : "bg-white/20 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Wall label */}
        <div className="lg:col-span-5">
          <h3 className="font-display text-display font-extrabold uppercase leading-[0.98] tracking-[-0.015em]">
            {ex.model}
          </h3>

          <p className="mt-3 text-[0.95rem] text-steel-2">
            {tr(c.collection.status, ex.status)}
            {ex.mileage && (
              <>
                {" · "}
                <span className="tnum">{tr(c.collection.status, ex.mileage)}</span>
              </>
            )}
          </p>

          {ex.provenance.length > 0 && (
            <div className="mt-7 border-s-2 border-beam ps-4">
              <p className="label-serif text-beam">{c.collection.provenanceLabel}</p>
              <ul className="mt-2.5 space-y-1">
                {ex.provenance.map((p) => (
                  <li key={p} className="text-[0.92rem] leading-snug text-chalk">
                    {tr(c.collection.provenance, p)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {ex.paint && ex.paintName && (
            <div className="mt-7 flex items-center gap-4">
              <span
                className="h-11 w-11 shrink-0 border border-white/25"
                style={{ backgroundColor: ex.paint }}
                aria-hidden
              />
              <span>
                <span className="label-serif block text-steel">{c.collection.paintLabel}</span>
                <span className="mt-1 block text-[0.92rem] text-chalk">{ex.paintName}</span>
              </span>
            </div>
          )}

          {ex.specs.length > 0 ? (
            <dl className="mt-8 border-t border-white/12">
              {ex.specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-white/12 py-3"
                >
                  <dt className="label-serif pt-1 text-steel">
                    {c.collection.specLabels[s.label] ?? s.label}
                  </dt>
                  <dd className="text-[0.9rem] leading-relaxed text-chalk">
                    {tr(c.collection.specValues, s.value)}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-8 border-t border-white/12 pt-5 text-[0.9rem] leading-relaxed text-steel-2">
              {c.collection.noSpecs}
            </p>
          )}

          {ex.kit && (
            <>
              <p className="label-serif mt-8 text-steel">{c.collection.kitLabel}</p>
              <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {ex.kit.map((k) => (
                  <li
                    key={k}
                    className="flex gap-2 text-[0.84rem] leading-snug text-steel-2"
                  >
                    <span className="mt-[0.55em] h-px w-2.5 shrink-0 bg-beam" />
                    {tr(c.collection.kit, k)}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Scan>
  );
}

export function Collection() {
  const c = useAboud();

  return (
    <section id="collection" className="hall-light bg-void px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[94rem]">
        <Scan>
          <h2 className="font-display text-display font-extrabold uppercase leading-[1] tracking-[-0.02em]">
            {c.collection.heading}
          </h2>
          <p className="mt-5 max-w-[60ch] text-lead leading-relaxed text-steel-2">
            {c.collection.intro}
          </p>
        </Scan>

        <div className="mt-12">
          {EXHIBITS.map((ex, i) => (
            <ExhibitCard key={ex.id} ex={ex} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
