# ProGen Advance Insilico Solutions LLP

> **Official Website & Digital Scientific Presence**  
> Accelerating Drug Discovery & Genomic Insights Through Advanced Computation.  
> LLPIN: **ACK-9754** | Allahabad, Uttar Pradesh, India

---

## 🔬 Project Overview

This repository contains the complete, production-ready, multi-page scientific website for **ProGen Advance Insilico Solutions LLP**, built using pure **HTML5, CSS3, and Vanilla JavaScript (ES6+)**.

- **No Frameworks or Bundlers:** Zero runtime or build-time dependencies (No React, Vue, Angular, Node.js, or Webpack).
- **GitHub Pages Ready:** Operates seamlessly as static HTML either on the custom domain (`progenadvance.com` / `www.progenadvance.com`) or any GitHub Pages repository subpath (`username.github.io/repo-name/`).
- **Faithful to Primary Sources:** All technical claims, case studies, methodologies, and corporate details are directly drawn from the official company brochure (`ProGen_Advance_Insilico_Solutions_Brochure_12.pdf`) and official brand assets (`logo.png`).

---

## 📁 Repository Structure

```text
├── index.html                   # Homepage (Hero, Telemetry, Services, Research Highlights)
├── about.html                   # About ProGen, Mission, Vision, Pillars, Scientific Governance
├── services.html                # Detailed Technical Scope across 4 Core Service Areas
├── research.html                # 4 Case Studies (Dengue RdRp, CETP, Neoantigens, TNBC Dual Target)
├── approach.html                # Unified 5-Stage Scientific Research Workflow & Commitments
├── collaboration.html           # 6 Life Science Sector Models & Science-First Philosophy
├── contact.html                 # Contact Information, LLPIN, and Consultation Inquiry Form
├── 404.html                     # Branded 404 Not Found Page
├── favicon.svg                  # Brand Hexagonal Vector Favicon
├── site.webmanifest             # Web Application Manifest
├── sitemap.xml                  # XML Sitemap for Search Engine Crawlers
├── robots.txt                   # Search Engine Directive
├── logo.png                     # Official High-Resolution Master Brand Logo (Preserved)
├── ProGen_Advance_..._12.pdf    # Official Company Brochure PDF (Preserved)
└── assets/
    ├── css/
    │   └── style.css            # Modular CSS tokens, typography, layouts, animations
    ├── js/
    │   └── main.js              # Accessible mobile drawer, active nav, modal, honest form handler
    └── images/
        ├── logo-nav.png         # Optimized transparent navbar brand mark
        ├── logo-white-text.png  # White-text logo variant for dark backgrounds
        ├── favicon-32x32.png    # High-DPI browser icon
        ├── favicon-192x192.png  # Web application icon
        ├── hero-molecular-interaction.jpg # Ray-traced molecular telemetry visual
        ├── figure-dengue-rdrp-mechanism.jpg # Dengue RdRp target structure & MM/GBSA chart
        ├── figure-cetp-pharmacophore-md.jpg # CETP pharmacophore, 3D tunnel & MD trajectory
        ├── figure-neoantigen-workflow.jpg   # Neoantigen prediction & peptide-MHC workflow
        └── figure-ezh2-egfr-dual-target.jpg # TCGA survival curve & dual-target interaction
```

---

## 🚀 Local Preview

Because this project is built entirely with static files, you can preview it immediately without installing any packages:

### Option A: Using Python (Built-in)
```bash
# In the project root directory:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option B: Direct File Opening
Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari. All asset and internal navigation links are relative and resolve immediately.

---

## 🌐 GitHub Pages Deployment Guide

Deploying this website to GitHub Pages takes less than two minutes:

### Step 1: Push Code to GitHub
1. Create a repository on GitHub (e.g., `progenadvance` or `progenadvance.github.io`).
2. Push this project folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of ProGen Advance scientific website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` / folder `/(root)`.
4. Click **Save**.
5. Wait 30–60 seconds. GitHub will display:  
   *"Your site is live at `https://<your-username>.github.io/<your-repo>/`"*.

---

## 🔒 Custom Domain Configuration (`progenadvance.com`)

To connect the live website to your official domain **progenadvance.com**:

### 1. Configure Custom Domain in GitHub Pages
1. In repository **Settings → Pages**:
2. Under **Custom domain**, enter: `progenadvance.com`
3. Click **Save**. (GitHub will automatically create a `CNAME` file or commit).
4. Check the box for **Enforce HTTPS** (available once DNS propagation completes).

### 2. Configure DNS Records with Your Domain Registrar
Log in to your DNS management console (e.g., GoDaddy, Namecheap, Cloudflare, Google Domains) and configure the following records:

#### A Records (Apex Domain: `@` or `progenadvance.com`):
Point `@` to GitHub Pages IP addresses:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

#### CNAME Record (Subdomain: `www`):
- **Host / Name:** `www`
- **Target / Value:** `<your-username>.github.io`

> [!CAUTION]
> ### ⚠️ CRITICAL: Preserve Existing Email DNS Records!
> Do **NOT** delete, replace, or overwrite existing mail records when configuring web hosting! Your business emails (`contact@progenadvance.com`) depend on:
> - **MX Records:** (e.g., Google Workspace, Microsoft 365, or Zoho Mail servers)
> - **TXT Records for SPF:** (e.g., `v=spf1 include:... ~all`)
> - **TXT / CNAME Records for DKIM:** (DomainKeys Identified Mail)
> - **TXT Records for DMARC:** (`_dmarc.progenadvance.com`)
> 
> *Only add or update the `A` and `www` `CNAME` web hosting records. Leave all `MX`, `SPF`, `DKIM`, and `DMARC` records untouched.*

---

## 📋 Post-Launch Configuration Checklist

- [ ] **Formspree / External Form Handler:**
  - Create a free form at [formspree.io](https://formspree.io).
  - Open `contact.html` and locate line 192:  
    `action="https://formspree.io/f/YOUR_FORM_ID"`
  - Replace `YOUR_FORM_ID` with your actual Formspree ID (e.g., `f/xpznvqwe`).
  - *Note:* Until configured, the form client script honestly notifies the user and provides an automatic prefilled `mailto:` fallback directly to `contact@progenadvance.com` and `progenadvance@gmail.com`.
- [ ] **Domain DNS Verification:**
  - Verify `progenadvance.com` resolves to GitHub Pages IPs.
  - Enable **Enforce HTTPS** in GitHub Pages Settings.
- [ ] **Email Receipt Check:**
  - Send a test email to `contact@progenadvance.com` to confirm your mail hosting is active.

---

## 🏛️ Company Legal Information

- **Company Name:** ProGen Advance Insilico Solutions LLP
- **LLPIN:** ACK-9754
- **Registered Office:** 746/95/126, Sohbatiyabagh, Allahabad – 211006, Uttar Pradesh, India
- **Official Email:** [contact@progenadvance.com](mailto:contact@progenadvance.com)
- **Secondary Email:** [progenadvance@gmail.com](mailto:progenadvance@gmail.com)
- **Phone:** [+91-7388953066](tel:+917388953066)
- **Target Domain:** [progenadvance.com](https://progenadvance.com)
