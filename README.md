# Banking Dashboard

A full-stack **Banking Dashboard Demo** showcasing frontend + backend integration, built as part of a portfolio project.

## 🚀 Tech Stack
- **Frontend**: Vanilla JS (React-ready), served with Express
- **Backend**: Node.js + Express REST API
- **Database**: In-memory store (demo-ready, can be upgraded to MongoDB/DynamoDB)
- **CI/CD**: GitHub Actions (sample workflow included)
- **Deployment**: Localhost, AWS-ready

## 📂 Features
- View banking transactions
- Add new transactions with date, description, and amount
- Positive/negative transaction styling
- REST API with `/api/transactions` and `/health` endpoints
- Separate `frontend/` and `backend/` apps

## ▶️ Running Locally

### 1. Backend
```bash
cd backend
npm install
npm run dev
Backend runs on http://localhost:4000
```
### 2. Frontend
```bash
cd frontend
npm install
npm run dev
Frontend runs on http://localhost:3000
```

