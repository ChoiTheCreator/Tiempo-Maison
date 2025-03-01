'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Oswald, Poppins, DM_Mono } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: '500' });
const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: '500' });

const ContentsPage = () => {
  return (
    <div className="w-screen h-screen bg-[white] flex flex-col justify-between">
      {/* 상단 컨텐츠 목록 */}
      <div className="p-10 flex flex-col space-y-2 text-gray-600 uppercase tracking-wide">
        {/* 왼쪽 & 오른쪽 컨텐츠 */}
        <div className="flex justify-between">
          <Link href="/experience">
            <div className="w-full px-4 py-3 transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer">
              <p className={`${oswald.className} text-lg font-medium`}>
                01 Experience
              </p>
            </div>
          </Link>

          <Link href="/networks">
            <div className="w-full px-4 py-3 transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-right">
              <p className={`${oswald.className} text-lg font-medium`}>
                04 Networks
              </p>
            </div>
          </Link>
        </div>

        <div className="flex justify-between">
          <Link href="/collection">
            <div className="w-full px-4 py-3 transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer">
              <p className={`${poppins.className} text-lg font-semibold`}>
                02 Collection
              </p>
            </div>
          </Link>

          <Link href="/hobbies">
            <div className="w-full px-4 py-3 transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-right">
              <p className={`${poppins.className} text-lg font-semibold`}>
                05 Hobbies
              </p>
            </div>
          </Link>
        </div>

        <div className="flex justify-between">
          <Link href="/skills">
            <div className="w-full px-4 py-3 transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer">
              <p
                className={`${dmMono.className} text-lg font-medium tracking-widest`}
              >
                03 Skills
              </p>
            </div>
          </Link>

          <Link href="/keywords">
            <div className="w-full px-4 py-3 transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer text-right">
              <p
                className={`${dmMono.className} text-lg font-medium tracking-widest`}
              >
                06 Keywords
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* 중앙 CONTENTS 텍스트 - 더 두꺼운 스타일 적용 */}
      <div className="flex justify-center mb-10">
        <h1 className="text-[10vw] font-extrabold leading-none tracking-tighter text-black drop-shadow-lg">
          CONTENTS
        </h1>
      </div>

      {/* 하단 이미지 영역 */}
      <div className="relative w-full h-[40vh] overflow-hidden">
        <Image
          src="/IMG/contents-image.jpg"
          alt="Contents"
          layout="fill"
          objectFit="cover"
          className="grayscale"
          quality={100}
        />
      </div>
    </div>
  );
};

export default ContentsPage;
