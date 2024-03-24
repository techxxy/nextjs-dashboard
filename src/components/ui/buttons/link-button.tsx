import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LinkButton({
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
      className={`${className} flex h-9 items-center rounded-md bg-primary pl-3 text-sm font-medium text-basic transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-text`}
      aria-disabled={href === null ? 'true' : 'false'}
    >
      <span>{children}</span>
      <ArrowRightIcon className="ml-3 mr-2 h-4 w-4" />
    </Link>
  );
}

