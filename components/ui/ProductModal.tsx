"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import { Check, ExternalLink, MessageCircle, ShoppingBag, X } from "lucide-react";
import type { Product } from "@/types/site";
import { AntennaVisual } from "@/components/ui/AntennaVisual";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: ProductModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="product-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}>
      <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Закрити інформацію про товар"><X size={20} /></button>
        <div className="modal-product-visual">
          {product.image ? <Image src={product.image} alt={product.title} fill sizes="(max-width: 700px) 100vw, 480px" className="modal-product-image" /> : <AntennaVisual color={product.color} />}
          <span className="modal-band">{product.band}</span>
        </div>
        <div className="modal-product-content">
          <div className="modal-title-row"><div><span className="eyebrow">{product.type}</span><h2 id={titleId}>{product.title}</h2></div>{product.price && <strong className="modal-price">{product.price}</strong>}</div>
          <p className="modal-description">{product.description}</p>
          <dl className="modal-specs">{product.specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
          <div className="modal-benefits">{product.benefits.map((benefit) => <span key={benefit}><Check size={15} />{benefit}</span>)}</div>
          <div className="modal-actions">
            {product.purchaseUrl ? (
              <a className="button button-primary" href={product.purchaseUrl} target="_blank" rel="noreferrer"><ShoppingBag size={18} />Перейти до покупки на Prom.ua <ExternalLink size={15} /></a>
            ) : (
              <a className="button button-primary" href="#contacts" onClick={onClose}><MessageCircle size={18} />Уточнити конфігурацію</a>
            )}
            <button className="button button-ghost" type="button" onClick={onClose}>Продовжити перегляд</button>
          </div>
        </div>
      </div>
    </div>
  );
}
