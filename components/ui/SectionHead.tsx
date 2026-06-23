import { Reveal } from "./Reveal";

type SectionHeadProps = { eyebrow: string; title: string; text?: string };

export function SectionHead({ eyebrow, title, text }: SectionHeadProps) {
  return (
    <Reveal className="section-head">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
