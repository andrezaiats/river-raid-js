# Section 12: Unified Project Structure

Create a monorepo structure that accommodates both frontend and potential future backend:

```plaintext
river-raid-js/
├── .github/                    # CI/CD workflows
│   └── workflows/
│       ├── ci.yaml            # Test and lint
│       └── deploy.yaml        # Deploy to Vercel
├── apps/                       # Application packages
│   ├── web/                    # Frontend application
│   │   ├── src/
│   │   │   ├── game/          # Phaser game code
│   │   │   │   ├── scenes/    # Game scenes
│   │   │   │   ├── entities/  # Game objects
│   │   │   │   ├── managers/  # System managers
│   │   │   │   └── config/    # Game configuration
│   │   │   ├── ui/            # UI components
│   │   │   ├── services/      # API client (future)
│   │   │   ├── types/         # TypeScript types
│   │   │   ├── utils/         # Utilities
│   │   │   └── main.ts        # Entry point
│   │   ├── public/            # Static assets
│   │   │   ├── assets/        # Game assets
│   │   │   │   ├── sprites/   # Sprite sheets
│   │   │   │   ├── audio/     # Sound effects
│   │   │   │   └── fonts/     # Bitmap fonts
│   │   │   └── index.html     # HTML entry
│   │   ├── tests/             # Frontend tests
│   │   │   ├── unit/          # Unit tests
│   │   │   └── integration/   # Integration tests
│   │   ├── package.json       # Frontend deps
│   │   ├── tsconfig.json      # TS config
│   │   └── vite.config.ts     # Vite config
│   └── api/                    # Backend (future)
│       └── .gitkeep           # Placeholder
├── packages/                   # Shared packages
│   ├── shared/                # Shared types/utils
│   │   ├── src/
│   │   │   ├── types/         # Game interfaces
│   │   │   │   ├── entities.ts
│   │   │   │   ├── state.ts
│   │   │   │   └── index.ts
│   │   │   ├── constants/     # Game constants
│   │   │   │   ├── gameplay.ts
│   │   │   │   └── config.ts
│   │   │   └── utils/         # Shared utilities
│   │   │       └── math.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── config/                # Shared configuration
│       ├── eslint/            # ESLint config
│       │   └── base.js
│       ├── typescript/        # TS base config
│       │   └── base.json
│       └── jest/              # Jest config
│           └── base.js
├── infrastructure/            # IaC (future)
│   └── .gitkeep
├── scripts/                   # Build/deploy scripts
│   ├── build.sh              # Build all packages
│   └── deploy.sh             # Deploy to Vercel
├── docs/                      # Documentation
│   ├── prd.md
│   ├── front-end-spec.md
│   └── architecture.md
├── .env.example              # Environment template
├── .gitignore
├── package.json              # Root package.json
├── tsconfig.json             # Root TS config
├── README.md                 # Project readme
└── vercel.json              # Vercel config
```

---
