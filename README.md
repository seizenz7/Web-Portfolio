# Web-Portfolio — Aditya Indra Wisnu

> **DevOps Engineer Portfolio** — A single-page, interactive portfolio built with React 18, TypeScript, Three.js, and Tailwind CSS. Features an animated 3D galaxy background (WebGL), glassmorphism UI, and smooth section-based navigation via a floating command dock.

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker)](https://docker.com)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Configuration](#-configuration)
- [Component Reference](#-component-reference)
  - [Layout Components](#layout-components)
  - [Section Components](#section-components)
  - [Types & Hooks](#types--hooks)
- [Build System](#-build-system)
- [Docker & Containerization](#-docker--containerization)
  - [Multi-Stage Dockerfile](#multi-stage-dockerfile)
  - [Nginx Configuration](#nginx-configuration)
  - [Building & Running the Container](#building--running-the-container)
- [Deployment Guide](#-deployment-guide)
  - [Static Hosting (dist/)](#static-hosting-dist)
  - [Git-Based Auto-Deploy](#git-based-auto-deploy)
  - [Self-Hosted / Traditional Server](#self-hosted--traditional-server)
- [Portfolio Sections](#-portfolio-sections)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## 🌐 Overview

This portfolio is a **fully static Single-Page Application (SPA)** designed to showcase the DevOps engineering skills, projects, and professional identity of **Aditya Indra Wisnu**. It is built without a backend — all content is embedded at build time.

Key design decisions:

| Decision | Choice | Rationale |
|---|---|---|
| Bundler | **esbuild** | Extremely fast builds; no Vite/Webpack overhead |
| Routing | **React Router (HashRouter)** | Static-file compatible; no server-side routing needed |
| 3D Background | **@react-three/fiber + Three.js** | Hardware-accelerated WebGL constellation network |
| Animation | **Motion (Framer Motion)** | Declarative spring-physics animations |
| Styling | **Tailwind CSS 3** + custom CSS | Utility-first with dark-mode glassmorphism tokens |
| Container | **nginx:1.27-alpine** (non-root) | Minimal, secure production server |

---

## ✨ Features

- 🌌 **Interactive 3D Galaxy Background** — WebGL constellation network of 180 nodes + 800 ambient dust particles, responding to pointer drag with parallax rotation
- 🧭 **Floating Command Dock** — Glassmorphism bottom navigation bar with smooth spring animations and a shared layout-id glow indicator
- 📄 **7 Portfolio Sections** — Hero, Personal Branding, About, Skills & Tools, Projects, Contact, and Reflection
- 🎠 **Project Carousel** — Slide-based project showcase with spring-animated transitions and pagination dots
- 🃏 **Glassmorphism Cards** — Backdrop-blur panels with dynamic neon border glow on hover
- ⚡ **Animated Section Transitions** — `AnimatePresence` fade + slide between sections
- 📱 **Fully Responsive** — Mobile-first layout adapting from small screens to large displays
- 🔒 **Secure Nginx Config** — Security headers, Gzip compression, long-term asset caching, SPA fallback, `/healthz` probe endpoint, hidden-file blocking
- 🐳 **Production-Ready Docker Image** — Multi-stage build; runs as non-root `nginx` user

---

## 🏗 Architecture

```
┌───────────────────────────────────────────────────────────────┐
│  Browser                                                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  index.html (HashRouter entry)                           │   │
│  │  ┌──────────────────────────────────────────────────┐   │   │
│  │  │  App.tsx                                          │   │   │
│  │  │  └── HomePage (pages/Home.tsx)                   │   │   │
│  │  │       ├── GalaxyBackground (Three.js / WebGL)    │   │   │
│  │  │       ├── <main> — AnimatePresence section slot  │   │   │
│  │  │       │    └── [Active Section Component]        │   │   │
│  │  │       └── CommandDock (floating nav)             │   │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────────┘
         │ serves static files
┌────────┴──────────────────────────────────────────────────────┐
│  Nginx 1.27-alpine (port 8080, non-root)                       │
│  ├── /usr/share/nginx/html  ← dist/                            │
│  ├── /healthz               ← liveness probe                   │
│  ├── Gzip compression       ← all text assets                  │
│  ├── Cache-Control: immutable ← hashed JS/CSS/fonts/images     │
│  └── try_files → index.html ← SPA fallback                     │
└───────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
Web-Portfolio/
├── src/
│   ├── main.tsx                      # React entry point — mounts <App /> to #app
│   ├── App.tsx                       # Root router (HashRouter + Routes)
│   ├── shadcn.css                    # Shadcn/UI CSS variable tokens (dark mode base)
│   ├── types/
│   │   └── sections.ts               # SectionId union type + SECTION_ORDER constant
│   ├── hooks/
│   │   ├── use-mobile.tsx            # Responsive breakpoint hook
│   │   └── use-toast.ts              # Toast notification hook
│   ├── lib/
│   │   └── utils.ts                  # cn() utility (clsx + tailwind-merge)
│   ├── pages/
│   │   └── Home.tsx                  # Main page — orchestrates all sections + navigation
│   └── components/
│       ├── layout/
│       │   ├── GalaxyBackground.tsx  # Three.js WebGL background (NetworkConstellation)
│       │   └── CommandDock.tsx       # Bottom floating navigation dock
│       ├── sections/
│       │   ├── index.tsx             # Barrel export for all section components
│       │   ├── HeroSection.tsx       # Welcome / onboarding section
│       │   ├── ExperienceSection.tsx # Personal Branding Mapping (5 cards)
│       │   ├── AboutSection.tsx      # Bio, career goals, philosophy, skills
│       │   ├── TechStackSection.tsx  # Tech clusters with proficiency badges
│       │   ├── ProjectsSection.tsx   # Project carousel (3 projects)
│       │   ├── ContactSection.tsx    # Contact links (Email, LinkedIn, GitHub, GitLab)
│       │   └── ReflectionSection.tsx # Personal growth reflection cards
│       └── ui/                       # Shadcn/UI primitives (accordion, dialog, etc.)
├── scripts/
│   └── build.mjs                     # esbuild config: dev server + production bundler
├── dist/                             # 🏗 Build output (gitignored)
│   ├── index.html
│   ├── main.js                       # Bundled + minified React app
│   └── main.css                      # Compiled + purged Tailwind CSS
├── index.html                        # HTML template (esbuild entry)
├── nginx.conf                        # Production Nginx server block
├── Dockerfile                        # Multi-stage Docker image
├── .dockerignore                     # Docker build context exclusions
├── tailwind.config.js                # Tailwind theme + dark mode config
├── tsconfig.json                     # TypeScript compiler options
├── package.json                      # Dependencies & build scripts
└── .releaserc.json                   # Semantic Release configuration
```

---

## 🛠 Tech Stack

### Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | UI framework |
| `react-dom` | ^18.3.1 | DOM renderer |
| `react-router` | ^7.5.3 | Client-side routing (HashRouter) |
| `motion` | ^12.17.0 | Animations (Framer Motion v12 API) |
| `three` | ^0.169.0 | 3D WebGL rendering engine |
| `@react-three/fiber` | ^8.17.10 | React renderer for Three.js |
| `@react-three/drei` | ^9.114.0 | Three.js helpers (Points, PointMaterial) |
| `lucide-react` | ^0.503.0 | Icon library |
| `tailwind-merge` | ^3.2.0 | Tailwind class deduplication |
| `clsx` | ^2.1.1 | Conditional class names |

### Dev Dependencies / Build Tools

| Package | Version | Purpose |
|---|---|---|
| `esbuild` | 0.25.4 | JavaScript bundler |
| `esbuild-style-plugin` | ^1.6.3 | CSS processing pipeline for esbuild |
| `tailwindcss` | ^3.4.17 | Utility-first CSS framework |
| `postcss` | ^8.5.3 | CSS post-processing |
| `autoprefixer` | ^10.4.21 | Vendor-prefix injection |
| `rimraf` | ^6.0.1 | Cross-platform dist/ cleanup |
| `typescript` (via `@types/*`) | ^19.x | Static type checking |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20 (LTS recommended)
- **npm** ≥ 9 (comes with Node.js)
- **Docker** (optional, for containerized deployment)

Verify your environment:

```bash
node --version   # v20.x.x or higher
npm --version    # 9.x.x or higher
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Web-Portfolio

# Install all dependencies (including devDependencies)
npm install
```

### Development Server

Starts esbuild in watch mode with a live-reload dev server:

```bash
npm run dev
```

The terminal will print the local address(es), typically:

```
Running on:
http://0.0.0.0:8000
http://127.0.0.1:8000
```

> **Note:** The development build includes source maps and is **not minified**. Changes to any file in `src/` will automatically trigger a rebuild and browser reload via the `/esbuild` EventSource.

### Production Build

Compiles, bundles, tree-shakes, and minifies the application:

```bash
npm run build
```

Output is written to `dist/`:

```
dist/
├── index.html   # HTML template
├── main.js      # Minified JS bundle (~3.5 MB before gzip)
└── main.css     # Purged + minified CSS (~104 KB before gzip)
```

---

## ⚙️ Configuration

### Environment: Development vs Production

The build mode is controlled by the `--production` CLI flag inside [`scripts/build.mjs`](scripts/build.mjs):

| Feature | Development | Production |
|---|---|---|
| Source maps | `linked` | Disabled |
| Minification | No | Yes |
| Tree-shaking | Yes | Yes |
| File watching | Yes (watch mode) | No |
| Dev server | Yes (esbuild serve) | No |

### TypeScript (`tsconfig.json`)

- **Target:** `ES2017` (broad browser compatibility)
- **Module resolution:** `bundler` (esbuild-native)
- **Strict mode:** enabled
- **JSX:** preserved (handled by esbuild with `jsx: 'automatic'`)
- **Path alias:** `@/*` → `./src/*`

### Tailwind (`tailwind.config.js`)

- **Dark mode:** `class` strategy (`.dark` on `<html>`)
- **Content scan:** `./src/**/*.{html,js,ts,jsx,tsx}`
- **CSS variables:** Shadcn/UI design token system (`--background`, `--primary`, etc.)
- **Animations:** `tailwindcss-animate` plugin (accordion transitions)

---

## 📦 Component Reference

### Layout Components

#### `GalaxyBackground` — [`src/components/layout/GalaxyBackground.tsx`](src/components/layout/GalaxyBackground.tsx)

Renders a full-viewport, pointer-events-none WebGL canvas fixed behind all content.

| Prop | Type | Description |
|---|---|---|
| `pointer` | `GalaxyPointer` | `{ x: number, y: number }` — accumulated drag delta driving parallax rotation |

**Internal: `NetworkConstellation`**

- Generates **180 nodes** in cylindrical distribution (radius 5–17, y ±7.5)
- Connects nodes within **3.5 unit distance** with `lineSegments` (cyan, 15% opacity)
- Adds **800 ambient dust particles** in a larger spread (purple, 40% opacity)
- Animates via `useFrame`: base rotation Y at 0.03 rad/s + `sin`-based X oscillation + pointer parallax

**Exported interfaces:**
```typescript
export interface GalaxyPointer { x: number; y: number }
export interface GalaxyBackgroundProps { pointer: GalaxyPointer }
```

---

#### `CommandDock` — [`src/components/layout/CommandDock.tsx`](src/components/layout/CommandDock.tsx)

A floating frosted-glass navigation bar anchored at the bottom of the viewport.

| Prop | Type | Description |
|---|---|---|
| `activeSection` | `SectionId` | Currently active section — drives glow indicator position |
| `onNavigate` | `(section: SectionId) => void` | Navigation callback |

**Navigation items (in dock order):**

| Icon | Label | Section ID |
|---|---|---|
| `Home` | Home | `home` |
| `Fingerprint` | Branding | `experience` |
| `User` | About | `about` |
| `Orbit` | Skills & Tools | `stack` |
| `Layers` | Projects | `projects` |
| `BookOpen` | Reflection | `reflection` |
| `Send` | Contact | `contact` |

Active item uses `layoutId="dockGlow"` for shared-element spring transition of the gradient background pill.

---

### Section Components

All section components are exported from [`src/components/sections/index.tsx`](src/components/sections/index.tsx).

#### `HeroSection` — [`src/components/sections/HeroSection.tsx`](src/components/sections/HeroSection.tsx)

| Prop | Type | Description |
|---|---|---|
| `onNavigate` | `(section: SectionId) => void` | Used by CTA buttons |

**Content:**
- Status badge: "Open to Opportunities" with animated ping dot
- Name with animated `galaxy-shimmer` gradient text
- 2 Quick-nav cards → Personal Branding & Project Showcase
- 2 CTA buttons → "Start Exploring" (→ experience) & "Get in Touch" (→ contact)

---

#### `ExperienceSection` — Personal Branding Mapping

5 glassmorphism cards in a responsive grid (1→2→3→5 columns):

| Card | Icon | Gradient |
|---|---|---|
| Target Role / Career | Target | cyan → teal |
| Main Skill | Code2 | violet → purple |
| Main Strength | Sparkles | amber → orange |
| Field of Interest | Compass | emerald → green |
| Value to Display | ShieldCheck | rose → pink |

---

#### `AboutSection`

4 info cards in a 2-column grid:
- **Who I Am** (Bio paragraph)
- **Career Goals** (Short & long-term goals)
- **Interests & Philosophy** ("Automate the mundane, focus on the meaningful")
- **Background & Experience** (Education + bootcamp + homelab)
- **Core Technical Skills** (Bulleted list: Docker/K8s, CI/CD, IaC, Linux/Bash/Python)

---

#### `TechStackSection`

6 cluster cards in a 1→2→3 column responsive grid. Each card has:
- Glow icon, title, description
- Proficiency badges with colored dot: `Expert` (amber), `Intermediate` (blue), `Learning` (emerald)
- Hover: lift + scale + electric aura radial gradient

**Clusters:**

| Cluster | Tools |
|---|---|
| Containers & Orchestration | Docker (Intermediate), Kubernetes (Intermediate) |
| CI/CD & Automation | Git, GitHub Actions, GitLab CI (all Intermediate) |
| Infrastructure as Code | Terraform, Ansible (both Learning) |
| Cloud Platforms | AWS, GCP (both Learning) |
| Scripting & OS | Linux, Bash, Python (all Intermediate) |
| Soft Skills | Problem Solving, Continuous Learning, Communication & Teamwork |

---

#### `ProjectsSection`

Animated horizontal carousel with spring transition (`stiffness: 200, damping: 25`).

**3 Projects:**

| # | Project | Tools | Link |
|---|---|---|---|
| 1 | Containerized Auth App with Persistence Database | Docker, Docker Compose, Python/Flask, PostgreSQL | [GitHub](https://github.com/seizenz7/docker-python-auth-app) |
| 2 | CI/CD Pipeline Optimization & Secret Management | GitLab CI/CD, Docker, Kubernetes (K3s), Nginx, Semantic Release | [GitLab](https://gitlab.com/tutorial-ci-dibimbing/aditya-assignment-group) |
| 3 | Infrastructure as Code (IaC) Automation Provisioning VM | Terraform, Ansible, AWS (EC2), Docker | [GitHub](https://github.com/seizenz7/iac-terraform-ansible-vm) |

Each card shows: Background → Challenge → Solution & Process → Impact & Result + Technologies sidebar + Repository link.

---

#### `ContactSection`

4 animated link cards in a 1→2 column grid:

| Platform | Handle |
|---|---|
| Email | adityaiw4@gmail.com |
| LinkedIn | linkedin.com/in/adityaiw4 |
| GitHub | github.com/seizenz7 |
| GitLab | gitlab.com/seizenz |

---

#### `ReflectionSection`

5 vertically stacked cards:

| Question | Accent |
|---|---|
| Biggest Challenge | cyan |
| Most Representative Project | emerald |
| Most Improved Skill | violet |
| Areas for Future Growth | amber |
| Why This Portfolio Matters | rose |

---

### Types & Hooks

#### `SectionId` — [`src/types/sections.ts`](src/types/sections.ts)

```typescript
type SectionId = 'home' | 'about' | 'stack' | 'experience' | 'projects' | 'contact' | 'reflection'

const SECTION_ORDER: SectionId[] = ['home', 'experience', 'about', 'stack', 'projects', 'contact', 'reflection']
```

#### `use-mobile` — [`src/hooks/use-mobile.tsx`](src/hooks/use-mobile.tsx)

Returns `boolean` — true when viewport width < 768px (mobile breakpoint).

#### `use-toast` — [`src/hooks/use-toast.ts`](src/hooks/use-toast.ts)

Toast notification state management hook (Shadcn/UI pattern).

---

## 🔨 Build System

The build pipeline uses **esbuild** directly via a custom Node.js script at [`scripts/build.mjs`](scripts/build.mjs).

### esbuild Options

```javascript
{
  entryPoints: ['src/main.tsx', 'index.html'],
  outdir: 'dist',
  bundle: true,
  format: 'iife',           // Self-executing function (no module system needed)
  sourcemap: 'linked',      // Dev only; disabled in production
  minify: true,             // Production only
  treeShaking: true,
  jsx: 'automatic',         // React 18 new JSX transform
  loader: {
    '.html': 'copy',        // Copies index.html as-is to dist/
    '.png': 'file',
  }
}
```

### CSS Pipeline

CSS is processed via `esbuild-style-plugin` which pipes through:
1. **Tailwind CSS** — scans source files, generates utility classes
2. **Autoprefixer** — adds vendor prefixes for browser compatibility

### Dev Server

In development mode, esbuild starts:
- A **file watcher** that rebuilds on source changes
- A **built-in HTTP server** with a `/esbuild` EventSource endpoint
- The HTML template injects a `<script>` that listens to this endpoint for live-reload

---

## 🐳 Docker & Containerization

### Multi-Stage Dockerfile

The [`Dockerfile`](Dockerfile) uses a **2-stage build** for a minimal, secure production image:

#### Stage 1: `builder` (node:20-alpine)

```
node:20-alpine
  └── npm ci --frozen-lockfile     # Reproducible installs
  └── npm run build                # Produces dist/
```

- Uses `libc6-compat` for Alpine Node.js compatibility
- Freezes the lockfile for reproducible builds
- Installs all dependencies (including devDependencies needed for bundling)

#### Stage 2: `production` (nginx:1.27-alpine)

```
nginx:1.27-alpine
  └── COPY nginx.conf → /etc/nginx/conf.d/app.conf
  └── COPY dist/      → /usr/share/nginx/html
  └── chown -R nginx:nginx (all Nginx directories)
  └── USER nginx       # Non-root execution
  └── EXPOSE 8080
  └── HEALTHCHECK wget http://localhost:8080/healthz
```

**Final image is ~30-40 MB** (Alpine nginx base only; no Node.js, no source code, no node_modules).

### Nginx Configuration

The [`nginx.conf`](nginx.conf) server block includes:

| Feature | Config |
|---|---|
| Port | `8080` (non-privileged) |
| Security headers | `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff` |
| Gzip | Level 6, min 256B, covers JS/CSS/fonts/SVG/JSON |
| Asset caching | `Cache-Control: public, immutable` — 1 year for hashed assets |
| SPA fallback | `try_files $uri $uri/ /index.html` |
| index.html | `Cache-Control: no-store` (always fresh) |
| Health probe | `GET /healthz → 200 OK` (for K8s liveness/readiness probes) |
| Hidden files | `deny all` for `.*` paths (blocks `.git`, `.env`) |
| Error pages | `404 → /index.html` (SPA catch-all) |

### Building & Running the Container

```bash
# Build the Docker image
docker build -t web-portfolio:latest .

# Run locally
docker run -d \
  --name portfolio \
  -p 8080:8080 \
  web-portfolio:latest

# Verify it's running
curl http://localhost:8080/healthz
# → OK

# Stop and remove
docker stop portfolio && docker rm portfolio
```

**With Docker Compose:**

```yaml
# docker-compose.yml (example)
services:
  portfolio:
    build: .
    ports:
      - "8080:8080"
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:8080/healthz"]
      interval: 30s
      timeout: 5s
      retries: 3
```

---

## 🚀 Deployment Guide

### Static Hosting (dist/)

After running `npm run build`, deploy the contents of `dist/` (not the folder itself) to any static hosting provider:

#### Vercel (Recommended for simplicity)

1. Visit [vercel.com](https://vercel.com) and sign up
2. Click **New Project** → Connect GitHub repo  
   _Or:_ drag-and-drop the `dist/` folder for instant deployment
3. If connecting a repo, set build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Node.js version:** 20.x

#### Cloudflare Pages (Recommended for performance)

1. Visit [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Create a project** → **Upload assets** → zip `dist/` and upload
3. Or connect your Git repo and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

#### Netlify

```bash
# Using Netlify CLI
npm install -g netlify-cli
netlify deploy --dir=dist --prod
```

Or drag-and-drop the `dist/` folder at [app.netlify.com](https://app.netlify.com).

#### GitHub Pages

```bash
# Deploy dist/ contents to gh-pages branch
npm install -g gh-pages
gh-pages -d dist
```

Then enable Pages in repo Settings → Pages → Deploy from branch `gh-pages`.

### Git-Based Auto-Deploy

Connect your repository to Vercel/Netlify/Cloudflare. Every push to `main` will:
1. Trigger `npm install`
2. Run `npm run build`
3. Deploy `dist/` automatically

### Self-Hosted / Traditional Server

```bash
# Upload dist/ contents to your web server root
scp -r dist/* user@your-server:/var/www/html/

# Or use rsync
rsync -avz --delete dist/ user@your-server:/var/www/html/
```

Ensure your web server (Apache/Nginx) is configured with SPA fallback (all 404s → `index.html`).

---

## 📚 Portfolio Sections

| Section | Nav Label | Description |
|---|---|---|
| `home` | Home | Welcome hero with animated name, status badge, quick-nav cards, and CTA buttons |
| `experience` | Branding | Personal Branding Mapping — 5 strategic positioning cards |
| `about` | About | Bio, career goals, philosophy, background, core skills |
| `stack` | Skills & Tools | 6 tech cluster cards with proficiency levels |
| `projects` | Projects | Carousel of 3 real-world DevOps projects with STAR storytelling |
| `contact` | Contact | 4 direct links: Email, LinkedIn, GitHub, GitLab |
| `reflection` | Reflection | 5 personal growth reflection cards |

---

## 🎨 Customization

### Changing Personal Information

All personal content is hardcoded in the section components. To update:

| Content | File |
|---|---|
| Name, title, tagline | [`src/components/sections/HeroSection.tsx`](src/components/sections/HeroSection.tsx) |
| Bio, goals, philosophy | [`src/components/sections/AboutSection.tsx`](src/components/sections/AboutSection.tsx) |
| Branding cards | [`src/components/sections/ExperienceSection.tsx`](src/components/sections/ExperienceSection.tsx) |
| Tech skills & tools | [`src/components/sections/TechStackSection.tsx`](src/components/sections/TechStackSection.tsx) |
| Projects | [`src/components/sections/ProjectsSection.tsx`](src/components/sections/ProjectsSection.tsx) |
| Contact links | [`src/components/sections/ContactSection.tsx`](src/components/sections/ContactSection.tsx) |
| Reflection answers | [`src/components/sections/ReflectionSection.tsx`](src/components/sections/ReflectionSection.tsx) |

### Adding a New Section

1. Create `src/components/sections/NewSection.tsx`
2. Export it from `src/components/sections/index.tsx`
3. Add the new `SectionId` to `src/types/sections.ts`
4. Add a `case` in `renderSection()` inside `src/pages/Home.tsx`
5. Add a dock item to `DOCK_ITEMS` in `src/components/layout/CommandDock.tsx`

### Galaxy Appearance

Tune the 3D background in [`src/components/layout/GalaxyBackground.tsx`](src/components/layout/GalaxyBackground.tsx):

| Parameter | Location | Effect |
|---|---|---|
| `nodeCount` | line 51 | Number of network nodes |
| `dustCount` | line 52 | Number of ambient particles |
| `maxDistance` | line 78 | Connection threshold between nodes |
| `0.03` rotation speed | line 120 | Base galaxy rotation speed |
| `color="#22d3ee"` | line 157 | Node color (cyan-400) |
| `color="#a855f7"` | line 169 | Dust color (purple-500) |

---

## 🔧 Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `npm install` fails | Incompatible Node version | Use Node.js ≥ 20 |
| Galaxy background not rendering | WebGL not supported / GPU issues | Check browser WebGL support at [webglreport.com](https://webglreport.com) |
| Build produces no `dist/` | Build error | Check terminal output; run `node scripts/build.mjs --production` directly |
| Docker container exits immediately | Permission issue on Nginx PID file | Ensure the `chown` commands in Dockerfile ran correctly |
| Blank page after deployment | SPA routing issue | Ensure hosting platform has SPA fallback (all 404s → `index.html`) configured |
| `framer-motion` import error | Mixed `motion` and `framer-motion` imports | `CommandDock` uses `framer-motion`; others use `motion/react` — both are valid aliases in v12 |
| CSS not applied | Tailwind purge removed classes | Check `content` paths in `tailwind.config.js` include all source files |

---

## 🤝 Contributing

This is a personal portfolio project. If you find a bug or have a suggestion:

1. Fork the repository
2. Create a feature branch: `git checkout -b fix/your-fix`
3. Commit with a clear message: `git commit -m "fix: describe what you fixed"`
4. Push and open a Pull Request

---

## 📄 License

Personal portfolio — all rights reserved. The code structure may be used as a template with attribution.

---

<div align="center">

**Built by [Aditya Indra Wisnu](https://linkedin.com/in/adityaiw4)** — DevOps Engineer  
_"Automate the mundane, focus on the meaningful."_

</div>
