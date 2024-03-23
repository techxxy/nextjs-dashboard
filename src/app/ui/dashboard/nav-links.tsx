'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Schnuppern', href: '/schnuppern'},
  { name: 'Vocal', href: '/vowel'},
  { name: 'Keyboard Example', href: '/alphabets'},
  { name: 'PressCountAPI', href: '/sample'},
  { name: 'Home', href: '/alphabets'},
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 lg:flex-none lg:justify-start lg:p-2 lg:px-6",
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
            )}
            >
            <p className="md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
