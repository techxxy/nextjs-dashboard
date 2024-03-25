"use client"
import { PowerIcon } from '@heroicons/react/24/outline';
import React from "react";
import { logout } from '@/services/auth';

export default function Logout({
  className,
}: {
  className?: string;
}) { return (
    <>
        <button
        type="submit"
        onClick={() => logout()}
          className={`${className} flex grow
    items-center justify-center gap-2 rounded-md text-sm font-medium duration-500 hover:bg-cyan-800 hover:text-white  hover:dark:bg-transparent hover:dark:text-amber-500 lg:flex-none lg:justify-start`
  } >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Logout</div>
        </button>
     </>
  );
}
