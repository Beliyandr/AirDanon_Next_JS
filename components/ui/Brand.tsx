import { Radio } from "lucide-react";

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="AirDanon, на начало страницы">
      <span className="brand-mark" aria-hidden="true"><Radio size={20} strokeWidth={1.8} /></span>
      <span>AIRDANON</span>
    </a>
  );
}
