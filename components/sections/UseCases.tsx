import { ArrowRight } from "lucide-react";
import { useCases } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function UseCases() {
  return (
    <section className="section uses-section"><div className="container uses-grid">
      <Reveal className="uses-intro"><span className="eyebrow">Сценарії застосування</span><h2>Зв’язок, якому можна довіряти в роботі</h2><p>Параметри антени визначаються завданням, а не універсальною етикеткою на коробці.</p></Reveal>
      <div className="uses-list">{useCases.map(({ icon: Icon, title, text }, index) => (
        <Reveal className="use-row" delay={index * 80} key={title}><div className="use-icon"><Icon /></div><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="use-arrow" /></Reveal>
      ))}</div>
    </div></section>
  );
}
