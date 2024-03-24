'use client';

import { menus, type Item } from '@/components/navigation/menus';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { RiCloseFill, RiMenu2Fill } from 'react-icons/ri';
import clsx from 'clsx';
import { useState } from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="flex w-full lg:flex-col lg:h-full flex-row px-3 py-4 lg:px-2">
      <div className="justfy-between top-4 z-10 mr-2 flex w-full  flex-row rounded-lg lg:bottom-4 lg:z-auto lg:w-60 lg:flex-col">
        <div className="mb-0 flex h-20 items-end justify-start rounded-lg bg-transparent p-4 lg:h-20">
          <Link
            href="/"
            className="group flex items-center gap-x-2.5"
            onClick={close}
          >
            <h3 className="font-semibold tracking-wide text-primary group-hover:text-gray-200">
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

        <div
          className={clsx('overflow-y-auto lg:static lg:block', {
            '': isOpen,
            hidden: !isOpen,
          })}
        >
          <nav className="flex flex-row space-y-6 px-2 pb-24 pt-5 lg:flex-col">
            {menus.map((section) => {
              return (
                <div key={section.name} className="flex flex-row lg:flex-col">
                  <div className="mb-2 px-3 text-base font-semibold uppercase tracking-wider dark:text-gray-400/80">
                    <div>{section.name}</div>
                  </div>

                  <div className="flex flex-row space-y-1 lg:flex-col">
                    {section.items.map((item) => (
                      <GlobalNavItem
                        key={item.slug}
                        item={item}
                        close={close}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
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
        'block rounded-md px-3 py-2 text-base dark:hover:text-gray-300',
        {
          'hover:bg-gray-800 dark:text-gray-400': !isActive,
          'dark:text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
