import type { Partner } from "@/types/site";
import brigade42 from "@/public/images/partners/42-brigade.webp";
import brigade53 from "@/public/images/partners/53-brigade.webp";
import brigade59 from "@/public/images/partners/59-brigade.webp";
import brigade81 from "@/public/images/partners/81-brigade.webp";
import brigade93 from "@/public/images/partners/93-brigade.webp";
import csoSbu from "@/public/images/partners/cso-sbu.webp";
import sof from "@/public/images/partners/sof.webp";
import signum from "@/public/images/partners/signum.webp";

export const partners: Partner[] = [
  { name: "42-га окрема механізована бригада", logo: brigade42 },
  { name: "53-тя окрема механізована бригада", logo: brigade53 },
  { name: "59-та окрема штурмова бригада", logo: brigade59 },
  { name: "81-ша окрема аеромобільна бригада", logo: brigade81 },
  { name: "93-тя окрема механізована бригада", logo: brigade93 },
  { name: "Центр спеціальних операцій СБУ", logo: csoSbu },
  { name: "Сили спеціальних операцій ЗСУ", logo: sof },
  { name: "SIGNUM", logo: signum },
];
