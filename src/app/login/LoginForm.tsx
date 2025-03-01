'use client';

import { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import RegisterModal from './RegisterModal';
import Button from '../components/Button';
import Link from 'next/link';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users');
      const users = response.data;

      const user = users.find(
        (u: { username: string; password: string }) =>
          u.username === username && u.password === password
      );

      if (user) {
        setMessage('✅ 로그인 성공!');
        setIsLoginSuccess(true);
      } else {
        setMessage('❌ 로그인 실패: 잘못된 사용자 정보입니다.');
      }
    } catch (error) {
      console.log(error);
      setMessage('❌ 서버 오류 발생');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {isLoginSuccess ? (
          <div className="text-center">
            <p className="text-green-500 font-semibold">✅ 로그인 성공!</p>
            <Link
              href="/start"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              시작 페이지로 이동 →
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              로그인
            </h2>

            {/* 입력 필드 */}
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* 로그인 버튼 */}
            <div className="mt-6 mb-4 flex justify-center">
              <Button text="로그인" onClick={handleLogin} />
            </div>

            {/* 메시지 표시 */}
            {message && (
              <p className="mt-4 text-red-500 text-center">{message}</p>
            )}

            {/* 회원가입 버튼 */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                아직 회원이 아니신가요?{' '}
                <button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="text-blue-500 hover:underline"
                >
                  회원가입
                </button>
              </p>
            </div>
          </>
        )}
      </div>

      {/* 회원가입 모달 */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </div>
  );
};

export default LoginForm;
