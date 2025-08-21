import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import TaskCard from '../components/dashboard/TaskCard';
import TaskForm from '../components/dashboard/TaskForm';
import UserList from '../components/dashboard/UserList';

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.tasks.tasks);
  const mockUsers = [
    { id: '1', email: 'admin@test.com', role: 'admin' },
    { id: '2', email: 'emp@test.com', role: 'employee' },
  ];

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Create Task</h3>
            <TaskForm users={mockUsers} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Tasks</h3>
            <div className="space-y-4">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <UserList users={mockUsers} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;