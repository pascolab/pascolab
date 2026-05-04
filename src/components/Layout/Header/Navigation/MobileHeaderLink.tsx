import { useState } from 'react';
import Link from 'next/link';
import { servicesPageData } from '@/app/api/data';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';
import MegaMenuPanel from './MegaMenuPanel';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState(
    servicesPageData[0]?.id ?? ''
  );

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();
  const isActive = path === item.href;

  if (item.panel === 'services') {
    const activeService =
      servicesPageData.find((section) => section.id === activeServiceId) ??
      servicesPageData[0];

    return (
      <div className="relative block w-full">
        <button
          type="button"
          onClick={handleToggle}
          className={`flex items-center justify-between w-full py-2 px-3 rounded-sm focus:outline-hidden ${isActive ? 'bg-primary text-white' : ''}`}
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

        {submenuOpen && activeService && (
          <div className="mt-1.5 overflow-hidden border border-border bg-muted/20 rounded-sm">
            <div className="space-y-1 border-b border-border p-2">
              {servicesPageData.map((section) => {
                const isSectionActive = section.id === activeService.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveServiceId(section.id)}
                    className={`flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm font-medium transition-colors ${isSectionActive
                      ? 'bg-primary text-white'
                      : 'text-foreground/80 hover:bg-primary hover:text-white'
                      }`}
                  >
                    <span>{section.title}</span>
                    {isSectionActive ? (
                      <svg className='rotate-90' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 18l6-6-6-6" />
                      </svg>
                    ) : (
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 18l6-6-6-6" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="space-y-3 p-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  What we do
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {activeService.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {activeService.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {activeService.whatWeDo.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="group flex gap-3 px-2 py-3.5 border-b border-border transition-colors hover:bg-background"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0  transition-colors bg-primary" />
                    <span>
                      <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </span>
                      {/* <span className="block text-xs text-muted-foreground leading-relaxed">
                        {category.description}
                      </span> */}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 border-t border-border pt-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-primary hover:underline"
                >
                  View all services
                </Link>
                <Link
                  href={`/services/${activeService.id}`}
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-primary hover:underline"
                >
                  All {activeService.title} services
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (item.megaMenu) {
      return (
      <div className="relative block w-full">
        <button
          type="button"
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
