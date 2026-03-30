import { getImgPath } from "@/utils/image";

export type Brand = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const brands: Brand[] = [
  {
    src: getImgPath("/images/brands/aether.svg"),
    alt: "Aether",
    width: 140,
    height: 40,
  },
  {
    src: getImgPath("/images/brands/nexus.svg"),
    alt: "Nexus",
    width: 130,
    height: 40,
  },
  {
    src: getImgPath("/images/brands/prism.svg"),
    alt: "Prism",
    width: 120,
    height: 40,
  },
  {
    src: getImgPath("/images/brands/vela.svg"),
    alt: "Vela",
    width: 110,
    height: 40,
  },
  {
    src: getImgPath("/images/brands/kova.svg"),
    alt: "Kova",
    width: 110,
    height: 40,
  },
  {
    src: getImgPath("/images/brands/orbit.svg"),
    alt: "Orbit",
    width: 115,
    height: 40,
  },
  {
    src: getImgPath("/images/brands/luma.svg"),
    alt: "Luma",
    width: 115,
    height: 40,
  },
];
