# 🚀 AI Site Builder

An AI-powered SaaS platform that generates complete website layouts and visual assets from natural language prompts. Built with a modern full-stack architecture focusing on scalability, authentication, and production-grade backend practices.

---

## ✨ Features

* 🔐 Secure authentication using Better Auth
* 🤖 AI-powered generation pipeline
* 💳 Stripe payment integration
* 🗄️ PostgreSQL database with Prisma ORM
* ⚡ RESTful API architecture
* 🎨 Modern React + Tailwind frontend
* 🔍 Robust validation and error handling
* 📦 Modular full-stack structure

---

## 🧱 Tech Stack

### Frontend

* React 19
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express
* TypeScript
* PostgreSQL
* Prisma ORM
* Better Auth
* Stripe
* OpenAI API

### DevOps & Tooling

* Docker-ready architecture
* Environment-based configuration
* Nodemon / TSX for development
* ESLint

---

## 📁 Project Structure

```
ai-site-builder/
├── client/        # React + Vite frontend
├── server/        # Express + TypeScript backend
└── README.md
```

---

# ⚙️ Local Development Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/rajpratap29/ai-website-builder.git
cd ai-website-builder
```

---

## 🔧 Backend Setup

```bash
cd server
npm install
```

### ▶️ Run in Development

```bash
npm run server
```

### ▶️ Run in Production

```bash
npm run build
npm start
```

---

### 🔐 Backend Environment Variables

Create a `.env` file inside `server/`:

```env
TRUSTED_ORIGINS=http://localhost:5173
PORT=3000

DATABASE_URL=your_postgres_connection_string

BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

NODE_ENV=development

AI_API_KEY=your_ai_api_key

STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

---

## 🎨 Frontend Setup

```bash
cd client
npm install
```

### ▶️ Start Development Server

```bash
npm run dev
```

### ▶️ Build for Production

```bash
npm run build
npm run preview
```

---

### 🌐 Frontend Environment Variables

Create a `.env` file inside `client/`:

```env
VITE_BASEURL=http://localhost:3000
```

---

# 🧪 Available Scripts

## Backend

| Script           | Purpose                          |
| ---------------- | -------------------------------- |
| `npm run server` | Start dev server with hot reload |
| `npm run build`  | Compile TypeScript               |
| `npm start`      | Run production build             |

## Frontend

| Script            | Purpose                  |
| ----------------- | ------------------------ |
| `npm run dev`     | Start Vite dev server    |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

# 🔒 Security Notes

* Never commit real `.env` files
* Always rotate exposed secrets
* Use environment-specific configs in production
* Validate all external inputs

---

# 🚀 Future Improvements

* Async job queue for AI processing
* Rate limiting & abuse protection
* WebSocket live progress updates
* Caching layer (Redis)
* Observability & metrics

---

# 👨‍💻 Author

**Raj Pratap**

* GitHub: https://github.com/rajpratap29
* LinkedIn: https://linkedin.com/in/rajpratap29

---

⭐ If you found this project interesting, consider giving it a star!
