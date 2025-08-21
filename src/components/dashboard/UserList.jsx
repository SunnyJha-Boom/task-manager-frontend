import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Users</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left text-gray-700">Email</th>
            <th className="p-2 text-left text-gray-700">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;