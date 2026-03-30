"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';
import MegaMenuPanel from './MegaMenuPanel';


const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu || item.megaMenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive = path === item.href;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href} className={`text-base flex py-1.75 font-normal hover:bg-black hover:text-white dark:hover:bg-white hover:dark:text-black rounded-full px-4 text-black dark:text-white ${isActive ? 'bg-black text-white dark:bg-white dark:text-black!' : ''}`}>
        {item.label}
        {(item.submenu || item.megaMenu) && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>

      {submenuOpen && item.megaMenu && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 z-50 w-[min(56rem,calc(100vw-2rem))]">
          <MegaMenuPanel variant="desktop" config={item.megaMenu} />
        </div>
      )}

      {submenuOpen && item.submenu && !item.megaMenu && (
        <div
          className={`absolute py-2 left-0 mt-0.5 top-8 w-60 bg-white dark:bg-darklight shadow-lg dark:shadow-dark-md rounded-lg `}
          data-aos="fade-up"
          data-aos-duration="400"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-[15px]  ${
                path ===  subItem.href
                  ? "bg-black text-white dark:bg-white dark:text-black!"
                  : "text-black hover:bg-gray-200 dark:hover:bg-midnight_text dark:text-white hover:text-dark dark:hover:text-white"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
