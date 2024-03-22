import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { GlobalNav } from '@/components/ui/global-nav';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 lg:px-2 ">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 lg:h-40"
        href="/"
      >
      </Link>


      <div className="flex grow flex-row justify-between space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
        <NavLinks />
        <GlobalNav />

       
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 lg:flex-none lg:justify-start lg:p-2 lg:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>

      </div>

    </div>
  );
}
