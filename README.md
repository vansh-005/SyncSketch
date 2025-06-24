# SyncSketch

SyncSketch is a real-time collaborative whiteboard built with the MERN stack and Socket.io. It allows users to create drawing rooms and sketch together with live updates.


## Tech Stack

- **Frontend:** React with Vite
- **Backend:** Express.js with Node.js
- **Database:** MongoDB
- **Realtime:** Socket.io

## Getting Started

Install dependencies for both the client and server:

```bash
npm run install-server
npm run install-client
```

### Running the application

In separate terminals run:

```bash
npm run start-server   # backend on port 4000 by default
npm run start-client   # React dev server
```

Visit `http://localhost:5173` to use the app.

## Project Structure

- `client/` – React application
- `server/` – Express API and Socket.io server
