"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { products } from "@/data/site";
import { AntennaVisual } from "@/components/ui/AntennaVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { ProductModal } from "@/components/ui/ProductModal";
import type { Product } from "@/types/site";

export function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const closeModal = useCallback(() => setSelectedProduct(null), []);

  return (
    <section className="section catalog-section" id="catalog">
      <div className="container">
        <SectionHead eyebrow="Каталог" title="Антени для реальних завдань" text="Базові конфігурації можна адаптувати за частотою, поляризацією, конектором і типом корпусу." />
        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal className="product-card" delay={index * 90} key={product.title}>
              <button className="product-card-action" type="button" onClick={() => setSelectedProduct(product)} aria-label={`Докладніше про ${product.title}`}>
                <div className="product-topline"><span>{product.band}</span><span>{product.type}</span></div>
                {product.image ? <div className="product-photo"><Image src={product.image} alt={product.title} fill sizes="(max-width: 900px) 100vw, 430px" /></div> : <AntennaVisual color={product.color} />}
                <div className="product-info"><h3>{product.title}</h3><ul>{product.meta.map((item) => <li key={item}>{item}</li>)}</ul>
                  <span className="product-details-link">Переглянути характеристики <ArrowRight size={16} /></span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </section>
  );
}
