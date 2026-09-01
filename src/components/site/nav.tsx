"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/locale-provider";
import { useAboud } from "@/content/schema-ext";

/** A museum header: the mark, a hairline, and the language switch. */
export function Nav() {
  const c = useAboud();
  const { locale, toggleLocale } = useLocale();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-white/10 bg-void/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[94rem] items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-3" aria-label={c.brand.name}>
          <img src="/mark.svg" alt="" className="h-7 w-auto" />
          <span className="hidden sm:block">
            <span className="block font-display text-[0.82rem] font-bold uppercase leading-none tracking-[0.14em]">
              Khaled Aboud
            </span>
            <span className="label-serif mt-1 block text-steel-2">Luxury &amp; Exotics</span>
          </span>
        </a>

        <nav className="ms-auto hidden items-center gap-8 md:flex">
          {c.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-2 text-[0.84rem] text-steel-2 transition-colors hover:text-chalk"
            >
              {l.label}
              <span className="absolute inset-x-0 bottom-1 h-px origin-center scale-x-0 bg-beam transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <button
          onClick={toggleLocale}
          className="ms-auto shrink-0 border border-white/25 px-3.5 py-1.5 text-[0.72rem] font-medium tracking-[0.14em] transition-colors hover:border-beam hover:text-beam md:ms-0"
          aria-label={c.a11y.toggleLanguage}
        >
          {locale === "ar" ? "EN" : "ع"}
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="border border-white/25 p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? c.a11y.closeMenu : c.a11y.openMenu}
        >
          <span className="block h-px w-4 bg-chalk" />
          <span className="mt-1 block h-px w-4 bg-chalk" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-void/95 px-5 pb-4 backdrop-blur-xl md:hidden">
          {c.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-[0.95rem] last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
