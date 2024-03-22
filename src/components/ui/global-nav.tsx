'use client';

import { menus, type Item } from '@/lib/menus'
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import clsx from 'clsx';
import { useState } from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export function GlobalNav() {
  
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="flex h-full flex-col px-3 py-4 lg:px-2 relative">

      <div className="rounded-md absolute w-full top-4 z-10 mr-2 flex flex-col border-b border-gray-800 bg-black lg:bottom-4 lg:z-auto lg:w-40 lg:border-b-0 lg:border-r lg:border-gray-800">
        <div className="mb-0 flex h-20 items-end justify-start rounded-md bg-blue-400 p-4 lg:h-40">
          <Link
            href="/"
            className="group flex items-center gap-x-2.5"
            onClick={close}
          >
           <h3 className="font-semibold tracking-wide text-white group-hover:text-gray-200">
              Fire up Korean Alphabet
           </h3>
          </Link>

          <button
          type="button"
          className="flex h-14 items-center gap-x-2 px-4 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="font-medium text-white group-hover:text-gray-200">
            Menu
          </div>
          {isOpen ? (
            <RiCloseFill className="block w-6 text-gray-50" />
          ) : (
            <RiMenu2Fill className="block w-6 text-gray-50" />
          )}
        </button>



        </div>



        <div className={clsx('overflow-y-auto lg:static lg:block', {
            '': isOpen,
            hidden: !isOpen,
          })}

        >
          <nav className="space-y-6 px-2 pb-24 pt-5">
            {menus.map((section) => {
              return (
                <div key={section.name}>
                  <div className="mb-2 px-3 text-base font-semibold uppercase tracking-wider text-gray-400/80">
                    <div>{section.name}</div>
                  </div>
                  
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <GlobalNavItem key={item.slug} item={item} close={close} />
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
  {/*         <Byline className="absolute hidden sm:block" /> */}

{/*         <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 lg:flex-none lg:justify-start lg:p-2 lg:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}




        </div>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-base hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
