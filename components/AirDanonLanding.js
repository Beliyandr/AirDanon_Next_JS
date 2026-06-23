"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  CircuitBoard,
  Gauge,
  Menu,
  MessageCircle,
  Radio,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  TestTubeDiagonal,
  Waves,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const advantages = [
  {
    icon: Activity,
    number: "01",
    title: "Ідеальний КСХ (VSWR)",
    text: "Кожна антена проходить індивідуальне тестування на векторному аналізаторі кіл. Жодного випадкового результату.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Стійкість до падінь",
    text: "Міцні корпуси з точного 3D-друку захищають елементи антени під час жорстких посадок і польової експлуатації.",
  },
  {
    icon: SlidersHorizontal,
    number: "03",
    title: "Кастомні частоти",
    text: "Моделюємо й налаштовуємо антену під конкретну частоту, обладнання та сценарій використання.",
  },
];

const products = [
  {
    band: "5.8 ГГц",
    type: "Cloverleaf",
    title: "ADN Clover 5.8",
    meta: ["RHCP / LHCP", "SMA / RP-SMA", "до 1.3 VSWR"],
    color: "orange",
  },
  {
    band: "1.2–1.3 ГГц",
    type: "Long Range",
    title: "ADN Range 1.2",
    meta: ["Кругова поляризація", "Посилений корпус", "кастомний конектор"],
    color: "blue",
  },
  {
    band: "Під ваше ТЗ",
    type: "Custom Lab",
    title: "ADN Custom",
    meta: ["Розрахунок частоти", "Прототипування", "Звіт вимірювань"],
    color: "silver",
  },
];

const testSteps = [
  [CircuitBoard, "Моделювання", "Розраховуємо геометрію випромінювача під задану частоту й умови."],
  [Wrench, "Збірка", "Фіксуємо параметри конструкції та збираємо виріб із контрольованими допусками."],
  [Gauge, "Вимірювання", "Перевіряємо КСХ, резонанс і робочий діапазон на аналізаторі кіл."],
  [Check, "Фінальний контроль", "Маркуємо перевірену антену та фіксуємо її фактичні показники."],
];

const useCases = [
  [Radio, "FPV відеозв’язок", "Стабільне зображення на стандартних і нестандартних частотах."],
  [Target, "Далекі дистанції", "Конфігурації для польотів, де запас лінку має вирішальне значення."],
  [Zap, "Польова експлуатація", "Корпуси та з’єднання, розраховані на реальне навантаження."],
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Radio size={20} strokeWidth={1.8} />
    </span>
  );
}

function AntennaVisual({ color }) {
  return (
    <div className={`antenna-visual antenna-${color}`} aria-hidden="true">
      <span className="antenna-ring ring-a" />
      <span className="antenna-ring ring-b" />
      <span className="antenna-ring ring-c" />
      <span className="antenna-core" />
      <span className="antenna-stem" />
      <span className="antenna-base" />
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.14 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHead({ eyebrow, title, text }) {
  return (
    <Reveal className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export default function AirDanonLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="AirDanon, на початок сторінки">
            <BrandMark />
            <span>AIRDANON</span>
          </a>

          <nav className="desktop-nav" aria-label="Основна навігація">
            <a href="#advantages">Переваги</a>
            <a href="#catalog">Каталог</a>
            <a href="#testing">Контроль якості</a>
            <a href="#contacts">Контакти</a>
          </nav>

          <a className="button button-outline header-cta" href="#contacts">
            Зв’язатися <ArrowRight size={16} />
          </a>

          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <nav aria-label="Мобільна навігація">
            <a href="#advantages" onClick={closeMenu}>Переваги</a>
            <a href="#catalog" onClick={closeMenu}>Каталог</a>
            <a href="#testing" onClick={closeMenu}>Контроль якості</a>
            <a href="#contacts" onClick={closeMenu}>Контакти</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="signal-path" aria-hidden="true">
          <span className="signal-pulse" />
        </div>

        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="live-dot" />
              Українське виробництво
            </div>
            <h1>Надійний сигнал.<br />Точна інженерія.</h1>
            <p className="hero-lead">
              FPV антени з індивідуальним моделюванням, стабільним відеозв’язком
              на кастомних частотах і перевіркою кожного виробу на аналізаторі кіл.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacts">
                <Send size={18} /> Написати в Telegram
              </a>
              <a className="button button-ghost" href="#catalog">
                Переглянути антени <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-status" aria-label="Ключові показники">
            <div><strong>100%</strong><span>ручний контроль</span></div>
            <div><strong>VSWR</strong><span>звіт для кожної антени</span></div>
            <div><strong>Custom</strong><span>частота під ваше ТЗ</span></div>
          </div>
        </div>

        <a className="scroll-hint" href="#advantages" aria-label="Прокрутити до переваг">
          <ArrowDown size={18} />
        </a>
      </section>

      <section className="section advantages-section" id="advantages">
        <div className="container">
          <SectionHead
            eyebrow="Інженерний підхід"
            title="Чому обирають антени AirDanon"
            text="Ми контролюємо не лише конструкцію, а й фактичний результат кожної готової антени."
          />
          <div className="advantage-grid">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="advantage-card" delay={index * 90} key={item.title}>
                  <span className="card-number">{item.number}</span>
                  <div className="feature-icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="card-line" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section catalog-section" id="catalog">
        <div className="container">
          <SectionHead
            eyebrow="Каталог"
            title="Антени для реальних задач"
            text="Базові конфігурації можна адаптувати за частотою, поляризацією, конектором і типом корпусу."
          />
          <div className="product-grid">
            {products.map((product, index) => (
              <Reveal className="product-card" delay={index * 90} key={product.title}>
                <div className="product-topline">
                  <span>{product.band}</span>
                  <span>{product.type}</span>
                </div>
                <AntennaVisual color={product.color} />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <ul>
                    {product.meta.map((meta) => <li key={meta}>{meta}</li>)}
                  </ul>
                  <a href="#contacts">Запросити конфігурацію <ArrowRight size={16} /></a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="custom-section" id="custom">
        <div className="container custom-grid">
          <Reveal className="custom-copy">
            <span className="eyebrow">Custom Lab</span>
            <h2>Антена під конкретне технічне завдання</h2>
            <p>
              Коли серійної конфігурації недостатньо, ми починаємо з ваших параметрів:
              частоти, обладнання, дальності та умов експлуатації.
            </p>
            <div className="spec-list">
              <span><Check size={16} /> Частота та робоча смуга</span>
              <span><Check size={16} /> Тип поляризації</span>
              <span><Check size={16} /> Конектор і геометрія корпусу</span>
              <span><Check size={16} /> Показники готового прототипу</span>
            </div>
            <a className="button button-primary" href="#contacts">
              Обговорити технічне завдання <ArrowRight size={17} />
            </a>
          </Reveal>

          <Reveal className="frequency-panel" delay={120}>
            <div className="panel-header">
              <span>FREQUENCY RESPONSE</span>
              <span className="panel-status"><i /> LIVE MODEL</span>
            </div>
            <div className="frequency-value">5.800 <small>GHz</small></div>
            <div className="chart-area" aria-hidden="true">
              <span className="chart-grid" />
              <svg viewBox="0 0 620 240" preserveAspectRatio="none">
                <path className="chart-glow" d="M0 45 C100 52 130 58 205 65 C272 72 285 208 336 210 C390 211 397 78 455 66 C515 54 552 48 620 45" />
                <path className="chart-line" d="M0 45 C100 52 130 58 205 65 C272 72 285 208 336 210 C390 211 397 78 455 66 C515 54 552 48 620 45" />
              </svg>
              <span className="chart-marker"><i />-24.8 dB</span>
            </div>
            <div className="panel-metrics">
              <div><span>VSWR</span><strong>1.13</strong></div>
              <div><span>BANDWIDTH</span><strong>118 MHz</strong></div>
              <div><span>IMPEDANCE</span><strong>49.7 Ω</strong></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section testing-section" id="testing">
        <div className="container">
          <SectionHead
            eyebrow="Контроль якості"
            title="Шлях кожної антени"
            text="Чотири послідовні етапи перетворюють розрахунок на передбачуваний робочий інструмент."
          />
          <div className="timeline">
            {testSteps.map(([Icon, title, text], index) => (
              <Reveal className="timeline-step" delay={index * 80} key={title}>
                <div className="timeline-icon"><Icon /></div>
                <span className="timeline-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section uses-section">
        <div className="container uses-grid">
          <Reveal className="uses-intro">
            <span className="eyebrow">Сценарії застосування</span>
            <h2>Зв’язок, якому можна довіряти в роботі</h2>
            <p>Параметри антени визначаються задачею, а не універсальною етикеткою на коробці.</p>
          </Reveal>
          <div className="uses-list">
            {useCases.map(([Icon, title, text], index) => (
              <Reveal className="use-row" delay={index * 80} key={title}>
                <div className="use-icon"><Icon /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight className="use-arrow" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacts">
        <div className="container contact-grid">
          <Reveal className="contact-copy">
            <span className="eyebrow">Швидкий запит</span>
            <h2>Розкажіть, який сигнал вам потрібен</h2>
            <p>
              Вкажіть частоту, обладнання та задачу. Ми зорієнтуємо щодо конфігурації
              й поставимо лише ті уточнення, які справді впливають на результат.
            </p>
            <div className="contact-tags">
              <span><Sparkles size={15} /> Відповідь інженера</span>
              <span><TestTubeDiagonal size={15} /> Вимірювання виробу</span>
            </div>
          </Reveal>

          <Reveal className="contact-panel" delay={100}>
            <div className="contact-panel-icon"><MessageCircle /></div>
            <h3>Написати напряму</h3>
            <p>Найшвидший спосіб обговорити частоту, конектор і кількість.</p>
            <a className="button button-primary button-wide" href="https://t.me/" target="_blank" rel="noreferrer">
              <Send size={18} /> Відкрити Telegram
            </a>
            <div className="social-row">
              <a href="#" aria-label="Instagram"><Camera size={19} /></a>
              <a href="#" aria-label="TikTok"><Waves size={19} /></a>
              <span>Посилання підключимо перед запуском</span>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#top"><BrandMark /><span>AIRDANON</span></a>
          <p>FPV антени українського виробництва</p>
          <span>© {new Date().getFullYear()} AirDanon</span>
        </div>
      </footer>
    </main>
  );
}
