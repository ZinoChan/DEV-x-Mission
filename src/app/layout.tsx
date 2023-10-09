import NavBar from '@/shared/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import AuthProvider from '@/utils/AuthProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-main',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'DEV x MISSION',
  description: 'Unite Developers, Construct the Future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={`bg-light-1 ${inter.variable} ${bebas.variable}`}>
          <NavBar />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
