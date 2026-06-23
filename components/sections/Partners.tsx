import Image from "next/image";
import { partners } from "@/data/partners";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Partners() {
  return (
    <section className="section partners-section" id="partners"><div className="container">
      <SectionHead eyebrow="Довіра в роботі" title="Партнери та підрозділи" text="Практичний досвід і постійний зворотний зв’язок допомагають створювати рішення для реальних умов експлуатації." />
      <div className="partners-grid">{partners.map((partner, index) => (
        <Reveal className="partner-item" delay={(index % 4) * 55} key={partner.name}>
          <div className="partner-logo"><Image src={partner.logo} alt="" sizes="96px" /></div>
          <span>{partner.name}</span>
        </Reveal>
      ))}</div>
    </div></section>
  );
}
