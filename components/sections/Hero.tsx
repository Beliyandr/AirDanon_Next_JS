import type { CSSProperties } from "react";
import { ArrowDown, ChevronRight, Send } from "lucide-react";

const heroFrames = [
  {
    src: "/images/hero-story/hero-story-01.jpg",
    label: "Підготовка до вильоту",
  },
  {
    src: "/images/hero-story/hero-story-02.jpg",
    label: "Робота у полі",
  },
  {
    src: "/images/hero-story/hero-story-03.jpg",
    label: "Стабільний сигнал",
  },
  {
    src: "/images/hero-story/hero-story-04.jpg",
    label: "Результат місії",
  },
];

export function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="hero" id="top">
      <div className="hero-story" aria-hidden="true">
        {heroFrames.map((frame, index) => (
          <div
            className="hero-frame"
            key={frame.src}
            style={
              {
                "--frame-image": `url("${basePath}${frame.src}")`,
                "--frame-index": index,
              } as CSSProperties
            }
          />
        ))}
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
        <div className="hero-story-nav" aria-hidden="true">
          {heroFrames.map((frame, index) => (
            <span key={frame.label} style={{ "--frame-index": index } as CSSProperties}>
              {frame.label}
            </span>
          ))}
        </div>
      </div>
      <a className="scroll-hint" href="#advantages" aria-label="Прокрутити до переваг">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
