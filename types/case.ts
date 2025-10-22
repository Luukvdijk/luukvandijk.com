// Block types — stable keys you can mirror in a CMS component type
export type CaseBlockType =
  | "research"
  | "design"
  | "development"
  | "testing"
  | "collaboration"
  | "result"
  | "reflection";

export type SEOData = {
  title: string;
  description: string;
  image: string; // absolute or path under /public
  keywords?: string[];
  noIndex?: boolean;
};

export type CompanyInfo = {
  id: number;
  cat: string;
  plaats: string;
  employess: string; // keep your current field name (typo included)
  founded: string;
};

export type ToolSet = {
  id: number;
  point1?: string;
  point2?: string;
  point3?: string;
  point4?: string;
  point5?: string;
  point6?: string;
};

// Your data currently uses `discription` — keep it for now to avoid refactors
export type BriefItem = {
  id: number;
  discription: string;
};

export type BaseBlock = {
  id: string; // stable id (slug + index is fine for now)
  type: CaseBlockType;
  title?: string; // human-readable heading
  // You can add `order?: number` later if CMS doesn't guarantee order
};

export type TextBlock = BaseBlock & {
  text: string;
};

export type MediaBlock = TextBlock & {
  image?: string; // URL or path
  imageAlt?: string;
};

// Concrete blocks
export type ResearchBlock = TextBlock & { type: "research" };
export type DesignBlock = MediaBlock & { type: "design" };
export type DevelopmentBlock = TextBlock & { type: "development" };
export type TestingBlock = MediaBlock & { type: "testing" };
export type CollaborationBlock = TextBlock & { type: "collaboration" };
export type ResultBlock = TextBlock & { type: "result" };
export type ReflectionBlock = TextBlock & { type: "reflection" };

export type CaseBlock =
  | ResearchBlock
  | DesignBlock
  | DevelopmentBlock
  | TestingBlock
  | CollaborationBlock
  | ResultBlock
  | ReflectionBlock;

export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  description: string; // short intro
  summary: string; // used in SEO + overview grid
  themeColor: string;
  image: string; // hero image
  seo: SEOData;

  company: CompanyInfo[];
  tools: ToolSet[];

  // Kept your original Dutch arrays:
  omschrijving?: BriefItem[];
  uitdagingen?: BriefItem[];

  techStack: string[];
  duration: string;
  roles: string[];

  blocks: CaseBlock[];

  // optional CMS-ish flags
  draft?: boolean;
  updatedAt?: string;
  publishedAt?: string;
};

// Lighter list item for /case-studies overview
export type CasePreview = Pick<
  CaseStudy,
  "slug" | "title" | "summary" | "image" | "themeColor"
>;
