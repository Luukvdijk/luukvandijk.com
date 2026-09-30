export type Testimonial = {
  id: string | number;
  review: string;
  img: string;
  name: string;
  place: string;
};

type FeedItem = { name?: unknown; company?: unknown; text?: unknown };

/** Defensive parse of the dashboard feed; drops anything malformed. */
export function parseTestimonials(json: unknown): Testimonial[] {
  const list = (json as { testimonials?: unknown })?.testimonials;
  if (!Array.isArray(list)) return [];

  return list.flatMap((item: FeedItem, index) =>
    typeof item?.name === "string" && typeof item?.text === "string"
      ? [
          {
            id: `dashboard-${index}`,
            review: item.text,
            img: "",
            name: item.name,
            place: typeof item.company === "string" ? item.company : "",
          },
        ]
      : []
  );
}

/**
 * Approved testimonials from the dashboard, cached for an hour (ISR).
 * Any failure returns [] so the page falls back to the hardcoded reviews.
 */
export async function fetchDashboardTestimonials(): Promise<Testimonial[]> {
  const base = process.env.DASHBOARD_URL;
  if (!base) return [];

  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/api/public/testimonials`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return [];
    return parseTestimonials(await res.json());
  } catch {
    return [];
  }
}
