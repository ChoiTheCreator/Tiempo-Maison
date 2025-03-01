'use client';

import { Playfair_Display } from 'next/font/google';
import { Anton } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '800' });
const anton = Anton({ subsets: ['latin'], weight: '400' });

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
          <p className={`${anton.className} mt-8 text-gray-600 text-2xl`}>
            Describe yourself
          </p>
        </div>

        {/* 프로젝트 정보 */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">PROJECT</h2>
            <p className="text-xl text-gray-500">취향 전시 박물관</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">ABOUT WHAT</h2>
            <p className="text-xl text-gray-500">
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
