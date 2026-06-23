import type { LucideIcon } from "lucide-react";

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
};

export type FeatureStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};
