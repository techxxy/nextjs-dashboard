import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import SideNav from "./ui/dashboard/sidenav";

export const metadata: Metadata = {
  title: {
    template: 'Techxxy%s | Fire up Korean Alphabets',
    default: 'Fire up Korean Alphabets',
  },
  description: 'The website for Korean Alphabet lerner',
  metadataBase: new URL('https://techxxy.github.io/'),
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
        {children}
      </body>
    </html>
  );
}