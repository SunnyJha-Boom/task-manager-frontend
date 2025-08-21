import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/slices/taskSlice';
import Button from '../common/Button';

const TaskForm = ({ users }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      assignee,
      status: 'pending',
      dueDate,
    };
    dispatch(addTask(newTask));
    setTitle('');
    setDescription('');
    setAssignee('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Assignee</label>
        <select
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.email}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <Button type="submit">Create Task</Button>
    </form>
  );
};

export default TaskForm;