import { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

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
      } else {
        setMessage('❌ 로그인 실패: 잘못된 사용자 정보입니다.');
      }
    } catch (error) {
      console.log(error);
      setMessage('❌ 서버 오류 발생');
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-96">
      <h2 className="text-2xl font-bold mb-4">로그인</h2>
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
      <Button text="로그인" onClick={handleLogin} />
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default LoginForm;
