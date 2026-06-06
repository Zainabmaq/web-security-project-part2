# 🔐 Advanced Web Application Security Project
## Weeks 4, 5 & 6 — Complete Security Implementation

**Student:** Zainab Maqbool  
**Deadline:** 9th June, 2026  
**Repo:** https://github.com/Zainabmaq/web-security-project-part2

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

### How to Test CSRF:
1. Run server: `node server.js`
2. Open ZAP → Automated Scan → http://localhost:4000
3. HTTP History → POST request → Generate CSRF PoC
4. Open PoC → Server returns 403 ✅

---

## 🔍 Week 6 — Security Audits & Deployment

### Tools Used:
| Tool | Result |
|------|--------|
| OWASP ZAP | 0 alerts — application passed ✅ |
| Nikto | Minor headers fixed via helmet ✅ |
| Lynis | 279 tests — firewall & IDS active ✅ |
| Docker | Non-root user, Alpine image ✅ |

### Run Security Scans:
```bash
# Nikto
nikto -h http://localhost:4000 -o nikto_report.html -Format html

# Lynis
sudo lynis audit system

# Docker build
sudo docker build -t security-app .
```

---

## ⭐ Bonus Challenges

### 1. Zero Trust Security
- JWT tokens (1 hour expiry)
- API Key verification on every request
- Role-Based Access Control (admin/user)
- Input validation & sanitization

### 2. Web Application Firewall (WAF)
- ModSecurity v2.9.13 installed
- OWASP Core Rule Set 3.3.9 enabled
- SecRuleEngine: ON (active blocking)

### 3. Social Engineering Simulation
- Phishing awareness training page
- Fake login → awareness message
- No data collected — educational only

---

## 🚀 Setup & Run

```bash
git clone https://github.com/Zainabmaq/web-security-project-part2.git
cd web-security-project-part2
npm install
node server.js
```

Server runs at: http://localhost:4000

---

## 📊 OWASP Top 10 Compliance

| Risk | Status |
|------|--------|
| A01 Broken Access Control | ✅ |
| A02 Cryptographic Failures | ✅ |
| A03 Injection | ✅ |
| A04 Insecure Design | ✅ |
| A05 Security Misconfiguration | ✅ |
| A07 Auth Failures | ✅ |
| A10 SSRF | ✅ |

---

*For educational purposes only. All testing performed on locally hosted applications.*
