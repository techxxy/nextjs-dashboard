import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function Logout() {
  return (
    <>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <div className="rounded-lg bg-opacity-80 p-px  shadow-lg dark:bg-vc-border-gradient ">
          <div className="flex justify-between rounded-lg dark:bg-black  dark:bg-none">
            <button
              className="flex h-[48px] w-full grow 
    items-center justify-center gap-2 rounded-md p-3 text-sm font-medium duration-500 hover:bg-cyan-800 hover:text-white  hover:dark:bg-transparent hover:dark:text-primary lg:flex-none lg:justify-start lg:p-2 lg:px-6"
            >
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Logout</div>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
