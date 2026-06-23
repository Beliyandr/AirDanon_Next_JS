import { ArrowRight } from "lucide-react";
import { useCases } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function UseCases() {
  return (
    <section className="section uses-section"><div className="container uses-grid">
      <Reveal className="uses-intro"><span className="eyebrow">Сценарии применения</span><h2>Связь, которой можно доверять в работе</h2><p>Параметры антенны определяются задачей, а не универсальной этикеткой на коробке.</p></Reveal>
      <div className="uses-list">{useCases.map(({ icon: Icon, title, text }, index) => (
        <Reveal className="use-row" delay={index * 80} key={title}><div className="use-icon"><Icon /></div><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="use-arrow" /></Reveal>
      ))}</div>
    </div></section>
  );
}
