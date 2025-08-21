import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import Button from './Button';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Task Manager</h1>
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm">{user.email} ({user.role})</span>
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;