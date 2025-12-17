# 📚 Chapter by Chapter — Smart Reading Habit Builder
### *Now featuring Enterprise-Grade SRE Observability & AWS Cloud Architecture*

> *"A magical reading tracker with gamification, secured by Google OAuth 2.0, and monitored like a mission-critical system."*

---

## 🌟 Overview

**Chapter by Chapter** is a modern, secure, kid-friendly reading tracker built to help children build healthy reading habits through an engaging UI.

Beyond the magic, this project serves as a **Cloud-Native Reference Architecture**. It demonstrates how to take a standard MERN application and elevate it with **Production Engineering standards**: containerization, cloud deployment, and a full Site Reliability Engineering (SRE) observability pipeline.

✅ **Magical UI:** Floating bubbles, sparkles, and gamified progress.
✅ **Secure:** Google Sign-In (OAuth 2.0) with JWT validation.
✅ **Reliable:** Self-healing infrastructure with Docker auto-recovery.
✅ **Observable:** Real-time monitoring of Node.js Event Loop and CPU usage.

---

## 🚀 Engineering & DevOps Architecture

This project bridges the gap between **Software Development** and **Operations**.

### 🏗️ **Infrastructure**
* **Cloud Provider:** Deployed on **AWS EC2** (Ubuntu Linux).
* **Containerization:** Fully Dockerized microservices (Frontend, Backend, Prometheus, Grafana).
* **Orchestration:** Managed via **Docker Compose** with custom networking and volume persistence.
* **Performance:** Frontend assets served via **Nginx**; Backend runs on Alpine Linux for security.

### 🛠️ **Site Reliability Engineering (SRE) Stack**
* **The Spy:** `prom-client` integrated into Express.js to expose runtime metrics (`/metrics`).
* **The Collector:** **Prometheus** scrapes the application every 5 seconds to gather time-series data.
* **The Dashboard:** **Grafana** visualizes critical health signals:
    * **Node.js Event Loop Lag:** Ensuring non-blocking async performance.
    * **Process CPU & Memory:** Detecting resource leaks or freezes.
    * **Request Latency:** Monitoring API response times.

### 🤖 **CI/CD Automation**
* **Pipeline:** GitHub Actions workflow triggers on every push to `main`.
* **Build Verification:** Parallel builds for Client and Server Docker images.
* **Security:** Secrets injected dynamically via GitHub Actions.

---

## 🧠 Tech Stack

### **Full-Stack (MERN)**
* **Frontend:** React.js, Tailwind CSS, Framer Motion (Animations)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud)
* **Auth:** Google Identity Services (OAuth 2.0)

### **DevOps & Monitoring**
* **Container:** Docker, Docker Compose
* **Cloud:** AWS EC2
* **Monitoring:** Prometheus, Grafana
* **Server:** Nginx (Reverse Proxy)

---

## ⚙️ Setup Instructions (The DevOps Way)

### Prerequisites
* Docker Desktop installed & running.
* Google Cloud Console Credentials.

### 1️⃣ Clone & Configure
```
git clone [https://github.com/Karuna-Nayak05/chapter-by-chapter.git](https://github.com/Karuna-Nayak05/chapter-by-chapter.git)
cd chapter-by-chapter
```
**Create Secret Files:**
Create a `.env` file in the `server/` folder and `client/` folder:

```
# server/.env
MONGO_URI=<your_mongodb_connection_string>
PORT=5000

# client/.env
REACT_APP_GOOGLE_CLIENT_ID=<your_google_id>
```
### 🔑 Google Cloud Config (Critical)
To enable Google Sign-In, configure your OAuth Consent Screen in the Google Cloud Console:
* **Authorized JavaScript Origins:**
  * Local: `http://localhost:3000`
  * Cloud: `http://YOUR_AWS_IP.nip.io:3000` (Use `nip.io` to allow dynamic IPs)
* **Authorized Redirect URIs:**
  * Local: `http://localhost:3000`
  * Cloud: `http://YOUR_AWS_IP.nip.io:3000`
  
### 2️⃣ The Magic "One-Click" Start
Run the entire stack (App + Monitoring) with a single command:

```
docker compose up -d --build
```
### 3️⃣ Access the Services

| Service | URL | Description |
| :--- | :--- | :--- |
| **Application** | `http://localhost:3000` | The React Frontend |
| **API** | `http://localhost:5000` | The Node.js Backend |
| **Prometheus** | `http://localhost:9090` | Metric Collector |
| **Grafana** | `http://localhost:3001` | **SRE Dashboard** (Login: `admin`/`admin`) |

## 🧱 Architecture Diagram

```
       [ Browser / Client ]
              │
              ▼
      [ Nginx Web Server ]
              │
              ▼
    ┌────────────────────┐          ┌──────────────────┐
    │   Node.js Server   │◀─────────│    Prometheus    │
    │  (Exposes /metrics)│          │ (Scrapes data)   │
    └─────────┬──────────┘          └─────────▲────────┘
              │                               │
              ▼                               │
    ┌────────────────────┐          ┌──────────────────┐
    │   MongoDB Atlas    │          │     Grafana      │
    │  (Persistent Data) │          │   (Visualizes)   │
    └────────────────────┘          └──────────────────┘
```
## 📸 Screenshots

### 📊 SRE Observability Dashboard 

<img width="1510" height="762" alt="Screenshot 2025-12-15 155749" src="https://github.com/user-attachments/assets/73b15eb6-64ce-4d37-837f-b9f5fd9474a2" />
Real-time System Monitoring: The dashboard below tracks the "Vital Signs" of the backend. It allows for proactive detection of memory leaks (Heap Usage) and performance bottlenecks (Event Loop Lag).

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

