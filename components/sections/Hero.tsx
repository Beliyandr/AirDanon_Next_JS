import { ArrowDown, ChevronRight, Send } from "lucide-react";
import { HeroSlider } from "@/components/ui/HeroSlider";

const heroSlides = [
  {
    src: "/images/hero-story/hero-slide-01.webp",
    alt: "FPV дрон у польових умовах на заході сонця",
  },
  {
    src: "/images/hero-story/hero-slide-02.webp",
    alt: "FPV оператор веде дрон у складному середовищі",
  },
  {
    src: "/images/hero-story/hero-slide-03.webp",
    alt: "Антена FPV системи під час роботи",
  },
  {
    src: "/images/hero-story/hero-slide-04.webp",
    alt: "FPV дрон після виконання польового завдання",
  },
];

export function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const slides = heroSlides.map((slide) => ({
    ...slide,
    src: `${basePath}${slide.src}`,
  }));

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <HeroSlider slides={slides} />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="signal-path" aria-hidden="true">
        <span className="signal-pulse" />
      </div>
      <div className="container hero-inner relative z-2 flex h-full items-center">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="live-dot" />
            Українське виробництво
          </div>
          <h1>
            Надійний сигнал.
            <br />
            Точна інженерія.
          </h1>
          <p className="hero-lead">
            FPV антени з індивідуальним моделюванням, стабільним відеозв&apos;язком на кастомних
            частотах і перевіркою кожного виробу на аналізаторі кіл.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacts">
              <Send size={18} />
              Написати в Telegram
            </a>
            <a className="button button-ghost" href="#catalog">
              Переглянути антени <ChevronRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-status" aria-label="Ключові показники">
          <div>
            <strong>100%</strong>
            <span>ручний контроль</span>
          </div>
          <div>
            <strong>VSWR</strong>
            <span>звіт для кожної антени</span>
          </div>
          <div>
            <strong>Custom</strong>
            <span>частота під ваше ТЗ</span>
          </div>
        </div>
      </div>
      <a className="scroll-hint" href="#advantages" aria-label="Прокрутити до переваг">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
