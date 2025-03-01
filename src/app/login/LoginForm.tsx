'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginForm = () => {
  const [authKey, setAuthKey] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:4000/keys');
      const validKeys = response.data;

      const isValid = validKeys.some(
        (key: { authKey: string; password: string }) =>
          key.authKey === authKey && key.password === password
      );

      if (isValid) {
        setMessage('Success ');
        setIsLoginSuccess(true);
      } else {
        setMessage('Fail');
      }
    } catch (error) {
      console.log(error);
      setMessage('❌ 서버 오류 발생');
    }
  };

  // 2초 후 자동 이동
  useEffect(() => {
    if (isLoginSuccess) {
      setTimeout(() => {
        router.push('/start'); // ✅ 2초 후 자동 이동
      }, 800);
    }
  }, [isLoginSuccess, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Authentication
        </h2>

        {/* 입력 필드 */}
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Key"
            value={authKey}
            onChange={(e) => setAuthKey(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 로그인 버튼 */}
        <div className="mt-6 mb-4 flex justify-center">
          <Button text="submit" onClick={handleLogin} />
        </div>

        {/* 메시지 표시 */}
        {message && (
          <p
            className={`mt-4 text-center ${
              isLoginSuccess ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
