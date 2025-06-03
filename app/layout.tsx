import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Navbar/ResponsiveNav';
import Footer from '@/components/Footer/Footer';

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Foodie Food Delivery | Singapore',
  description:
    'A food delivery platform that redefines the ease in food delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
