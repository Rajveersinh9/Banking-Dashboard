Backend (Node.js + Express)
===========================

Quick Start (local)
-------------------
1. cd backend
2. npm install
3. npm run dev   # starts with nodemon; or npm start

Endpoints
---------
GET  /api/transactions     - list transactions
POST /api/transactions     - add a transaction (JSON body: date, description, amount)
GET  /health               - health check

Production & AWS notes
----------------------
- To convert this to AWS Lambda: use Serverless framework or AWS Lambda Node adapter.
- For persistence use DynamoDB or RDS instead of the in-memory array.
- Configure IAM roles for secure access and CloudWatch for logs.
- Add unit tests (e.g., Jest) and integration tests before any production deployment.

CI/CD
-----
- A sample GitHub Actions workflow skeleton can be added to .github/workflows/ci.yml
- The workflow should run lint, unit tests, and optionally build & deploy to a staging environment.
