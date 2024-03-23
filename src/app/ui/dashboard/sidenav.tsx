import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { GlobalNav } from '@/components/ui/global-nav';
import Logout from '@/services/sign-out';


export default function SideNav() {
  return (
    <div className="lg:flew-col lg:overflow-y-auto flex h-full flex-row">
      <div className="flex h-40 grow flex-row justify-between space-x-2 p-3.5 lg:h-full lg:flex-col lg:space-x-0 lg:space-y-2">
        <div className="flex w-full flex-row rounded-lg bg-opacity-80 p-px shadow-lg dark:bg-vc-border-gradient lg:h-full lg:flex-col ">
          <div className="flex w-full flex-row justify-between rounded-lg dark:bg-black dark:bg-none lg:h-full lg:flex-col">
            <GlobalNav />
          </div>
        </div>

        <Logout />
       
      </div>
    </div>
  );
}
