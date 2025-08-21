import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { updateTask } from '../store/slices/taskSlice';
import Navbar from '../components/common/Navbar';
import TaskCard from '../components/dashboard/TaskCard';

const EmployeeDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleStatusUpdate = (taskId, status) => {
    dispatch(updateTask({ id: taskId, status }));
  };

  if (!user || user.role !== 'employee') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Employee Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onUpdate={handleStatusUpdate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;