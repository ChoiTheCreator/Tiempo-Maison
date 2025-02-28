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
      // JSON Server에서 기존 유저 조회
      const response = await fetch('http://localhost:4000/users');
      const users = await response.json();

      const userExists = users.some(
        (u: { username: string }) => u.username === username
      );

      if (userExists) {
        setMessage('❌ 이미 존재하는 아이디입니다.');
        return;
      }

      // 새로운 유저 추가
      await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      setMessage('✅ 회원가입 성공!');
      setTimeout(onClose, 1500); // 1.5초 후 모달 닫기
    } catch (error) {
      setMessage('❌ 서버 오류 발생');
    }
  };

  if (!isOpen) return null; // 모달이 닫혀있으면 렌더링하지 않음

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">회원가입</h2>
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
        <Button text="가입하기" onClick={handleRegister} />
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <button
          onClick={onClose}
          className="mt-4 text-gray-600 hover:underline"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
