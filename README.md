Banking Dashboard - Full-Stack Sample (React + Node.js + AWS-ready)
==================================================================

Overview
--------
This is a compact, recruiter-friendly sample project designed to showcase
skills relevant to Capital One's New Grad Software Engineer role:
  - Frontend: React (simple UI)
  - Backend: Node.js + Express (REST API)
  - Dev: Git, npm scripts, basic testing hints, CI/CD guidance (GitHub Actions)
  - Cloud readiness: tips to deploy backend as AWS Lambda + API Gateway or EC2

What you'll find
----------------
- backend/: Express app exposing /api/transactions endpoints (GET, POST)
- frontend/: React app that calls the API and displays transactions
- README files with run & deploy instructions
- GitHub Actions sample workflow (CI skeleton) included in backend/.github

How to use
----------
1. Download and unzip Banking-Dashboard.zip
2. Open two terminals:
   - Terminal A: cd backend && npm install && npm run dev
   - Terminal B: cd frontend && npm install && npm run dev
3. Open the frontend URL (http://localhost:3000 or as printed) and test.

How to push to GitHub (example)
------------------------------
git init
git add .
git commit -m "Initial: Banking Dashboard sample"
git branch -M main
git remote add origin https://github.com/<your-username>/Banking-Dashboard.git
git push -u origin main

Notes for recruiters
--------------------
- This repository contains clear READMEs and a simple CI skeleton.
- For production/cloud deployment, follow the instructions in backend/README.md
- Consider adding tests, integration with DynamoDB or RDS, and converting backend into serverless functions (AWS Lambda) for extra match with job description.
