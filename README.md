# 📖 **Chapter by Chapter — Smart Reading Habit Builder**

*A magical reading tracker with gamification, Google Login & secure backend.*
*Now featuring an **Enterprise-Grade Self-Healing Microservices Architecture**.*

---

## 🌟 Overview

**Chapter by Chapter** is a modern, secure, kid-friendly reading tracker built to help children build healthy reading habits through an engaging and magical UI. Beyond the magic, it is engineered as a robust **Distributed System** featuring containerized microservices, automated CI/CD pipelines, and SRE-grade reliability mechanisms.

✅ **Magical UI:** Floating bubbles, sparkles, and gamified progress.
✅ **Secure:** Google Sign-In (OAuth 2.0) with JWT validation.
✅ **Reliable:** Self-healing infrastructure with auto-recovery.
✅ **Portable:** Fully Dockerized for consistent deployment anywhere.

---

## 🚀 Engineering & DevOps Architecture (New)

This project demonstrates **Senior-Level DevOps & SRE principles** implemented on a MERN stack application.

### 🏗️ **Infrastructure**
* **Containerization:** Fully Dockerized microservices (Frontend + Backend) using Alpine Linux images for minimal footprint.
* **Orchestration:** Managed via **Docker Compose** with strict dependency management and network isolation.
* **Performance:** Frontend assets are compiled via **Multi-Stage Builds** and served by a high-performance **Nginx** web server.

### 🛠️ **Site Reliability Engineering (SRE)**
* **Self-Healing:** Implemented active **Health Checks** (`/health` endpoint) that verify service uptime.
* **Auto-Recovery:** Configured Docker restart policies (`restart: always`) to automatically resuscitate "zombie" or crashed containers without human intervention.
* **Network Engineering:** Solved complex container-to-cloud DNS resolution failures (ECONNREFUSED) by configuring custom DNS resolvers (8.8.8.8) within the Docker network.

### 🤖 **CI/CD Automation**
* **Pipeline:** GitHub Actions workflow triggers on every push to `main`.
* **Build Verification:** Automatically builds backend and frontend Docker images in parallel to ensure build integrity.
* **Security:** Secrets (like Google Client IDs) are securely injected during the build process via GitHub Secrets.

---

## 🧠 Tech Stack

### **Frontend**
* **React.js** (Optimized with Multi-Stage Docker Build)
* **Nginx** (Production Web Server)
* **Google Identity Services**
* **CSS Animations** + Custom Theme

### **Backend**
* **Node.js & Express.js** (Alpine Linux Containerized)
* **MongoDB Atlas** (Cloud Database)
* **Mongoose ODM**
* **Google Auth Library**

### **DevOps & Infrastructure**
* **Docker & Docker Compose**
* **GitHub Actions** (CI/CD)
* **Linux Networking** (DNS & Port Management)

---

## ⚙️ Setup Instructions (The DevOps Way)

### Prerequisites
* Docker Desktop installed & running
* Google Cloud Console Credentials

### 1️⃣ Clone & Configure
```bash
git clone [https://github.com/Karuna-Nayak05/chapter-by-chapter.git](https://github.com/Karuna-Nayak05/chapter-by-chapter.git)
cd chapter-by-chapter
````

**Create Secret Files:**
Since this is a 12-Factor App, secrets are never committed. Create a `.env` file in the `server/` folder:

```bash
# server/.env
MONGO_URI=<your_mongodb_connection_string>
GOOGLE_CLIENT_ID=<your_google_client_id>
PORT=5000
```

### 2️⃣ The Magic "One-Click" Start

No need to install Node modules manually. Docker handles everything.

```bash
# Build and Run the entire stack
docker-compose up --build
```

### 3️⃣ Access the App

  * **Frontend (App):** [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)
  * **Backend (API):** [http://localhost:5000](https://www.google.com/search?q=http://localhost:5000)
  * **Health Check:** [http://localhost:5000/health](https://www.google.com/search?q=http://localhost:5000/health) (Returns "OK")

-----

## 🎯 Features

### ✅ **User Authentication**

  * Secure Google OAuth 2.0 login
  * JWT validation on backend
  * Each user has their own private book collection

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

-----

## 🧱 Architecture Diagram

```text
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

-----

## 📁 Folder Structure

```text
chapter-by-chapter/
│
├── .github/
│   └── workflows/      # CI/CD Pipeline Configuration
│       └── ci-pipeline.yml
│
├── client/
│   ├── Dockerfile      # Multi-stage Nginx build
│   ├── src/
│   └── public/
│
├── server/
│   ├── Dockerfile      # Alpine Node.js build
│   ├── models/
│   ├── routes/
│   └── index.js        # Includes SRE Health Checks
│
├── docker-compose.yml  # Orchestration & Self-Healing Config
├── .env.example
├── README.md
└── .gitignore
```

-----

## 🔐 Authentication Flow

1.  **User clicks “Sign in with Google”** → Google returns a **JWT credential token**.
2.  **Frontend decodes token** → Extracts name, email, & picture.
3.  **Backend verifies token** → Uses `google-auth-library` to validate identity on every request.
4.  **Data Isolation** → Books are saved with a `userId` field, ensuring private libraries.

-----

## 📸 Screenshots

### 🔐 Login Screen

<img width="100%" alt="Login Screen" src="https://github.com/user-attachments/assets/34164632-787c-416d-953e-0f5f62b6581b" />
A magical, immersive welcome screen with secure Google OAuth 2.0 authentication.

### ✨ Add Book Page

<img width="100%" alt="Add Book Page" src="https://github.com/user-attachments/assets/5b18ac88-0708-4a29-aa3b-6322c7a2b183" />
Enchanted glowing borders and star-themed rating UI.

### 📚 Library Dashboard

<img width="100%" alt="Library Dashboard" src="https://github.com/user-attachments/assets/468ffbda-5cee-4299-b03c-8362a0ef400b" />
Dynamic statistics and glowing hover effects.

### 🏆 Gamification System

<img width="100%" alt="Badges" src="https://github.com/user-attachments/assets/48d951f3-3117-442e-b265-04a4d9175af9" />
Kids earn points, unlock badges, and grow their reading streaks.

-----

## ✨ Future Enhancements

  * Reading streak tracker
  * Parent dashboard
  * Export reading summary as PDF
  * Leaderboard for kids
  * AI-powered book recommendations

-----

## ❤️ Acknowledgements

Created with love, magic, and endless chapters 📖✨

