# 💍 MatrimonyHub - Matrimonial Profile Search App

A full-stack web application for browsing, bookmarking, and filtering matrimonial profiles. Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 📁 Project Structure
```bash
/frontend   👉 Frontend - React + TailwindCSS
/backend    👉 Backend  - Node.js + Express + MongoDB
```
---

## 🚀 Features

- ✅ User registration and login with JWT authentication  
- ✅ Profile creation, update & photo upload  
- ✅ Bookmark profiles  
- ✅ Send interest to users  
- ✅ Filter profiles (age, gender, location, religion, etc.)  
- ✅ View detailed public profiles  
- ✅ Responsive UI with TailwindCSS  

---

## 🛠 Tech Stack

### 🔹 Frontend

- React  
- React Router DOM  
- TailwindCSS  
- Axios  
- Lucide-react icons  

### 🔹 Backend

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Multer (for image uploads)  
- Dotenv  

---

## ⚙️ Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/mp-lp/MatrimonyHub.git
cd MatrimonyHub
```
---

### 2. Backend Setup (/backend)
```bash

cd backend
npm install
```

🔑 Create a .env file inside /backend:
```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/matrimonial
JWT_SECRET=supersecurejwtkey
```

▶️ Start Backend Server:
```bash
npm run dev
```
---
### 3. Frontend Setup (/frontend)
```bash
cd ../frontend
npm install
```

🔑 Create a .env file inside /frontend:
```bash
VITE_BACKEND_URL=http://localhost:5000
```

▶️ Start Frontend Development Server:
```bash
npm run dev
```
---
## 🧾 API Endpoints

### 🔐 Authentication
```bash
POST	/api/auth/register	         ➜Register user
POST	/api/auth/login	                 ➜Login and get JWT
```
### 👤 Profile
```bash
POST	 /api/profile/save	         ➜Create/Update profile
GET	 /api/profile/me	         ➜Get logged-in users profile
GET	 /api/profile/:id	         ➜View public profile
GET 	 /api/profile/all	         ➜Fetch all profiles
```
### 🔎 Search & Bookmark
```bash

GET	 /api/search           	        ➜Search with filters
POST	 /api/bookmark/add/:id	        ➜Bookmark a profile
DELETE   /api/bookmark/remove/:id	➜Remove bookmark
GET	 /api/bookmark/my	        ➜View bookmarked profiles
```
---
---
## 🔐 Auth Flow
JWT token is saved in localStorage after login.

All protected API requests include the token in the Authorization header.

Server validates token and grants secure access.

---
---
### 🚀  Deployment
🔗 Live Demo: https://matrimony-hub-bts2.vercel.app/

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Made with ❤️ for the world of connections.
