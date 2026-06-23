import { advantages } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Advantages() {
  return (
    <section className="section advantages-section" id="advantages">
      <div className="container">
        <SectionHead eyebrow="Інженерний підхід" title="Чому обирають антени AirDanon" text="Ми контролюємо не лише конструкцію, а й фактичний результат кожної готової антени." />
        <div className="advantage-grid">
          {advantages.map(({ icon: Icon, number, title, text }, index) => (
            <Reveal className="advantage-card" delay={index * 90} key={title}>
              <span className="card-number">{number}</span><div className="feature-icon"><Icon /></div>
              <h3>{title}</h3><p>{text}</p><span className="card-line" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
