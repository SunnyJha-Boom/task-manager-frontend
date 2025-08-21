import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-4">The page you're looking for doesn't exist.</p>
        <Link to="/login" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default NotFound;