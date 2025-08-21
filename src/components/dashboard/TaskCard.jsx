import React from 'react';

const TaskCard = ({ task, onUpdate }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p className="text-sm text-gray-500">Status: {task.status}</p>
      {onUpdate && (
        <select
          value={task.status}
          onChange={(e) => onUpdate(task.id, e.target.value)}
          className="mt-2 p-1 border rounded-md focus:ring-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      )}
    </div>
  );
};

export default TaskCard;