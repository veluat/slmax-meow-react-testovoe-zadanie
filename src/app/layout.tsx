import React from 'react';
import type { Metadata } from 'next';
import { CustomHeader } from '@/components/custom-header/CustomHeader';
import { CustomFooter } from '@/components/custom-footer/CustomFooter';
import './globals.css';

export const metadata: Metadata = {
  title: 'Star Wars Movies',
  description: 'Star Wars movies'
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body>
    <CustomHeader />
    <main className={'main'}>
      {children}
    </main>
    <CustomFooter />
    </body>
    </html>
  );
}
