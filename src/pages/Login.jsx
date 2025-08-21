import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  const [error, setError] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <LoginForm onError={setError} />
      </div>
    </div>
  );
};

export default Login;