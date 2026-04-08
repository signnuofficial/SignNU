# SignNU Backend

This backend is built with Node.js, Express, and MongoDB (Mongoose).
It provides user registration/login, approval routing, and basic CRUD for the SignNU app.

## Setup

1. Open terminal in `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` in `backend/` with a valid MongoDB connection string and JWT secret:
   ```env
   MONGO_URI=<your-mongo-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Server

- Entry point: `backend/server.js`
- Listens on port: `4000` by default
- Uses CORS and JSON body parsing
- Connects to MongoDB before starting

## Main API routes

### User routes
- `POST /api/users` — register a new user
- `POST /api/users/login` — login with email/password
- `GET /api/users` — list all users
- `GET /api/users/:id` — get a single user
- `PATCH /api/users/:id` — update a user
- `DELETE /api/users/:id` — delete a user

### Approval routes
- `GET /api/approvals` — get all approvals
- `GET /api/approvals/:id` — get a single approval
- `POST /api/approvals` — create a new approval
- `PATCH /api/approvals/:id` — update an approval
- `DELETE /api/approvals/:id` — delete an approval

## Important backend details

- Passwords are hashed with `bcryptjs` before saving
- User email validation only accepts domains:
  - `@nu-laguna.edu.ph`
  - `@students.nu-laguna.edu.ph`
- The user model is in `backend/models/user.js`
- User routes are in `backend/routes/userRoutes.js`
- Approval routes are in `backend/routes/route.js`

## Example Postman requests

### Register user

- Method: `POST`
- URL: `http://localhost:4000/api/users`
- Body type: `JSON`
- Body:
  ```json
  {
    "username": "testuser2",
    "email": "paulemg@students.nu-laguna.edu.ph",
    "password": "secret123",
    "role": "user"
  }
  ```

### Login user

- Method: `POST`
- URL: `http://localhost:4000/api/users/login`
- Body type: `JSON`
- Body:
  ```json
  {
    "email": "paulemg@students.nu-laguna.edu.ph",
    "password": "secret123"
  }
  ```

### Get current authenticated user

- Method: `GET`
- URL: `http://localhost:4000/api/users/me`
- Header: `Authorization: Bearer <token>`

## Notes for developers

- Keep passwords hashed; never return the `password` field in API responses.


# Frontend

The frontend is a Vite React application located in `frontend/demo-frontend`.

## Setup

1. Open terminal in `frontend/demo-frontend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `frontend/demo-frontend` with the backend API base URL:
   ```env
   VITE_API_BASE_URL=http://localhost:4000
   ```
4. Start the frontend app:
   ```bash
   npm run dev
   ```

## Frontend notes

- The app expects the backend API to be available at `http://localhost:4000` by default.
- If your backend runs on a different host or port, update `VITE_API_BASE_URL`.
- The frontend entry point is `frontend/demo-frontend/src/main.tsx`.
- The React router is configured in `frontend/demo-frontend/src/app/routes.tsx`.
