import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '../ui/dashboard/sidenav';
import { AddressBar } from '@/components/ui/address-bar';
import { GlobalNav } from '@/components/ui/global-nav';
import ThemeSwitcher from '@/components/theme/theme-switcher';
import Provider from '@/components/theme/provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex h-screen w-screen flex-col lg:flex-row lg:overflow-hidden">
        <div className="w-full flex-none lg:w-72">
          <SideNav />
        </div>

        <div className="flex-grow px-2 lg:overflow-y-auto lg:p-4">
          <div className="mt-4 rounded-lg p-px shadow-lg dark:bg-vc-border-gradient dark:shadow-black/20">
            <div className="rounded-lg p-3.5 dark:bg-black dark:bg-none lg:p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
