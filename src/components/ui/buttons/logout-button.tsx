import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function LogoutButton({
  className,
}: {
  className?: string;
}) { return (
    <>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button
          className={`${className} flex grow
    items-center justify-center gap-2 rounded-md text-sm font-medium duration-500 hover:bg-cyan-800 hover:text-white  hover:dark:bg-transparent hover:dark:text-amber-500 lg:flex-none lg:justify-start`
  } >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Logout</div>
        </button>
      </form>
    </>
  );
}
