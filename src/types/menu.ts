export type SubmenuItem = {
  label: string;
  href: string;
};

export type MegaMenuGridItem = {
  title: string;
  description: string;
  href?: string;
};

export type MegaMenuSection = {
  id: string;
  sidebarLabel: string;
  panelTitle: string;
  panelDescription: string;
  items: MegaMenuGridItem[];
  cta?: { label: string; href: string };
};

export type MegaMenuConfig = {
  sections: MegaMenuSection[];
};

export type HeaderItem = {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
  megaMenu?: MegaMenuConfig;
};