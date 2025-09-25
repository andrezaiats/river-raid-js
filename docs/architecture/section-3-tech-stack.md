# Section 3: Tech Stack

This is the DEFINITIVE technology selection for the entire project. All development must use these exact versions.

### Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| Frontend Language | JavaScript (ES6+) | ES2022 | Core game logic and UI | Native browser support, no transpilation needed for modern browsers |
| Frontend Framework | Phaser | 3.70.0 | 2D game engine and rendering | Comprehensive game features, excellent performance, active community |
| UI Component Library | None (Vanilla JS) | - | Simple UI screens | Game UI is minimal, no component library needed |
| State Management | Custom State Machine | - | Game state management | Lightweight, specific to game needs, no external dependencies |
| Backend Language | N/A | - | - | Client-side only application |
| Backend Framework | N/A | - | - | Client-side only application |
| API Style | N/A | - | - | No API needed for MVP |
| Database | N/A | - | - | No persistence required for MVP |
| Cache | LocalStorage | HTML5 | High score storage (future) | Browser native, no dependencies |
| File Storage | Static Assets | - | Game sprites and audio | Served directly from CDN |
| Authentication | N/A | - | - | No user accounts in MVP |
| Frontend Testing | Vitest | 1.6.0 | Unit and integration tests | Fast, ESM native, Jest compatible |
| Backend Testing | N/A | - | - | No backend |
| E2E Testing | Playwright | 1.44.0 | Automated gameplay testing | Cross-browser testing, great debugging |
| Build Tool | Vite | 5.2.0 | Development and bundling | Lightning fast, ESM native, zero config |
| Bundler | Rollup (via Vite) | 4.17.0 | Production bundling | Tree shaking, code splitting, optimal bundles |
| IaC Tool | N/A | - | - | Static hosting requires no infrastructure |
| CI/CD | GitHub Actions | - | Automated testing and deployment | Free for public repos, integrated with GitHub |
| Monitoring | Vercel Analytics | Basic | Performance and usage metrics | Free tier sufficient, automatic with Vercel |
| Logging | Console (dev only) | - | Development debugging | No production logging needed for MVP |
| CSS Framework | None (Minimal CSS) | - | Basic styling only | Game rendered to canvas, minimal CSS needed |

---
