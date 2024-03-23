import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import SideNav from './ui/dashboard/sidenav';
import { AddressBar } from '@/components/ui/address-bar';
import { GlobalNav } from '@/components/ui/global-nav';
import ThemeSwitcher from '@/components/theme/thema-switcher';
import Provider from '@/components/theme/provider';

export const metadata: Metadata = {
  title: {
    template: 'Techxxy%s | Fire up Korean Alphabet',
    default: 'Koreanisch Lernen',
  },
  description:
    'Spaß, Entspannung, Gestärkt: Verwöhnen Sie sich mit einer hochwertigen koreanischen Lernplattform! Diese Webseite wurde für deutschsprachige Nutzer entwickelt, die Koreanisch als Anfänger lernen möchten. Wir verstehen, dass das Erlernen einer Fremdsprache eine Herausforderung darstellt, insbesondere für Erwachsene, die möglicherweise nicht die Zeit haben, wie Schüler viel Zeit für den Lernprozess aufzuwenden. Unsere Webseite bietet eine benutzerfreundliche und unterhaltsame Lernumgebung, die speziell darauf abzielt, deutschsprachigen Benutzern dabei zu helfen, Koreanisch effektiv und effizient zu erlernen. Tauchen Sie ein in eine Welt des Sprachenlernens, die auf Ihre Bedürfnisse zugeschnitten ist',
  metadataBase: new URL('https://techxxy.github.io/'),
  icons: {
    icon:"/images/favicon.svg"
  },
  openGraph: {
    title: 'Fire up Korean Alphabet',
    description:
      'Spaß, Entspannung, Gestärkt: Verwöhnen Sie sich mit einer hochwertigen koreanischen Lernplattform! Plattform zum Lernen von Koreanisch für deutschsprachige Nutzer. Bietet eine unterhaltsame und effiziente Lernerfahrung.',
    // images: [`/api/og?title=Next.js App Router`],
  },
  /*   twitter: {
    card: 'summary_large_image',
  }, */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Provider>
          <div className="flex h-screen w-screen flex-col lg:flex-row lg:overflow-hidden">

            <div className="w-full lg:w-72 flex-none">
              <SideNav />
              {/*           <GlobalNav /> */}
            </div>

            <div className="flex-grow px-2 lg:overflow-y-auto lg:p-4">

              <div className="rounded-lg bg-opacity-80 dark:bg-vc-border-gradient  p-px shadow-lg ">
                <div className="flex justify-between rounded-lg dark:bg-none  dark:bg-black">

                  <div  className=''>
                  <AddressBar />
                  </div>
                  <div className=' my-auto mr-6'>
                  <ThemeSwitcher />
                  </div>
                </div>
              </div>

              <div className="mt-4 dark:bg-vc-border-gradient rounded-lg p-px shadow-lg dark:shadow-black/20">
                  <div className="rounded-lg dark:bg-black dark:bg-none p-3.5 lg:p-6">{children}</div>
              </div>
            </div>

          </div>
        </Provider>
      </body>
    </html>
  );
}