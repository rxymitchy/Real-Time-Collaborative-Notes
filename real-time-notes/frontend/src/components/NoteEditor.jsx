import React, { useState, useEffect } from 'react';
import { socket } from '../context/SocketContext';

const NoteEditor = ({ roomId }) => {
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    socket.on('noteUpdated', (content) => {
      setNoteContent(content);
    });

    return () => {
      socket.off('noteUpdated');
    };
  }, []);

  const handleChange = (e) => {
    const content = e.target.value;
    setNoteContent(content);
    socket.emit('updateNote', roomId, content);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <textarea
        value={noteContent}
        onChange={handleChange}
        placeholder="Start typing..."
        className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
    </div>
  );
};

export default NoteEditor;