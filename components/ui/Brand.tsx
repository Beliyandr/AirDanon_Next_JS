import Image from "next/image";
import logoMark from "@/public/images/airdanon-mark.png";

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="AirDanon, на початок сторінки">
      <span className="brand-mark" aria-hidden="true">
        <Image src={logoMark} alt="" priority />
      </span>
      <span>AIRDANON</span>
    </a>
  );
}
