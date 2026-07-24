# Content Management System (CMS)

A full-stack Content Management System (CMS) built using **React**, **Express.js**, and **MongoDB**. The application provides a secure admin panel where administrators can manage website pages dynamically. The public website retrieves all content from the backend APIs instead of using hardcoded data.

---

## Features

### Admin Panel
- Secure Admin Login using JWT Authentication
- Logout functionality
- Protected Routes
- Dashboard to manage website pages
- Create, Read, Update and Delete (CRUD) pages

### Public Website
- Dynamic page rendering using page slugs
- Content fetched from backend APIs
- Page Not Found handling for invalid URLs

---

## Tech Stack

### Frontend
- React
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

---

## Folder Structure

```
cms-assignment/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── server.js
│
├── admin-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Saurabhverma744/cms-assignment
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5002
```

### Frontend Setup

```bash
cd admin-frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/login` |

### Pages

| Method | Endpoint |
|---------|----------|
| GET | `/api/pages` |
| GET | `/api/pages/:id` |
| GET | `/api/pages/slug/:slug` |
| POST | `/api/pages` |
| PUT | `/api/pages/:id` |
| DELETE | `/api/pages/:id` |

---

## Admin Credentials

```
Username: admin
Password: admin123
```

---

## Architecture

```
Browser
    │
    ▼
React Frontend
    │
React Router
    │
Axios
    │
Express.js API
    │
Controllers
    │
Mongoose
    │
MongoDB
```

---

## Assumptions

- Only one administrator account is required.
- JWT tokens are stored in Local Storage.
- Every page has a unique slug.
- MongoDB is used as the database.
- Website content is stored as plain text.

---

## Future Improvements

- Rich Text Editor
- Image Upload Support
- Search & Filtering
- Pagination
- Multiple Admin Roles
- Responsive UI Improvements
- Docker Support
- Live Deployment

---

## Author

**Saurabh Verma**