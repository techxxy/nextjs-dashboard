import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function NakidLinkButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${className} flex h-9 items-center rounded-lg px-4 text-base font-medium text-basicR underline transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-text`}
      aria-disabled={href === null ? 'true' : 'false'}
    >
      <span>{children}</span>
    </Link>
  );
}

