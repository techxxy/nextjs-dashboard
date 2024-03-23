import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { GlobalNav } from '@/components/ui/global-nav';
import LogoutButton from '@/components/ui/logout-button';
import GradientBorder from '@/components/ui/gradient-border';


export default function SideNav() {



  return (
    <div className="lg:flew-col lg:overflow-y-auto flex h-full flex-row">
      <div className="flex grow flex-row justify-between space-x-2 p-3.5 lg:h-full lg:flex-col lg:space-x-0 lg:space-y-2">

      <GlobalNav />

      <GradientBorder className="" fullMode='h-full'>
teste
     </GradientBorder>

        <div className="hidden h-auto w-full grow rounded-md bg-transparent border-2 md:block">filling a gap box</div>
        <LogoutButton />
       
      </div>
    </div>
  );
}
