"use client";

import React, { createContext, ReactNode, useContext, useRef } from "react";

type ScrollContextType = {
  registerSection: (id: string, ref: React.RefObject<HTMLElement>) => void;
  scrollToSection: (id: string) => void;
  scrollToTop: () => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

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
      section.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
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
