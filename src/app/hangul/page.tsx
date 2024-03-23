import styles from '@/app/ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { menus } from '@/components/navigation/menus';

export default function Page() {
  return (
    <main className='space-x-2'>
      <div className="space-y-8">
        <h1 className="text-xl font-medium dark:text-gray-300">Examples</h1>

        <div className="space-y-10 dark:text-white">
          {menus.map((section) => {
            return (
              <div key={section.name} className="space-y-5">
                <div className="text-sm font-semibold uppercase tracking-wider dark:text-gray-400">
                  {section.name}
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  {section.items.map((item) => {
                    return (
                      <Link
                        href={`/${item.slug}`}
                        key={item.name}
                        className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      >
                        <div className="font-medium text-gray-200 group-hover:text-gray-50">
                          {item.name}
                        </div>

                        {item.description ? (
                          <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                            {item.description}
                          </div>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center">
        <Link
          href="/login"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Login</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
        <Link
          href="/signup"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>

    </main>
  );
}
