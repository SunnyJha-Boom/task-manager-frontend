import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/slices/authSlice';
import Button from '../common/Button';

const LoginForm = ({ onError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== 'pass123') {
      onError('Invalid password');
      return;
    }
    const user = {
      id: email === 'admin@test.com' ? '1' : '2',
      email,
      role: email === 'admin@test.com' ? 'admin' : 'employee',
    };
    dispatch(setUser({ user, token: 'mock-token' }));
    navigate(email === 'admin@test.com' ? '/admin-dashboard' : '/employee-dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <Button type="submit" className="w-full">Login</Button>
    </form>
  );
};

export default LoginForm;