import React from 'react';

const OnlineUsers = ({ users }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Users:</h3>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li key={index} className="text-gray-700 bg-gray-100 p-2 rounded-lg">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;