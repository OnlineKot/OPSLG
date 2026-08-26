"use client";

import { useEffect } from "react";

// Dodaje delikatne wejście treści przy przewijaniu. Klasy są dopinane
// dopiero z poziomu JS — bez JavaScriptu (lub przy prefers-reduced-motion)
// treść jest po prostu od razu widoczna, nic się nie chowa.
const SELECTOR = [
  ".section-header",
  ".numbered-item",
  ".fact-row__item",
  ".announcement",
  ".def-item",
  ".news-entry",
  ".cta-band__inner",
].join(",");

export function RevealOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          // Lekkie kaskadowanie w obrębie jednej grupy rodzeństwa.
          const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
          const index = Math.min(siblings.indexOf(el), 5);
          el.style.transitionDelay = `${index * 60}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    elements.forEach((el) => {
      el.classList.add("js-reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
