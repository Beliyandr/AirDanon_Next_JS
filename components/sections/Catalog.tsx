import { ArrowRight } from "lucide-react";
import { products } from "@/data/site";
import { AntennaVisual } from "@/components/ui/AntennaVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Catalog() {
  return (
    <section className="section catalog-section" id="catalog">
      <div className="container">
        <SectionHead eyebrow="Каталог" title="Антенны для реальных задач" text="Базовые конфигурации можно адаптировать по частоте, поляризации, коннектору и типу корпуса." />
        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal className="product-card" delay={index * 90} key={product.title}>
              <div className="product-topline"><span>{product.band}</span><span>{product.type}</span></div>
              <AntennaVisual color={product.color} />
              <div className="product-info"><h3>{product.title}</h3><ul>{product.meta.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href="#contacts">Запросить конфигурацию <ArrowRight size={16} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
