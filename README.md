# 📖 **Chapter by Chapter — Smart Reading Habit Builder**

*A magical reading tracker with gamification, Google Login & secure backend*

---

## 🌟 Overview

**Chapter by Chapter** is a modern, secure, kid-friendly reading tracker built to help children build healthy reading habits through an engaging and magical UI. The app includes:

✅ Google Sign-In (no password required)
✅ Motivational bubble ✨
✅ Book library with CRUD
✅ Gamification (points + badges)
✅ Progress statistics & animations
✅ User-scoped data isolation (each user sees only their books)

## 🎯 Features

### ✅ **User Authentication**

* Secure Google OAuth 2.0 login
* JWT validation on backend
* Each user has their own private book collection
* Logout with UI feedback

### ✅ **Library Management**

* Add books with status + notes + ratings
* Update existing book entries
* Delete books
* Real-time UI refresh

### ✅ **Gamification**

* Points for reading
* Progress animations
* Unique badges for milestones

### ✅ **Motivational UX**

* Floating bubble showing encouraging messages
* Magical sparkles and glowing UI elements
* Child-friendly layout & aesthetics

### ✅ **Mobile-Friendly UI**

* Responsive navbar
* Grid-based library layout
* Clean and readable typography

---

## 🧠 Tech Stack

### **Frontend**

* React.js (CRA)
* Google Identity Services
* CSS animations + custom theme
* React Router

### **Backend**

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Google Auth Library

### **DevOps / Project Setup**

* Concurrent dev servers
* Separate `.env` for client & server
* GitHub-ready project structure
* `.gitignore` protection for sensitive files

---

## 🔐 Authentication Flow

### 1️⃣ User clicks “Sign in with Google”

→ Google returns a **JWT credential token**

### 2️⃣ Frontend decodes token using `jwt-decode`

→ Extracts name, email, picture, Google user ID (`sub`)

### 3️⃣ Backend verifies token in every request

→ Uses `google-auth-library`
→ Extracts user ID and attaches it to requests

### 4️⃣ Books are saved with `userId` field

→ Private library per user
→ No cross-user access

---

## 🧱 Architecture Diagram

```
            ┌────────────────────┐
            │     Frontend       │
            │   React + Google   │
            │  Sign-In Button    │
            └─────────▲──────────┘
                      │ JWT Token
                      │
                      ▼
            ┌────────────────────┐
            │   Express Server   │
            │  verifyGoogleAuth  │
            └─────────▲──────────┘
                      │ userId
                      │
                      ▼
            ┌────────────────────┐
            │   MongoDB Atlas    │
            │  Books by userId   │
            └────────────────────┘
```

---

## 📁 Folder Structure

```
chapter-by-chapter/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── App.css
│   └── public/
│
├── server/
│   ├── models/book.js
│   ├── routes/bookRoutes.js
│   ├── middleware/authMiddleware.js
│   ├── index.js
│
├── .env.example
├── README.md
├── .gitignore
```

---

## ⚙️ Setup Instructions

### ✅ Backend Setup

```
cd server
npm install
```

Create `.env` inside `server/`

```
MONGO_URI=<your_mongodb_connection_string>
GOOGLE_CLIENT_ID=<google_client_id>
PORT=5000
```

Run backend:

```
npm run dev
```

---

### ✅ Frontend Setup

```
cd client
npm install
```

Create `.env` inside `client/`

```
REACT_APP_GOOGLE_CLIENT_ID=<google_client_id>
```

Run frontend:

```
npm start
```

Your app will run at:

🔹 Backend → [http://localhost:5000](http://localhost:5000)
🔹 Frontend → [http://localhost:3000](http://localhost:3000)

---

## 🔗 API Endpoints

### `GET /api/books`

Returns logged-in user's books.

### `POST /api/books`

Adds a new book entry.

### `PUT /api/books/:id`

Updates a book.

### `DELETE /api/books/:id`

Deletes a book.

Every request uses Google-token verification middleware.

---

## 🛡️ Security Features

* No passwords stored
* Token verification on each request
* User-isolated data
* `.env` never committed
* Safe `.env.example` shared

---
## 📸 Screenshots 

---

### 🔐 Login Screen

<img width="1919" height="870" alt="Screenshot 2025-11-10 192653" src="https://github.com/user-attachments/assets/34164632-787c-416d-953e-0f5f62b6581b" />

A magical, immersive welcome screen created using blurred glass effects, glowing highlights, floating sparkles, and warm purple–gold tones.  
Users sign in using **Google Identity Services**, providing secure OAuth 2.0 authentication without managing passwords or sensitive credentials.

---

### ✨ Add Book Page

<img width="1900" height="869" alt="Screenshot 2025-11-10 192733" src="https://github.com/user-attachments/assets/5b18ac88-0708-4a29-aa3b-6322c7a2b183" />

A beautifully designed form with enchanted glowing borders and star-themed rating UI.  
Users can enter **title, author, notes, rating, and reading status**.  
Each input has subtle gold glow effects and soft animations to improve user engagement.

---

### 📚 Library Dashboard

<img width="1919" height="864" alt="Screenshot 2025-11-10 192755" src="https://github.com/user-attachments/assets/468ffbda-5cee-4299-b03c-8362a0ef400b" />

Displays all books associated with the current logged-in Google user.  
Includes dynamic statistics like **Total Books, Completed Books, Reading Progress, Average Rating**, and more.  
Cards have glowing hover effects, and stars animate for rating visuals.

---

### 🏆 Gamification System

<img width="1915" height="629" alt="Screenshot 2025-11-10 192819" src="https://github.com/user-attachments/assets/48d951f3-3117-442e-b265-04a4d9175af9" />

<img width="1919" height="858" alt="Screenshot 2025-11-10 192837" src="https://github.com/user-attachments/assets/4392b2da-0826-4896-bdbe-09d72b684de5" />

Kids earn points, unlock badges, and grow their reading streaks.  
Badges glow when unlocked, using **animated pulsing gold effects**.  
A collapsible guide explains how points and rewards are calculated, adding clarity and excitement.


## ✨ Future Enhancements

* Reading streak tracker
* Parent dashboard
* Export reading summary as PDF
* Leaderboard for kids
* AI-powered book recommendations

---

## ❤️ Acknowledgements

Created with love, magic, and endless chapters 📖✨

