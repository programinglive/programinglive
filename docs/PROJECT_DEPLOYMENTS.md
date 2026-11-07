# ProgramingLive Canonical Domain & Deployment Registry

This register is the authoritative, canonical index for all domains, web applications, background services, and infrastructure topology across the ProgramingLive ecosystem.

All engineers and automated agents MUST consult this register before creating, updating, or deleting any DNS records or deployment configurations.

---

## 1. Public Web Fleet — Netlify (`75.2.60.5`)

All sites in this tier are hosted on Netlify, served under the Netlify global edge network, and mapped to Cloudflare A records (`75.2.60.5`) or CNAMEs:

| Subdomain | Netlify Site Name | Repository | Status & Purpose |
| :--- | :--- | :--- | :--- |
| `programinglive.com` / `www` | `programingliveweb` | `programinglive/programinglive` | **Active Core**. Main bilingual platform website (Next.js 16). |
| `commiter.programinglive.com` | `commiter` | `programinglive/commiter` | **Active Core**. Documentation and landing page for `@programinglive/commiter`. |
| `sentryresolve.programinglive.com` | `sentry-resolve` | `programinglive/sentry-resolve` | **Active Core**. Documentation and landing page for `sentry-resolve` CLI. |
| `portfolio.programinglive.com` | `programingliveportfolio` | Private | **Active Core**. Mahatma Mahardhika professional portfolio and founder profile. |
| `laravelsimplebackup.programinglive.com` | `laravelsimplebackup` | `programinglive/laravel-simple-backup` | **Active Core**. Documentation for the Laravel database backup package. |
| `zettly-editor.programinglive.com` | `zettly-editor` | Private | **Active Core**. Web demo and interactive editor component for Zettly. |
| `comingsoon.programinglive.com` | `programinglivecomingsoon` | Private | **Active Core**. Standard placeholder & teaser landing page for upcoming projects. |

---

## 2. Production Applications — GCP Load Balancer (`34.160.181.191`)

These applications run on dedicated Google Cloud Compute Engine virtual machines (`bw-server-clean` / `docker-alma` / `n8n-instance`) behind the static GCP Load Balancer IP:

| Subdomain | Origin Instance | Stack | Status & Purpose |
| :--- | :--- | :--- | :--- |
| `belajar.programinglive.com` | `bw-server-clean` | Laravel, PHP 8.3, MariaDB, Nginx | **Active Core**. Learning management system and course platform. |
| `factory.programinglive.com` | `bw-app` / `n8n-instance` | Next.js, SQLite, Systemd | **Active Core**. ProgramingLive Software Factory workflow manager. |
| `zettly.programinglive.com` | `bw-server-clean` | Laravel, Livewire, PostgreSQL 16 | **Active Core**. Knowledge management, Zettelkasten todos, and visual draw canvases. |
| `n8n.programinglive.com` | `n8n-instance` / `bw-app` | Node.js, n8n, Systemd | **Active Core**. Automation and webhook orchestrator. |
| `pocketbase.programinglive.com` | `n8n-instance` / `bw-app` | PocketBase (Go), SQLite | **Active Core**. Auth and activity journal database backend. |
| `hris.programinglive.com` | `bw-server-clean` | PHP-FPM, MySQL | **Active Core**. HRIS operational platform. |
| `bot.programinglive.com` | `bw-server-clean` | Static HTML, Nginx | **CRITICAL LOCKED**. Serves official Terms of Service (`/api/terms`) and Privacy Policy (`/api/privacy`) for Discord Verified Bot "BOTOL" (`1565010979186544720`). **DO NOT DELETE**. |

---

## 3. Internal Tunnels & Edge Services

| Subdomain | Type & Target | Access Level | Status & Purpose |
| :--- | :--- | :--- | :--- |
| `coffeelab.programinglive.com` | CNAME `...cfargotunnel.com` | Cloudflare Access Protected | **Active**. CoffeeLab Web Studio tunnel on workstation `MMCH`. |
| `blog.programinglive.com` | CNAME `ghs.google.com` | Public | **Active**. Official ProgramingLive publication blog on Google Blogger (`5381489752564084710`). |
| `brain.programinglive.com` | AAAA `100::` (CF Edge) | Cloudflare Access (Owner Only) | **Active**. Reading Library web application built with Expo / React Native Web. |
| `jurnal.programinglive.com` | AAAA `100::` (CF Edge) | Password Protected | **Active**. Kompas — Activity Journal dashboard connected to PocketBase. |

---

## 4. Decommissioned & Pruned Domains (Do Not Re-create)

The following domains have been audited, retired, and completely removed from Cloudflare DNS and web hosting:
- `devworkflow.programinglive.com`: Netlify site deleted; Dev Workflow MCP is now a private internal engineering tool.
- `devwfshare.programinglive.com`: Public session sharing tunnel decommissioned.
- `video.programinglive.com`: Stale Google Hosted CNAME removed (returned 404).
- `hristemplate.programinglive.com`: Stale GitHub Pages CNAME removed (returned 404).
- `carousel.programinglive.com`: Stale Vercel Instagram generator removed.

---

## 5. Email Infrastructure (Zoho Mail)

The apex domain `programinglive.com` relies on Zoho Mail for enterprise email services. Never delete or modify these records:
- MX: `mx.zoho.com` (Priority 10), `mx2.zoho.com` (Priority 20), `mx3.zoho.com` (Priority 50)
- TXT: SPF (`v=spf1 include:zoho.com ~all`)
- TXT: DKIM (`zoho._domainkey.programinglive.com`)
- TXT: Zoho Domain Verification

---

## 6. Operations & Server Access

Connect to the primary production server via Tailscale or GCP IAP:

```powershell
# Primary access via Tailscale SSH
ssh root@100.107.65.21

# Fallback via GCP IAP SSH
gcloud compute ssh mahatmamahardhika200588@gmail.com@bw-server-clean --project=winged-ratio-344917 --zone=asia-southeast2-a --tunnel-through-iap
```
