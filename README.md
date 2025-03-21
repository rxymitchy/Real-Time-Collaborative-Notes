# Real-Time-Collaborative-Notes

A real-time collaborative note-taking application built with **React**, **Socket.io**, and **Tailwind CSS**. This application allows multiple users to join a room, create, edit, and view notes in real-time.

---

## **Features**

- **Real-Time Collaboration**: Multiple users can join a room and edit notes simultaneously.
- **Room-Based Communication**: Users can join specific rooms using a unique room ID.
- **Live Updates**: Changes made by one user are instantly reflected for all users in the same room.
- **Online Users List**: Displays a list of users currently active in the room.
- **Responsive Design**: Built with **Tailwind CSS** for a clean and responsive user interface.

---

## **Technologies Used**

- **Frontend**:
  - React
  - Socket.io-client
  - Tailwind CSS
  - React Router
- **Backend**:
  - Express.js
  - Socket.io
  - MongoDB (for saving notes)
- **Deployment**:
  - Vercel (Frontend)
  - Render (Backend)

---

## **Setup Instructions**

### **Prerequisites**

- Node.js (v16.x or higher)
- npm (v8.x or higher)
- MongoDB (for saving notes)

---

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/real-time-notes.git
cd real-time-notes
```

---

### **2. Set Up the Backend**

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb://localhost:27017/real-time-notes
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

---

### **3. Set Up the Frontend**

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

### **4. Deploy the Application**

#### **Backend Deployment**
1. Deploy the backend to **Render** or **Heroku**.
2. Update the `.env` file with the production MongoDB URI.

#### **Frontend Deployment**
1. Deploy the frontend to **Vercel**.
2. Update the `SocketContext.jsx` file with the deployed backend URL.

---

## **Usage**

1. Open the application in your browser.
2. Enter a unique room ID and click **Join Room**.
3. Start creating or editing notes in real-time with other users in the same room.
4. View the list of online users in the room.

---

## **Key Concepts**

### **1. WebSockets**
- **Socket.io** is used to establish a real-time, bidirectional communication channel between the client and server.
- Events like `joinRoom`, `updateNote`, and `userJoined` are used to synchronize data across clients.

### **2. Rooms**
- Users can join specific rooms using a unique room ID.
- Socket.io's `room` feature ensures that messages are only broadcast to users in the same room.

### **3. Real-Time Updates**
- When a user edits a note, the changes are sent to the server via Socket.io.
- The server broadcasts the updated note to all users in the same room.

### **4. State Management**
- React's `useState` and `useEffect` hooks are used to manage and update the application state.
- The `SocketContext` provides a global instance of the Socket.io client.

---

## **Screenshots**

### Home Page
![Home Page](https://via.placeholder.com/600x400.png?text=Home+Page)

### Room Page
![Room Page](https://via.placeholder.com/600x400.png?text=Room+Page)

---

## **Contributing**

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgements**

- [Socket.io](https://socket.io/) for real-time communication.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Vite](https://vitejs.dev/) for fast development.

---

## **Contact**

For questions or feedback, feel free to reach out:

- **Mitchelle A**
- **Email**: lucianamitchell19@gmail.com

---

Enjoy building and using the **Real-Time Collaborative Notes** application! 🚀

---
