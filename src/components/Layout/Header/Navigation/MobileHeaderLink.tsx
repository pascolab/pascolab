import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';
import MegaMenuPanel from './MegaMenuPanel';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();
  const isActive = path === item.href;

    if (item.megaMenu) {
      return (    
      <div className="relative block w-full">
        <button
          onClick={handleToggle}
          className={`flex items-center justify-between w-full py-2 px-3 rounded-md focus:outline-hidden ${isActive ? 'bg-foreground! text-background! ' : ''}`}
        >
          <span>{item.label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-200 ${submenuOpen ? 'rotate-180' : ''}`}
          >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        </button>
        {submenuOpen && (
          <div className="px-3 pb-2">
            <MegaMenuPanel variant="mobile" config={item.megaMenu} />
          </div>
        )}
      </div>
    );
  }

  return (  
    <Link href={item.href} className="relative block w-full">
      <button
        onClick={item.submenu ? handleToggle : undefined}
          className={`flex items-center justify-between w-full py-2 px-3 rounded-md focus:outline-hidden ${isActive ? 'bg-foreground! text-background! ' : '  '}`}
      >
        <span>{item.label}</span>
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </button>
      {submenuOpen && item.submenu && (
        <div className="bg-muted p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link key={index} href={subItem.href} className="block py-2 text-foreground/90 hover:bg-foreground/10">
              <span>{subItem.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
};

export default MobileHeaderLink;
