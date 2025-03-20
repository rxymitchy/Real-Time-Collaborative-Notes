import React from 'react';

const OnlineUsers = ({ users }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Online Users:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="text-gray-700">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;