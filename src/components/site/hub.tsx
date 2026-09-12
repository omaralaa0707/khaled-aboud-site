"use client";

import { useAboud } from "@/content/schema-ext";
import { MARQUES, EXHIBITS } from "@/content/media";
import { Scan } from "@/components/motion/scan";

const DIAL = ["+201102069606", "+201010010644", "+201141360680"];

export function Hub() {
  const c = useAboud();
  // The palette strip is built from the exhibits themselves: every colour on
  // this site is a car's own published paint.
  const paints = EXHIBITS.filter((e) => e.paint && e.paintName);

  return (
    <>
      <section id="hub" className="border-t border-white/12 bg-void-2 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Scan className="lg:col-span-5">
              <h2 className="font-display text-display font-extrabold uppercase leading-[1] tracking-[-0.02em]">
                {c.hub.heading}
              </h2>
              {c.hub.body.map((p, i) => (
                <p key={i} className="mt-5 max-w-[46ch] text-lead leading-relaxed text-steel-2">
                  {p}
                </p>
              ))}
              <p className="label-serif mt-8 text-beam">{c.hub.addressLine}</p>
            </Scan>

            <Scan delay={0.1} className="lg:col-span-7">
              <dl className="grid grid-cols-3 gap-6 border-y border-white/12 py-8">
                {c.about.stats?.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="tnum font-display text-[1.7rem] font-extrabold leading-none">
                      {s.value}
                    </dd>
                    <p className="mt-2.5 text-[0.76rem] leading-snug text-steel">{s.label}</p>
                  </div>
                ))}
              </dl>

              {/* Every colour this site uses, and the car it belongs to. */}
              <p className="label-serif mt-10 text-steel">{c.collection.paintLabel}</p>
              <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {paints.map((e) => (
                  <li key={e.id} className="flex items-center gap-3">
                    <span
                      className="h-7 w-7 shrink-0 border border-white/25"
                      style={{ backgroundColor: e.paint }}
                      aria-hidden
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-[0.82rem] text-chalk">
                        {e.paintName}
                      </span>
                      <span className="block text-[0.72rem] text-steel">
                        {e.make} {e.model}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Scan>
          </div>
        </div>
      </section>

      <section className="bg-void px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[94rem]">
          <Scan>
            <h2 className="font-display text-display font-extrabold uppercase leading-[1] tracking-[-0.02em]">
              {c.services.heading}
            </h2>
            <p className="mt-5 max-w-[52ch] text-lead text-steel-2">{c.services.intro}</p>
          </Scan>

          <div className="mt-12 grid gap-px bg-white/12 sm:grid-cols-3">
            {c.services.items.map((s, i) => (
              <Scan key={s.title} delay={i * 0.08} className="bg-void p-8">
                <span className="tnum label-serif text-beam">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[1.16rem] font-bold uppercase leading-snug tracking-[0.01em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-steel-2">{s.body}</p>
              </Scan>
            ))}
          </div>

          <Scan delay={0.1} className="mt-16">
            <p className="label-serif text-steel">{c.marques.heading}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4">
              {MARQUES.map((m) => (
                <span
                  key={m}
                  className="font-display text-[1.3rem] font-bold uppercase tracking-[0.02em] text-steel transition-colors duration-300 hover:text-chalk"
                >
                  {m}
                </span>
              ))}
            </div>
          </Scan>
        </div>
      </section>

      <section
        id="visit"
        className="border-t border-white/12 bg-void-2 px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-12 lg:gap-16">
          <Scan className="lg:col-span-6">
            <h2 className="font-display text-display font-extrabold uppercase leading-[1] tracking-[-0.02em]">
              {c.contact.heading}
            </h2>
            <p className="mt-5 max-w-[44ch] text-lead leading-relaxed text-steel-2">
              {c.contact.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`tel:${DIAL[0]}`}
                className="border border-chalk bg-chalk px-7 py-3 text-[0.84rem] font-semibold uppercase tracking-[0.1em] text-void transition-colors duration-300 hover:border-beam hover:bg-beam"
              >
                {c.contact.cta}
              </a>
              <a
                href={`https://wa.me/${DIAL[0].replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 px-7 py-3 text-[0.84rem] font-medium tracking-[0.06em] transition-colors duration-300 hover:border-chalk hover:bg-chalk hover:text-void"
              >
                WhatsApp
              </a>
            </div>
          </Scan>

          <Scan delay={0.08} className="lg:col-span-6">
            <dl className="border-t border-white/12">
              <div className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-white/12 py-4">
                <dt className="label-serif pt-1 text-steel">{c.contact.addressLabel}</dt>
                <dd className="text-[0.95rem] leading-relaxed">{c.contact.address}</dd>
              </div>
              <div className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-white/12 py-4">
                <dt className="label-serif pt-1 text-steel">{c.contact.phoneLabel}</dt>
                <dd className="flex flex-col gap-1">
                  {c.contact.phones.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${DIAL[i]}`}
                      dir="ltr"
                      className="tnum w-fit text-[0.95rem] underline-offset-4 hover:text-beam hover:underline rtl:self-end"
                    >
                      {p}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-white/12 py-4">
                <dt className="label-serif pt-1 text-steel">{c.contact.hoursLabel}</dt>
                <dd className="text-[0.95rem] text-steel-2">{c.contact.hours}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-6 text-[0.84rem]">
              <a
                href={c.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-beam underline underline-offset-4"
              >
                Google Maps
              </a>
              <a
                href={c.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-beam underline underline-offset-4"
              >
                Instagram
              </a>
              <a
                href={c.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-beam underline underline-offset-4"
              >
                Facebook
              </a>
            </div>
          </Scan>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  const c = useAboud();
  return (
    <footer className="border-t border-white/12 bg-void px-5 py-12 text-steel sm:px-8">
      <div className="mx-auto flex max-w-[94rem] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/mark.svg" alt="" className="h-8 w-auto opacity-80" />
          <span>
            <span className="block font-display text-[0.82rem] font-bold uppercase leading-none tracking-[0.14em] text-chalk">
              Khaled Aboud
            </span>
            <span className="label-serif mt-1 block">Luxury &amp; Exotics</span>
          </span>
        </div>
        <div className="max-w-[64ch] text-[0.76rem] leading-relaxed">
          <p className="mt-1.5 opacity-70">{c.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
