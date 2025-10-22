import { cases } from "@/data/cases";
import type { CasePreview, CaseStudy } from "@/types/case";

type GetAllOptions = {
  includeDrafts?: boolean;
};

export function getAllCases(opts: GetAllOptions = {}): CaseStudy[] {
  const { includeDrafts = false } = opts;
  return includeDrafts ? cases : cases.filter((c) => !c.draft);
}

export function getCase(
  slug: string,
  opts: GetAllOptions = {}
): CaseStudy | undefined {
  const all = getAllCases(opts);
  return all.find((c) => c.slug === slug);
}

export function getCasePreviews(opts: GetAllOptions = {}): CasePreview[] {
  return getAllCases(opts).map(
    ({ slug, title, summary, image, themeColor }) => ({
      slug,
      title,
      summary,
      image,
      themeColor,
    })
  );
}

let _map: Map<string, CaseStudy> | null = null;
function ensureMap(opts: GetAllOptions = {}) {
  if (!_map) {
    _map = new Map(getAllCases(opts).map((c) => [c.slug, c]));
  }
}
export function getCaseMap(opts: GetAllOptions = {}) {
  ensureMap(opts);
  return _map!;
}
