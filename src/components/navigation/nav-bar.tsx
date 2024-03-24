import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from '../theme/theme-switcher';
import GradientBorder from '../ui/gradient-border';
import LinkButton from '../ui/buttons/link-button';
import NakidLinkButton from '../ui/buttons/link-button-nakid';

export default function NavBar() {
  return (
    <GradientBorder>
      <div className="flex flex-row items-center justify-between p-2">
      <div className="ml-4" >
        <Link href="/">
          <Image
            src="/images/flame.svg"
            width={40}
            height={40}
            alt="Flame logo"
          />
        </Link>
        </div>
        <div className="flex flex-row items-center justify-between">
        <NakidLinkButton href='/login' className='mr-3'>
          Login
        </NakidLinkButton>
        <LinkButton href="/signup" className='mr-6'>Sign Up</LinkButton>
        <ThemeSwitcher className='mr-6'/>
        </div>
      </div>
    </GradientBorder>
  );
}
