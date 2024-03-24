import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import GradientBorder from './gradient-border';

export default function LogoutButton() {
  return (
    <>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <GradientBorder>
          <button
            className="flex h-[48px] w-full grow 
    items-center justify-center gap-2 rounded-md p-3 text-sm font-medium duration-500 hover:bg-cyan-800 hover:text-white  hover:dark:bg-transparent hover:dark:text-amber-500 lg:flex-none lg:justify-start lg:p-2 lg:px-6"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Logout</div>
          </button>
        </GradientBorder>
      </form>
    </>
  );
}
