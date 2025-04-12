import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AuthProvider } from '@/lib/auth-context'; // 👈 import your new auth context

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pag-Asa Centre',
  description: 'Welcome to Pag-Asa Centre - A place of worship and fellowship',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
      <AuthProvider> {/* 👈 wrap everything inside AuthProvider */}
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
      </body>
      </html>
  );
}