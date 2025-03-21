import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteEditor from '../components/NoteEditor';
import OnlineUsers from '../components/OnlineUsers';
import { socket } from '../context/SocketContext';

const Room = () => {
  const { roomId } = useParams();
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', roomId);

    socket.on('userJoined', (userId) => {
      setOnlineUsers((prevUsers) => [...prevUsers, userId]);
    });

    return () => {
      socket.off('userJoined');
    };
  }, [roomId]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl p-8 transform transition-all hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Room: {roomId}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <NoteEditor roomId={roomId} />
          </div>
          <div>
            <OnlineUsers users={onlineUsers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;