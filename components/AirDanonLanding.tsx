import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Advantages } from "@/components/sections/Advantages";
import { Catalog } from "@/components/sections/Catalog";
import { Contact } from "@/components/sections/Contact";
import { CustomLab } from "@/components/sections/CustomLab";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Testing } from "@/components/sections/Testing";
import { UseCases } from "@/components/sections/UseCases";

export function AirDanonLanding() {
  return <main><Header /><Hero /><Advantages /><Catalog /><CustomLab /><Testing /><UseCases /><Partners /><Contact /><Footer /></main>;
}
