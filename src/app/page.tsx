'use client';
import Link from 'next/link';
import Header from './components/Header';

import Button from './components/Button';
import Footer from './components/Footer';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '800' });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <Header />
      <div className="text-center space-y-6">
        <h1
          className={`${playfair.className} text-7xl font-black tracking-tight`}
        >
          WONBIN CHOI
        </h1>

        <Link href={'/login'}>
          <div className="flex justify-center mt-10">
            <Button text="Who U?"></Button>{' '}
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
