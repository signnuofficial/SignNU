# SignNU Frontend

This frontend is a Vite + React application for the SignNU approval workflow system.

## Setup

1. Open terminal in `frontend/demo-frontend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `frontend/demo-frontend` with your backend API URL:
   ```env
   VITE_API_BASE_URL=http://localhost:4000
   ```

## Run

Start the development server:

```bash
npm run dev
```

## Notes

- The frontend uses `import.meta.env.VITE_API_BASE_URL` to locate the backend.
- If your backend is not running on `http://localhost:4000`, update the `.env` value accordingly.
- The frontend code lives under `src/`, and the main entry point is `src/main.tsx`.
