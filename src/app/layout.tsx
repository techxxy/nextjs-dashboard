import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import SideNav from './ui/dashboard/sidenav';
import { AddressBar } from '@/components/ui/address-bar';

export const metadata: Metadata = {
  title: {
    template: 'Techxxy%s | Fire up Korean Alphabet',
    default: 'Koreanisch Lernen',
  },
  description:
    'Diese Webseite wurde für deutschsprachige Nutzer entwickelt, die Koreanisch als Anfänger lernen möchten. Wir verstehen, dass das Erlernen einer Fremdsprache eine Herausforderung darstellt, insbesondere für Erwachsene, die möglicherweise nicht die Zeit haben, wie Schüler viel Zeit für den Lernprozess aufzuwenden. Unsere Webseite bietet eine benutzerfreundliche und unterhaltsame Lernumgebung, die speziell darauf abzielt, deutschsprachigen Benutzern dabei zu helfen, Koreanisch effektiv und effizient zu erlernen. Tauchen Sie ein in eine Welt des Sprachenlernens, die auf Ihre Bedürfnisse zugeschnitten ist',
  metadataBase: new URL('https://techxxy.github.io/'),
  openGraph: {
    title: 'Fire up Korean Alphabet',
    description:
      'Plattform zum Lernen von Koreanisch für deutschsprachige Nutzer. Bietet eine unterhaltsame und effiziente Lernerfahrung.',
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
        <div className="flex h-screen flex-col lg:flex-row lg:overflow-hidden">

          <div className="w-full flex-none lg:w-64">
            <SideNav />
          </div>
         
          <div className="max-w-5xl space-y-8 px-2 pt-20 lg:py-8">

          <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>


                <div className="flex-grow p-6 lg:overflow-y-auto lg:p-12">
                  {children}
                </div>
          </div>



        </div>
      </body>
    </html>
  );
}
