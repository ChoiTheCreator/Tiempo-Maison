'use client';

import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    if (!username || !password) {
      setMessage('❌ 모든 필드를 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/users');
      const users = await response.json();

      const userExists = users.some(
        (u: { username: string }) => u.username === username
      );

      if (userExists) {
        setMessage('❌ 이미 존재하는 아이디입니다.');
        return;
      }

      await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      setMessage('✅ 회원가입 성공!');
      setTimeout(onClose, 1500);
    } catch (error) {
      setMessage('❌ 서버 오류 발생');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 relative">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          회원가입
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

        {/* 가입하기 버튼 */}
        <div className="mt-6">
          <Button text="가입하기" onClick={handleRegister} />
        </div>

        {/* 메시지 표시 */}
        {message && <p className="mt-4 text-red-500 text-center">{message}</p>}

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
