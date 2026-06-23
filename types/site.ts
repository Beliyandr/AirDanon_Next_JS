import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type Advantage = {
  icon: LucideIcon;
  number: string;
  title: string;
  text: string;
};

export type Product = {
  band: string;
  type: string;
  title: string;
  meta: string[];
  color: "orange" | "blue" | "silver";
  description: string;
  specs: Array<{ label: string; value: string }>;
  benefits: string[];
  price?: string;
  image?: StaticImageData;
  purchaseUrl?: string;
};

export type Partner = {
  name: string;
  logo: StaticImageData;
};

export type FeatureStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};
