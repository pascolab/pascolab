import { getImgPath } from "@/utils/image";

export type Brand = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const brands: Brand[] = [
  {
    src: getImgPath("/images/brands/1.svg"),
    alt: "Aether",
    width: 210,
    height: 70,
  },
  {
    src: getImgPath("/images/brands/2.svg"),
    alt: "Nexus",
    width: 160,
    height: 50,
  },
  {
    src: getImgPath("/images/brands/3.svg"),
    alt: "Prism",
    width: 150,
    height: 50,
  },
  {
    src: getImgPath("/images/brands/4.svg"),
    alt: "Vela",
    width: 140,
    height: 50,
  },
  {
    src: getImgPath("/images/brands/5.svg"),
    alt: "Kova",
    width: 140,
    height: 50,
  },
  {
    src: getImgPath("/images/brands/6.svg"),
    alt: "Orbit",
    width: 140,
    height: 50,
  },
  {
    src: getImgPath("/images/brands/7.svg"),
    alt: "Luma",
    width: 140,
    height: 50,
  },
  {
    src: getImgPath("/images/brands/8.svg"),
    alt: "Luma",
    width: 140,
    height: 50,
  },
  {
    src: getImgPath("/images/brands/9.svg"),
    alt: "Luma",
    width: 140,
    height: 50,
  },
  {
    src: getImgPath("/images/brands/10.svg"),
    alt: "Luma",
    width: 140,
    height: 50,
  },
];
