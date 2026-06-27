import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PM Omar Faruq | Investor • Financial Educator • Entrepreneur',
  description:
    'Official website of PM Omar Faruq - Investor, Financial Educator, Entrepreneur, and Digital Creator. Simplifying complex financial concepts and sharing practical insights for informed decision-making.',
  keywords: [
    'PM Omar Faruq',
    'Financial Education',
    'Investment Research',
    'Stock Market',
    'Value Investing',
    'Financial Literacy',
    'Entrepreneurship',
  ],
  authors: [{ name: 'PM Omar Faruq' }],
  creator: 'PM Omar Faruq',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pmomarfaruq.com',
    siteName: 'PM Omar Faruq',
    title: 'PM Omar Faruq | Investor • Financial Educator • Entrepreneur',
    description:
      'Simplifying complex financial concepts and sharing practical insights for informed decision-making.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'PM Omar Faruq - Financial Educator & Investor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Omar Faruq | Investor • Financial Educator • Entrepreneur',
    description:
      'Simplifying complex financial concepts and sharing practical insights for informed decision-making.',
    creator: '@pmomarfaruq',
    images: ['https://bolt.new/static/og_default.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
