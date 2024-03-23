import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from '../ui/dashboard/sidenav';
import { AddressBar } from '@/components/ui/address-bar';
import { GlobalNav } from '@/components/ui/global-nav';
import ThemeSwitcher from '@/components/theme/thema-switcher';
import Provider from '@/components/theme/provider';


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>

      </body>
    </html>
  );
}
