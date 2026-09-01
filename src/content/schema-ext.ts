import type { SiteContent } from "@/i18n/schema";
import { useContent } from "@/i18n/locale-provider";

/**
 * Khaled Aboud's site is a catalogue of exhibits, so it needs strings the
 * shared schema doesn't carry. Extending here keeps the shared schema clean.
 */
export type AboudContent = SiteContent & {
  scan: {
    /** Line under the hero explaining the point scan. */
    hint: string;
    alt: string;
  };
  collection: {
    heading: string;
    intro: string;
    /** Small-caps label above the paint chip. */
    paintLabel: string;
    mileageLabel: string;
    provenanceLabel: string;
    specsLabel: string;
    kitLabel: string;
    exteriorLabel: string;
    detailLabel: string;
    interiorLabel: string;
    /** Shown for a car whose plate they never published. */
    noSpecs: string;
    /** Per-spec-row labels, keyed by the English label in media.ts. */
    specLabels: Record<string, string>;
    /** Localised spec values, keyed by the English value in media.ts. */
    specValues: Record<string, string>;
    /** Localised provenance lines, keyed by the English line. */
    provenance: Record<string, string>;
    /** Localised equipment lines, keyed by the English line. */
    kit: Record<string, string>;
    /** Localised status/mileage strings, keyed by the English string. */
    status: Record<string, string>;
  };
  hub: {
    heading: string;
    body: string[];
    addressLine: string;
  };
  marques: { heading: string };
};

export function useAboud() {
  return useContent() as AboudContent;
}
