import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Luminoso Media - We Tell Stories That Move Brands',
  description: 'Award-winning media production and content marketing agency. Video production, social media marketing, and content creation services.',
  keywords: 'media production, video production, social media marketing, content marketing, Luminoso Media',
  openGraph: {
    title: 'Luminoso Media - We Tell Stories That Move Brands',
    description: 'Award-winning media production and content marketing agency.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
