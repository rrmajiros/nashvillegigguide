# Email Subscription Setup for NashvilleGigGuide.com

## Current Status
The website is deployed at: https://www.nashvillegigguide.com

Email subscription form is working, but emails are stored in-memory on Vercel (temporary).

## To Get Emails Directly Into Your SQLite Database:

### Option 1: Local Webhook Server (Recommended)
1. **Run the webhook server on your machine:**
   ```bash
   cd /Users/ron/.openclaw/workspace
   python3 scripts/email_webhook.py
   ```
   Server runs on http://localhost:8080

2. **Make it publicly accessible:**
   - **Option A: ngrok (free, but URL changes)**
     ```bash
     ngrok http 8080
     ```
     Copy the ngrok URL (e.g., https://abc123.ngrok.io)
   
   - **Option B: Cloudflare Tunnel (free, persistent)**
     ```bash
     # Install cloudflared
     brew install cloudflared
     cloudflared tunnel --url http://localhost:8080
     ```

3. **Update the website:**
   Edit `public/index.html` line ~450, change:
   ```javascript
   const WEBHOOK_URL = '/api/subscribe';
   ```
   To your public URL:
   ```javascript
   const WEBHOOK_URL = 'https://your-url.ngrok.io';
   ```

4. **Redeploy to Vercel**

### Option 2: Manual Collection (Simplest)
1. Emails are captured by the website (in-memory on Vercel)
2. Periodically check the Vercel logs for captured emails
3. Manually add to database using:
   ```bash
   cd /Users/ron/.openclaw/workspace
   sqlite3 data/ozzy_memory.db
   INSERT INTO email_subscribers (email, source, subscribed_at) 
   VALUES ('user@example.com', 'nashvillegigguide', datetime('now'));
   ```

### Option 3: Airtable Integration (Future)
1. Get write access to Airtable
2. Update website to write directly to Airtable
3. Create sync script from Airtable to SQLite

## Database Schema
Emails are stored in `email_subscribers` table:
```sql
CREATE TABLE email_subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    source TEXT DEFAULT 'nashvillegigguide',
    confirmed BOOLEAN DEFAULT 0,
    confirmed_at TIMESTAMP,
    metadata TEXT
);
```

## Quick Test
To test the webhook server:
```bash
curl -X POST http://localhost:8080 \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User"}'
```

## Next Steps
1. Choose an option above
2. Implement show scraper for real Nashville data
3. Expand studio directory
4. Follow up with radio-active artists