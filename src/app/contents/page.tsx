'use client';

import Image from 'next/image';

const ContentsPage = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-between">
      {/* 상단 컨텐츠 목록 */}
      <div className="p-10 flex justify-between text-sm text-gray-600 uppercase tracking-wide">
        <div className="space-y-2">
          <p>01 Experience</p>
          <p>02 Collection</p>
          <p>03 Skills</p>
        </div>
        <div className="space-y-2 text-right">
          <p>04 Networks</p>
          <p>05 Hobbies</p>
          <p>06 Keywords</p>
        </div>
      </div>

      {/* 중앙 CONTENTS 텍스트 */}
      <div className="flex justify-center">
        <h1 className="text-[12vw] font-black leading-none tracking-tighter">
          CONTENTS
        </h1>
      </div>

      {/* 하단 이미지 영역 */}
      <div className="relative w-full h-[40vh] overflow-hidden">
        <Image
          src="/IMG/contents-image.jpg" // ⚠️ public/IMG 폴더에 추가할 이미지
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
