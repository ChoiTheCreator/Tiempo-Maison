'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Button from '../components/Button';

const MainPage = () => {
  //된거같은데
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <Header />
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">당신의 취향을 전시하세요</h1>
        <p className="text-lg text-gray-600"> 나만의 전시관을 만들어보세요</p>
        <Link href={'/login'}>
          <Button text="로그인"></Button>{' '}
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
