'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">취향 전시 박물관</h1>
      <Link href="/main">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          시작하기
        </button>
      </Link>
    </div>
  );
}
