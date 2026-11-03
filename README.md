# 247 Platform — play-credit prototype

A responsive React/Vite client and Express/MongoDB API inspired by the supplied screenshots.

## Important scope
This repository is a **play-credit/demo platform only**. It has no deposits, withdrawals, cash wagering, cashout, or real-money settlement. Game tiles are demo placeholders and must not be represented as real-money games. Live sports data is read-only and is never treated as a betting/odds feed.

## Structure
- `frontend/` — React UI: sign-in, dashboard, in-play fixtures, profile, ledger, demo games and admin screens.
- `backend/` — Express API, JWT authentication, MongoDB models, admin client-code generation, read-only sports feed adapter.
- `docs/API_SETUP.md` — where to configure a licensed sports data provider.

## Requirements
- Node.js 20+
- MongoDB Atlas or local MongoDB

## Run locally
1. Backend: `cd backend && cp .env.example .env && npm install && npm run seed:admin && npm run dev`
2. Frontend: `cd frontend && cp .env.example .env && npm install && npm run dev`
3. Open `http://localhost:5173`.

Seeded admin credentials are printed by `npm run seed:admin`. Change them immediately. Never commit `.env`.
