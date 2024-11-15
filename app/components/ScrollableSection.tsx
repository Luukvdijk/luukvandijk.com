"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useScroll } from "./ScrollContext";

interface ScrollableSectionProps {
  children: ReactNode;
  id: string;
}

export default function ScrollableSection({
  children,
  id,
}: ScrollableSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { registerSection } = useScroll();

  useEffect(() => {
    registerSection(id, ref);
  }, [id, registerSection]);

  return <div ref={ref}>{children}</div>;
}
