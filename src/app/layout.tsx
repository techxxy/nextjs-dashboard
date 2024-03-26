import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import DarkModeProvider from '@/components/theme/dark-mode-provider';
import { Metadata } from 'next';
import NavBar from '@/components/navigation/nav-bar';
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"
import { Session } from 'next-auth';

export const metadata: Metadata = {
  title: {
    template: 'Techxxy%s | Fire up Korean Alphabet',
    default: 'Koreanisch Lernen',
  },
  description:
    'Spaß, Entspannung, Gestärkt: Verwöhnen Sie sich mit einer hochwertigen koreanischen Lernplattform! Diese Webseite wurde für deutschsprachige Nutzer entwickelt, die Koreanisch als Anfänger lernen möchten. Wir verstehen, dass das Erlernen einer Fremdsprache eine Herausforderung darstellt, insbesondere für Erwachsene, die möglicherweise nicht die Zeit haben, wie Schüler viel Zeit für den Lernprozess aufzuwenden. Unsere Webseite bietet eine benutzerfreundliche und unterhaltsame Lernumgebung, die speziell darauf abzielt, deutschsprachigen Benutzern dabei zu helfen, Koreanisch effektiv und effizient zu erlernen. Tauchen Sie ein in eine Welt des Sprachenlernens, die auf Ihre Bedürfnisse zugeschnitten ist',
  metadataBase: new URL('https://techxxy.github.io/'),
  icons: {
    icon: '/images/favicon.svg',
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

export default async function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {

  //let email: string | null | undefined;
  let session = await auth();
  let email = session?.user?.email;
/*   auth().then((value:Session | null) => {
    console.log('value:    ',value);
    console.log('email:    ',value?.user?.email);
    email = value?.user?.email;
    console.log('email:    ',email);
  }); */

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <DarkModeProvider>
          <NavBar email={email}/>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
