'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from '../theme/theme-switcher';
import GradientBorder from '../ui/gradient-border';
import LinkButton from '../ui/buttons/link-button';
import NakidLinkButton from '../ui/buttons/link-button-nakid';
import Logout from '../ui/buttons/logout-button';
import { AddressBar } from '../ui/address-bar';

export default function NavBar({ className, email}: { className?: string; email: string | null | undefined}) {
 
  console.log('email',email );
  return (

    <div className={`${className}`}>
      <GradientBorder>
        <div className="flex flex-row items-center justify-between p-2">
          <div className="ml-2 flex flex-row items-center">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="3 3 21 21"
              >
                <path
                  fill="#e61700"
                  d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"
                />
              </svg>
            </Link>
            <AddressBar className="hidden md:flex" />
            <div>{email}</div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <NakidLinkButton href="/login" className="mr-3">
              {' '}
              Login{' '}
            </NakidLinkButton>
            <LinkButton href="/signup" className="mr-6">
              Sign Up
            </LinkButton>
             <Logout className="mr-6 h-9 px-2" />

            <ThemeSwitcher className="mr-6" />
          </div>
        </div>
      </GradientBorder>
    </div>

  );
}


