import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Doobleh | صدای ماندگار',
  description: 'An immersive digital museum celebrating Iranian dubbing artists and Persian voice acting.',
  keywords: ['Iranian Dubbing', 'Iranian Voice Actors', 'Persian Dubbing', 'دوبله ایران', 'صداپیشه ایرانی'],
  openGraph: {
    title: 'Doobleh — The Eternal Voices',
    description: 'Enter a cinematic archive of Iranian dubbing culture.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doobleh — The Eternal Voices',
    description: 'A cinematic archive of Iranian dubbing culture.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
