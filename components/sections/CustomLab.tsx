import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const specifications = ["Частота та робоча смуга", "Тип поляризації", "Конектор і геометрія корпусу", "Показники готового прототипу"];

export function CustomLab() {
  return (
    <section className="custom-section" id="custom">
      <div className="container custom-grid">
        <Reveal className="custom-copy">
          <span className="eyebrow">Custom Lab</span><h2>Антена під конкретне технічне завдання</h2>
          <p>Коли серійної конфігурації недостатньо, ми починаємо з ваших параметрів: частоти, обладнання, дальності та умов експлуатації.</p>
          <div className="spec-list">{specifications.map((item) => <span key={item}><Check size={16} />{item}</span>)}</div>
          <a className="button button-primary" href="#contacts">Обговорити технічне завдання <ArrowRight size={17} /></a>
        </Reveal>
        <Reveal className="frequency-panel" delay={120}>
          <div className="panel-header"><span>FREQUENCY RESPONSE</span><span className="panel-status"><i />LIVE MODEL</span></div>
          <div className="frequency-value">5.800 <small>GHz</small></div>
          <div className="chart-area" aria-hidden="true"><span className="chart-grid" />
            <svg viewBox="0 0 620 240" preserveAspectRatio="none"><path className="chart-glow" d="M0 45 C100 52 130 58 205 65 C272 72 285 208 336 210 C390 211 397 78 455 66 C515 54 552 48 620 45" /><path className="chart-line" d="M0 45 C100 52 130 58 205 65 C272 72 285 208 336 210 C390 211 397 78 455 66 C515 54 552 48 620 45" /></svg>
            <span className="chart-marker"><i />-24.8 dB</span>
          </div>
          <div className="panel-metrics"><div><span>VSWR</span><strong>1.13</strong></div><div><span>BANDWIDTH</span><strong>118 MHz</strong></div><div><span>IMPEDANCE</span><strong>49.7 Ω</strong></div></div>
        </Reveal>
      </div>
    </section>
  );
}
