'use client';

import { Playfair_Display, Anton, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '800' });
const anton = Anton({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'], weight: '400' });

const Page = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex bg-white">
      {/* 왼쪽 텍스트 영역 */}
      <div className="w-2/3 flex flex-col justify-between p-20">
        {/* 타이틀 영역 */}
        <div>
          <h1
            className={`${playfair.className} text-[12vw] font-black leading-none tracking-tighter`}
          >
            TASTE
            <br />
            Museum
          </h1>
          <div className="flex">
            <p className={`${anton.className} mt-12 text-gray-600 text-2xl`}>
              Who is CHOIWONBIN?
            </p>
          </div>
          <Link href={'/contents'}>
            <div className="flex justify-self-end">
              <p
                className={`${anton.className} mt-12 text-gray-600 text-2xl transition-colors duration-300 hover:text-gray-900 hover:underline`}
              >
                Wanna Find Out?
              </p>
            </div>
          </Link>
        </div>

        {/* 프로젝트 정보 */}
        <div className="space-y-6">
          <div>
            <h2
              className={`${inter.className} text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-black`}
            >
              PROJECT
            </h2>
            <p className={`${inter.className} text-lg text-gray-500`}>
              취향 전시 박물관
            </p>
          </div>

          <div>
            <h2
              className={`${inter.className} text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-black`}
            >
              ABOUT WHAT
            </h2>
            <p className={`${inter.className} text-lg text-gray-500`}>
              내 취향을 정리하고 전시하는 공간.
            </p>
          </div>
        </div>
      </div>

      {/* 오른쪽 이미지 영역 */}
      <div className="w-1/2 relative">
        <Image
          src="/IMG/beauty.jpg" // ⚠️ 이미지 경로 확인
          alt="personal"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Page;
