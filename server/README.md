# SyncSketch Server

Express and Socket.io backend for SyncSketch.

## Setup

Create a `.env` file with your MongoDB connection string and JWT secrets:

```
PORT=4000
MONGODB_URI=<your MongoDB uri>
ACCESS_TOKEN_SECRET=...
REFRESH_TOKEN_SECRET=...
CORS_ORIGIN=http://localhost:5173
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
```

Install dependencies and start the server:

```bash
npm install
npm start
```
