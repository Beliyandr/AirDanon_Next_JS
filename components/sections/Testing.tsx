import { testSteps } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Testing() {
  return (
    <section className="section testing-section" id="testing"><div className="container">
      <SectionHead eyebrow="Контроль якості" title="Шлях кожної антени" text="Чотири послідовні етапи перетворюють розрахунок на передбачуваний робочий інструмент." />
      <div className="timeline">{testSteps.map(({ icon: Icon, title, text }, index) => (
        <Reveal className="timeline-step" delay={index * 80} key={title}><div className="timeline-icon"><Icon /></div><span className="timeline-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>
      ))}</div>
    </div></section>
  );
}
