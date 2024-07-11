import { Toaster } from '@/components/ui/toaster';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from '@/components/Header ';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eagles Ring Video Conference',
  description: 'Video calling',
  icons: {
    icon: '/eagle.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: 'iconButton',
            logoImageUrl: '/eagle',
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252A41',
            colorInputText: '#fff',
          },
        }}>
          <Header/>
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
