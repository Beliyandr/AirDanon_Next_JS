"use client";

import { useEffect, useMemo, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
};

type HeroSliderProps = {
  slides: HeroSlide[];
  intervalMs?: number;
};

export function HeroSlider({ slides, intervalMs = 6200 }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeSlides = useMemo(() => slides.filter((slide) => slide.src), [slides]);

  useEffect(() => {
    if (safeSlides.length < 2) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, safeSlides.length]);

  return (
    <div className="hero-slider" aria-hidden="true">
      {safeSlides.map((slide, index) => (
        <div
          className={index === activeIndex ? "hero-slide is-active" : "hero-slide"}
          key={slide.src}
          style={{ backgroundImage: `url("${slide.src}")` }}
        />
      ))}
      <div className="hero-slider-dots">
        {safeSlides.map((slide, index) => (
          <span className={index === activeIndex ? "is-active" : ""} key={slide.alt} />
        ))}
      </div>
    </div>
  );
}
