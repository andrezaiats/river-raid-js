# Coding Standards

Define MINIMAL but CRITICAL standards for AI agents. Focus only on project-specific rules that prevent common mistakes. These will be used by dev agents.

## Critical Fullstack Rules

- **Type Sharing:** Always define types in packages/shared/src/types and import from '@shared/types'
- **Asset References:** Never hardcode asset paths - use AssetManifest.ts constants only
- **Game State Access:** Never access game state directly - always go through StateManager
- **Object Creation:** Never create game objects with `new` during gameplay - always use EntityManager pools
- **Physics Updates:** Never modify position/velocity directly - use Phaser physics API
- **Event Handling:** Always cleanup event listeners in destroy() methods to prevent memory leaks
- **Frame-Dependent Logic:** Never use raw delta time - use Phaser's built-in time.delta
- **Browser APIs:** Never use setTimeout/setInterval - use Phaser's time events
- **Local Storage:** Access only through SecurityManager for score encoding/validation

## Naming Conventions

| Element | Frontend | Backend | Example |
|---------|----------|---------|---------|
| Components | PascalCase | - | `PlayerJet.ts`, `EnemyShip.ts` |
| Game Scenes | PascalCase with 'Scene' suffix | - | `GameScene.ts`, `StartScene.ts` |
| Managers | PascalCase with 'Manager' suffix | - | `InputManager.ts`, `StateManager.ts` |
| Event Names | SCREAMING_SNAKE_CASE | - | `PLAYER_DIED`, `SCORE_UPDATED` |
| Asset Keys | snake_case | - | `player_sprite`, `explosion_sound` |
| Constants | SCREAMING_SNAKE_CASE | - | `MAX_ENEMIES`, `FUEL_DRAIN_RATE` |
| Methods | camelCase | - | `spawnEnemy()`, `updateScore()` |
| Phaser Config | camelCase | - | `gameConfig`, `physicsConfig` |

## Game-Specific Coding Patterns

```typescript
// ❌ WRONG: Direct state mutation
this.score += points;

// ✅ CORRECT: Through manager with events
this.stateManager.updateScore(points);

// ❌ WRONG: Creating objects during gameplay
const enemy = new Enemy(this.scene, x, y);

// ✅ CORRECT: Using object pools
const enemy = this.entityManager.spawnEnemy(type, x, y);

// ❌ WRONG: Frame-dependent without delta
this.x += this.speed;

// ✅ CORRECT: Delta-time based movement
this.x += this.speed * (delta / 1000);
```