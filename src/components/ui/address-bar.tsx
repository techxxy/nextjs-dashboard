'use client';

import React, { Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';

function Params() {
  const searchParams = useSearchParams()!;

  return searchParams.toString().length !== 0 ? (
    <div className="px-2">
      <span>?</span>
      {Array.from(searchParams.entries()).map(([key, value], index) => {
        return (
          <React.Fragment key={key}>
            {index !== 0 ? <span>&</span> : null}
            <span className="px-1">
              <span
                key={key}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
              >
                {key}
              </span>
              <span>=</span>
              <span
                key={value}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-100"
              >
                {value}
              </span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  ) : null;
}

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-2 p-3.5 ">
      <div>
      <Image
      src="/images/flame.svg"
      width={24}
      height={24}
      alt="Flame logo"
    />

      </div>
      <div className="flex gap-x-1 text-sm font-medium">
        <div>
          <span className="px-2">Fire up Korean Alphabet</span>
        </div>
        {pathname ? (
          <>
            <span>/</span>
            {pathname
              .split('/')
              .slice(1)
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                    <span>
                      <span
                        key={segment}
                        className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-primary"
                      >
                        {segment}
                      </span>
                    </span>

                    <span>/</span>
                  </React.Fragment>
                );
              })}
          </>
        ) : null}

        <Suspense>
          <Params />
        </Suspense>
      </div>
    </div>
  );
}
