# Section 13: Development Workflow

Define the development setup and workflow for the fullstack application.

### Local Development Setup

#### Prerequisites

```bash
# System requirements
node --version  # v18.0.0 or higher required
npm --version   # v9.0.0 or higher required

# Install Git if not present
git --version   # v2.0.0 or higher

# Optional but recommended
# VS Code with extensions:
# - ESLint
# - Prettier
# - TypeScript and JavaScript Language Features
```

#### Initial Setup

```bash
# Clone repository
git clone https://github.com/andrezaiats/river-raid-js.git
cd river-raid-js

# Install dependencies
npm install

# Setup git hooks (for linting)
npm run prepare

# Copy environment template
cp .env.example .env

# Verify setup
npm run check
```

#### Development Commands

```bash
# Start all services
npm run dev

# Start frontend only
npm run dev:web

# Start backend only (future)
# npm run dev:api

# Run tests
npm run test              # Run all tests
npm run test:unit        # Unit tests only
npm run test:e2e         # E2E tests only
npm run test:watch       # Watch mode

# Code quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run type-check       # TypeScript validation
npm run format           # Format with Prettier

# Build commands
npm run build            # Build all packages
npm run build:web        # Build frontend only
npm run preview          # Preview production build

# Asset management
npm run assets:optimize  # Optimize sprites/audio
npm run assets:validate  # Check asset sizes
```

### Environment Configuration

#### Required Environment Variables

```bash
# Frontend (.env.local)
# Currently no environment variables required for MVP
# Future additions:
# VITE_API_URL=http://localhost:3001
# VITE_GA_ID=UA-XXXXXXXXX-X

# Backend (.env) - Future
# AWS_REGION=us-east-1
# DYNAMODB_ENDPOINT=http://localhost:8000
# JWT_SECRET=your-secret-key

# Shared
# NODE_ENV=development
# LOG_LEVEL=debug
```

### Development Workflow Best Practices

```markdown
## Daily Development Flow

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Opens http://localhost:5173
   - Hot module replacement enabled
   - Source maps for debugging

2. **Making Changes**
   - Game logic: `apps/web/src/game/`
   - UI components: `apps/web/src/ui/`
   - Shared types: `packages/shared/src/types/`
   
3. **Testing During Development**
   ```bash
   # In another terminal
   npm run test:watch
   ```

4. **Before Committing**
   ```bash
   npm run check  # Runs lint, type-check, and tests
   ```

## Asset Development Workflow

1. **Adding Sprites**
   - Place in `apps/web/public/assets/sprites/`
   - Use PNG format with transparency
   - Keep under 1024x1024 for mobile compatibility
   - Run `npm run assets:optimize` before commit

2. **Adding Audio**
   - Place in `apps/web/public/assets/audio/`
   - Use OGG format (with MP3 fallback)
   - Keep under 100KB per sound effect
   - Normalize audio levels

3. **Asset Loading**
   - Update `src/game/config/AssetManifest.ts`
   - Add to preloader scene
   - Test loading on slow connection

## Performance Testing

```bash
