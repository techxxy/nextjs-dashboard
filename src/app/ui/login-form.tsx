'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '../../components/ui/buttons/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/services/authenticate';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  if (errorMessage?.startsWith('EMAIL_NOT_VERIFIED')) {
    redirect(`/email/verify/send?email=${errorMessage.split(':')[1]}`);
  }

  return (
    <form action={dispatch} className="space-y-3">
        <div className="flex-1 rounded-lg px-6 pb-4 pt-8 border-4">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Please log in to continue.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 peer-focus:text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2   placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-primary" />
              </div>
            </div>
          </div>
          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
          <div className="">
            Don&apos;t have an account?&nbsp;
            <Link className="underline font-bold" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5" />
    </Button>
  );
}
