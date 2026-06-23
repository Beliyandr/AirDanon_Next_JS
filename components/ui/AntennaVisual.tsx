import type { Product } from "@/types/site";

export function AntennaVisual({ color }: Pick<Product, "color">) {
  return (
    <div className={`antenna-visual antenna-${color}`} aria-hidden="true">
      <span className="antenna-ring ring-a" /><span className="antenna-ring ring-b" />
      <span className="antenna-ring ring-c" /><span className="antenna-core" />
      <span className="antenna-stem" /><span className="antenna-base" />
    </div>
  );
}
