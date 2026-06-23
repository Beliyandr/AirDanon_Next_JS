import type { CSSProperties } from "react";
import { ArrowDown, ChevronRight, Send } from "lucide-react";

export function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const mediaStyle = { backgroundImage: `url("${basePath}/images/hero-fpv.png")` } as CSSProperties;

  return (
    <section className="hero" id="top">
      <div className="hero-media" style={mediaStyle} aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="signal-path" aria-hidden="true"><span className="signal-pulse" /></div>
      <div className="container hero-inner relative z-2 flex h-full items-center">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="live-dot" />Украинское производство</div>
          <h1>Надежный сигнал.<br />Точная инженерия.</h1>
          <p className="hero-lead">FPV антенны с индивидуальным моделированием, стабильной видеосвязью на кастомных частотах и проверкой каждого изделия на анализаторе цепей.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacts"><Send size={18} />Написать в Telegram</a>
            <a className="button button-ghost" href="#catalog">Посмотреть антенны <ChevronRight size={18} /></a>
          </div>
        </div>
        <div className="hero-status" aria-label="Ключевые показатели">
          <div><strong>100%</strong><span>ручной контроль</span></div>
          <div><strong>VSWR</strong><span>отчет для каждой антенны</span></div>
          <div><strong>Custom</strong><span>частота под ваше ТЗ</span></div>
        </div>
      </div>
      <a className="scroll-hint" href="#advantages" aria-label="Прокрутить к преимуществам"><ArrowDown size={18} /></a>
    </section>
  );
}
