"use client";

import React, { createContext, ReactNode, useContext, useRef } from "react";

type ScrollContextType = {
  registerSection: (id: string, ref: React.RefObject<HTMLElement>) => void;
  scrollToSection: (id: string) => void;
  scrollToTop: () => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

function smoothScroll(start: number, end: number, duration: number) {
  const startTime = performance.now();

  function step() {
    const currentTime = performance.now();
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easeInOutCubic =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + (end - start) * easeInOutCubic);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const sectionsRef = useRef<{ [key: string]: React.RefObject<HTMLElement> }>(
    {}
  );

  const registerSection = (id: string, ref: React.RefObject<HTMLElement>) => {
    sectionsRef.current[id] = ref;
  };

  const scrollToSection = (id: string) => {
    const section = sectionsRef.current[id];
    if (section && section.current) {
      const start = window.pageYOffset;
      const end = section.current.getBoundingClientRect().top + start;
      smoothScroll(start, end, 300);
    }
  };

  const scrollToTop = () => {
    const start = window.pageYOffset;
    smoothScroll(start, 0, 300);
  };

  return (
    <ScrollContext.Provider
      value={{ registerSection, scrollToSection, scrollToTop }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
