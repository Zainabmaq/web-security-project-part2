# 🔐 Advanced Web Application Security Project
## Weeks 4, 5 & 6 — Complete Security Implementation

---

## 📁 Project Files

| File | Description |
|------|-------------|
| server.js | Main Express server with all security middleware |
| zero-trust.js | Zero Trust — JWT + API Key + RBAC |
| Dockerfile | Docker security — non-root user, Alpine image |
| fail2ban-jail.local | Fail2Ban intrusion detection config |
| waf-setup.md | ModSecurity WAF configuration |
| nikto_report.html | Week 6 — Nikto scan report |
| lynis_report.txt | Week 6 — Lynis system audit |
| 2026-06-06-ZAP-Report-.html | Week 5 — OWASP ZAP scan report |
| social-engineering/ | Bonus — Phishing awareness simulation |

---

## 🛡️ Week 4 — API Security & Threat Detection

- ✅ **Fail2Ban** — Blocks IPs after 3 failed SSH attempts (10 min ban)
- ✅ **Rate Limiting** — Max 5 login attempts per 15 minutes
- ✅ **CORS** — Restricted to trusted origin only
- ✅ **Security Headers** via Helmet.js:
  - Content-Security-Policy (CSP)
  - Strict-Transport-Security (HSTS) — 1 year
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff

---

## ⚔️ Week 5 — Ethical Hacking & Vulnerability Fixes

- ✅ **Reconnaissance** — OWASP ZAP Spider (3 URLs discovered)
- ✅ **CSRF Testing** — ZAP CSRF PoC generated and tested
- ✅ **CSRF Fix** — csurf middleware (403 on invalid token)
- ✅ **SQL Injection** — SQLMap scan performed
- ✅ **SQLi Fix** — Parameterized queries applied

---

## 🔍 Week 6 — Security Audits & Deployment

| Tool | Result |
|------|--------|
| OWASP ZAP | 0 alerts — application passed ✅ |
| Nikto | Minor headers fixed via helmet ✅ |
| Lynis | 279 tests — firewall & IDS active ✅ |
| Docker | Non-root user, Alpine image ✅ |

---

## ⭐ Bonus Challenges

### Zero Trust Security
- JWT tokens (1 hour expiry)
- API Key verification on every request
- Role-Based Access Control (admin/user)

### Web Application Firewall (WAF)
- ModSecurity v2.9.13 with OWASP CRS 3.3.9
- SecRuleEngine: ON (active blocking)

### Social Engineering Simulation
- Phishing awareness training page
- Fake login → awareness message shown
- No data collected — educational only

---

## 🚀 Setup & Run

```bash
npm install
node server.js
```

Server runs at: http://localhost:4000
