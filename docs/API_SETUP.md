# Sports API setup (read-only fixtures)

1. Configure a licensed cricket data provider and confirm your plan includes the competitions and live fields required.
2. Put the provider token in `backend/.env` as `SPORTMONKS_API_TOKEN`. Never expose it in frontend code.
3. Set `SPORTMONKS_BASE_URL` if your provider requires a different API base.
4. Restart the backend and call `GET /api/sports/fixtures`.
5. This adapter currently returns fixtures and scoreboards only; it does not implement delivery-by-delivery streaming.

This integration displays sports information only. It does not calculate odds, accept wagers, or settle bets.