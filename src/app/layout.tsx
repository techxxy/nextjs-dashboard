import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
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
            {children}
        </Provider>
      </body>
    </html>
  );
}
