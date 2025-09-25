# Post-Deployment Verification

- [ ] Game loads within 2 seconds
- [ ] 60 FPS maintained during gameplay
- [ ] Touch controls work on mobile
- [ ] No JavaScript errors in console
- [ ] Analytics tracking (if configured)
- [ ] CDN cache headers correct
```

---

## Section 15: Security and Performance

Define security and performance considerations for the fullstack application.

### Security Requirements

**Frontend Security:**
- CSP Headers: `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'`
- XSS Prevention: All user inputs sanitized (future features), no innerHTML usage
- Secure Storage: High scores in localStorage only, no sensitive data stored

**Backend Security (Future):**
- Input Validation: Zod schema validation for all API inputs
- Rate Limiting: 100 requests per minute per IP
- CORS Policy: Strict origin checking, credentials not included

**Authentication Security (Future):**
- Token Storage: httpOnly cookies for refresh tokens, memory for access tokens
- Session Management: 15-minute access token, 7-day refresh token
- Password Policy: Minimum 8 characters, complexity not required for game

**Client-Side Security Measures:**
```typescript
// Anti-cheat measures for client-side high scores
class SecurityManager {
  private gameStartTime: number = 0;
  private actionLog: Array<{action: string, timestamp: number}> = [];
  
  // Validate score is achievable
  validateScore(score: number, gameTime: number): boolean {
    // Check minimum time per point (prevents instant high scores)
    const minTimePerPoint = 0.5; // seconds
    const minRequiredTime = score * minTimePerPoint;
    
    if (gameTime < minRequiredTime) {
      console.warn('Suspicious score detected');
      return false;
    }
    
    // Check action frequency (prevents automated play)
    const actionsPerSecond = this.actionLog.length / gameTime;
    if (actionsPerSecond > 15) { // Human limit ~10-12 actions/second
      console.warn('Suspicious action rate detected');
      return false;
    }
    
    return true;
  }
  
  // Obfuscate score storage
  encodeScore(score: number): string {
    // Simple obfuscation (not cryptographically secure)
    const encoded = btoa(JSON.stringify({
      s: score,
      t: Date.now(),
      h: this.generateChecksum(score)
    }));
    return encoded;
  }
  
  private generateChecksum(score: number): string {
    // Simple checksum to detect tampering
    return btoa(score.toString() + '-river-raid-2025');
  }
}
```

### Performance Optimization

**Frontend Performance:**
- Bundle Size Target: < 1MB total (including Phaser)
- Loading Strategy: Progressive loading with visible progress
- Caching Strategy: Aggressive caching for all game assets (1 year), versioned URLs for updates

**Backend Performance (Future):**
- Response Time Target: < 100ms for API calls
- Database Optimization: DynamoDB with proper indexes
- Caching Strategy: CloudFront for static assets, no server-side caching needed

**Performance Implementation:**

```typescript
// Asset loading optimization
class PerformanceOptimizedLoader {
  private loadingPriorities = {
    critical: ['player_sprite', 'ui_elements'],
    high: ['enemy_sprites', 'fuel_depot'],
    low: ['background_music', 'particle_effects']
  };
  
  async loadAssets(scene: Phaser.Scene): Promise<void> {
    // Load critical assets first
    await this.loadAssetGroup(scene, this.loadingPriorities.critical);
    
    // Signal game can start with critical assets
    scene.events.emit('criticalAssetsLoaded');
    
    // Load remaining assets in background
    await Promise.all([
      this.loadAssetGroup(scene, this.loadingPriorities.high),
      this.loadAssetGroup(scene, this.loadingPriorities.low)
    ]);
  }
  
  private async loadAssetGroup(
    scene: Phaser.Scene, 
    assets: string[]
  ): Promise<void> {
    // Implementation with progress tracking
  }
}

// Frame rate optimization
class RenderOptimizer {
  private renderDistance = 1200; // Pixels beyond viewport
  private cullInvisible = true;
  
  optimizeScene(scene: Phaser.Scene): void {
    // Frustum culling
    scene.cameras.main.on('cameramove', () => {
      const bounds = scene.cameras.main.worldView;
      
      scene.children.list.forEach(child => {
        if ('body' in child) {
          const inView = Phaser.Geom.Rectangle.Overlaps(
            bounds,
            child.getBounds()
          );
          child.setVisible(inView);
          if ('body' in child && child.body) {
            child.body.enable = inView;
          }
        }
      });
    });
  }
}

// Memory management
class MemoryManager {
  private pools: Map<string, Phaser.GameObjects.Group> = new Map();
  
  createPool(
    scene: Phaser.Scene,
    key: string,
    config: Phaser.Types.GameObjects.Group.GroupConfig
  ): void {
    const pool = scene.add.group({
      ...config,
      runChildUpdate: false, // Disable until needed
      createCallback: (item) => {
        item.setActive(false).setVisible(false);
      },
      removeCallback: (item) => {
        item.setActive(false).setVisible(false);
      }
    });
    
    this.pools.set(key, pool);
  }
  
  // Periodic cleanup of unused objects
  cleanupPools(): void {
    this.pools.forEach(pool => {
      const inactive = pool.getChildren().filter(
        child => !child.active && !child.visible
      );
      // Keep max 50 inactive objects per pool
      if (inactive.length > 50) {
        inactive.slice(50).forEach(child => child.destroy());
      }
    });
  }
}
```

### Performance Monitoring

```typescript
// Real-time performance tracking
class PerformanceMonitor {
  private metrics = {
    fps: [] as number[],
    frameTime: [] as number[],
    heapUsed: [] as number[],
  };
  
  startMonitoring(game: Phaser.Game): void {
    // FPS tracking
    game.events.on('prestep', () => {
      this.metrics.fps.push(game.loop.actualFps);
      
      // Keep last 60 samples (1 second at 60 FPS)
      if (this.metrics.fps.length > 60) {
        this.metrics.fps.shift();
      }
      
      // Alert if FPS drops below threshold
      const avgFps = this.getAverageFps();
      if (avgFps < 50 && avgFps > 0) {
        console.warn(`Performance warning: FPS dropped to ${avgFps}`);
        this.degradeQuality(game);
      }
    });
    
    // Memory tracking
    if (performance.memory) {
      setInterval(() => {
        this.metrics.heapUsed.push(performance.memory.usedJSHeapSize);
        
        // Alert if memory usage is high
        if (performance.memory.usedJSHeapSize > 100 * 1024 * 1024) {
          console.warn('High memory usage detected');
          this.triggerGarbageCollection(game);
        }
      }, 1000);
    }
  }
  
  private getAverageFps(): number {
    const sum = this.metrics.fps.reduce((a, b) => a + b, 0);
    return Math.round(sum / this.metrics.fps.length);
  }
  
  private degradeQuality(game: Phaser.Game): void {
    // Reduce particle effects
    // Decrease render distance
    // Simplify shaders
  }
  
  private triggerGarbageCollection(game: Phaser.Game): void {
    // Clean up object pools
    // Clear unused textures
    // Force scene cleanup
  }
}
```

### Web Performance Optimizations

```javascript
// vite.config.ts performance optimizations
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'phaser': ['phaser'],
          'game': ['./src/game/index.ts'],
          'ui': ['./src/ui/index.ts']
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      }
    },
    reportCompressedSize: false, // Faster builds
    chunkSizeWarningLimit: 1000 // 1MB warning
  },
  optimizeDeps: {
    include: ['phaser'] // Pre-bundle heavy dependencies
  }
});
```

---

## Section 16: Testing Strategy

Define comprehensive testing approach for fullstack application.

### Testing Pyramid

```text
         E2E Tests (10%)
        /              \
    Integration Tests (30%)
   /                      \
Unit Tests (60%)    Performance Tests
```

**Distribution Rationale:**
- Heavy focus on unit tests for game logic (collision, physics, scoring)
- Integration tests for component interactions (input→entity→physics)
- Minimal E2E for critical user journeys (start→play→game over)
- Performance tests to ensure 60 FPS requirement

### Test Organization

#### Frontend Tests

```text
apps/web/tests/
├── unit/
│   ├── game/
│   │   ├── entities/
│   │   │   ├── Player.test.ts
│   │   │   ├── Enemy.test.ts
│   │   │   └── Projectile.test.ts
│   │   ├── managers/
│   │   │   ├── StateManager.test.ts
│   │   │   ├── PhysicsManager.test.ts
│   │   │   └── EntityManager.test.ts
│   │   ├── generators/
│   │   │   └── RiverGenerator.test.ts
│   │   └── utils/
│   │       ├── ObjectPool.test.ts
│   │       └── MathUtils.test.ts
│   ├── ui/
│   │   ├── HUD.test.ts
│   │   └── TouchControls.test.ts
│   └── services/
│       └── AudioService.test.ts
├── integration/
│   ├── game-flow.test.ts
│   ├── collision-system.test.ts
│   ├── input-handling.test.ts
│   └── score-system.test.ts
├── e2e/
│   ├── gameplay.spec.ts
│   ├── mobile-controls.spec.ts
│   └── performance.spec.ts
├── performance/
│   ├── frame-rate.test.ts
│   ├── memory-usage.test.ts
│   └── load-time.test.ts
└── fixtures/
    ├── mockAssets.ts
    ├── testHelpers.ts
    └── gameStates.ts
```

#### Backend Tests (Future)

```text
apps/api/tests/
├── unit/
│   ├── validators/
│   │   └── scoreValidator.test.ts
│   ├── services/
│   │   └── leaderboardService.test.ts
│   └── utils/
│       └── auth.test.ts
├── integration/
│   ├── api/
│   │   └── scores.test.ts
│   └── database/
│       └── dynamo.test.ts
└── fixtures/
    └── testData.ts
```

#### E2E Tests

```text
e2e/
├── specs/
│   ├── critical-path.spec.ts
│   ├── game-mechanics.spec.ts
│   └── cross-browser.spec.ts
├── support/
│   ├── commands.ts
│   └── helpers.ts
└── config/
    └── playwright.config.ts
```

### Test Examples

#### Frontend Component Test

```typescript
// apps/web/tests/unit/game/entities/Player.test.ts
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Player } from '@/game/entities/Player';
import { createMockScene } from '@/tests/fixtures/mockScene';

describe('Player Entity', () => {
  let player: Player;
  let mockScene: any;

  beforeEach(() => {
    mockScene = createMockScene();
    player = new Player(mockScene, 400, 500);
  });

  describe('Fuel Management', () => {
    it('should decrease fuel over time', () => {
      const initialFuel = player.fuel;
      player.update(1000); // 1 second
      
      expect(player.fuel).toBeLessThan(initialFuel);
      expect(player.fuel).toBeGreaterThan(0);
    });

    it('should calculate max speed based on fuel percentage', () => {
      player.fuel = 100;
      expect(player.maxSpeed).toBe(300);
      
      player.fuel = 50;
      player.update(0);
      expect(player.maxSpeed).toBe(150);
      
      player.fuel = 0;
      player.update(0);
      expect(player.maxSpeed).toBe(0);
    });

    it('should die when fuel reaches zero', () => {
      player.fuel = 0.1;
      player.update(100);
      
      expect(player.fuel).toBe(0);
      expect(player.isAlive).toBe(false);
    });
  });
});
```

#### Integration Test

```typescript
// apps/web/tests/integration/collision-system.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { PhysicsManager } from '@/game/managers/PhysicsManager';
import { EntityManager } from '@/game/managers/EntityManager';
import { StateManager } from '@/game/managers/StateManager';
import { createMockScene } from '@/tests/fixtures/mockScene';

describe('Collision System Integration', () => {
  let physicsManager: PhysicsManager;
  let entityManager: EntityManager;
  let stateManager: StateManager;
  let mockScene: any;

  beforeEach(() => {
    mockScene = createMockScene();
    stateManager = new StateManager();
    entityManager = new EntityManager(mockScene);
    physicsManager = new PhysicsManager(mockScene, entityManager);
  });

  it('should handle player-enemy collision', () => {
    const player = entityManager.createPlayer(400, 500);
    const enemy = entityManager.spawnEnemy('ship', 400, 500);
    
    // Register collision handlers
    physicsManager.setupCollisions(stateManager);
    
    // Simulate collision
    physicsManager.checkCollision(player, enemy);
    
    expect(player.isAlive).toBe(false);
    expect(stateManager.getCurrentState()).toBe('GAME_OVER');
  });
});
```

#### E2E Test

```typescript
// e2e/specs/gameplay.spec.ts
import { test, expect, Page } from '@playwright/test';

test.describe('River Raid Gameplay', () => {
  let page: Page;

  test.beforeEach(async ({ page: testPage }) => {
    page = testPage;
    await page.goto('/');
    await page.click('text=CLICK TO START');
    await page.waitForTimeout(500); // Wait for game initialization
  });

  test('should complete a basic game session', async () => {
    // Verify game started
    await expect(page.locator('#game-canvas')).toBeVisible();
    await expect(page.locator('.hud-score')).toContainText('SCORE: 0');
    
    // Test shooting
    await page.keyboard.press('Space');
    await page.waitForTimeout(100);
    
    // Move player
    await page.keyboard.down('ArrowLeft');
    await page.waitForTimeout(500);
    await page.keyboard.up('ArrowLeft');
  });
});
```

#### Performance Test

```typescript
// apps/web/tests/performance/frame-rate.test.ts
import { describe, it, expect } from 'vitest';
import { performanceTest } from '@/tests/fixtures/performanceHelpers';

describe('Frame Rate Performance', () => {
  it('should maintain 60 FPS with 50 enemies on screen', async () => {
    const result = await performanceTest(async (game) => {
      const scene = game.scene.scenes[0];
      
      // Spawn many enemies
      for (let i = 0; i < 50; i++) {
        scene.entityManager.spawnEnemy('ship', 
          Math.random() * 800, 
          Math.random() * 600
        );
      }
      
      // Measure FPS over 1000 frames
      const fpsReadings: number[] = [];
      for (let frame = 0; frame < 1000; frame++) {
        await new Promise(resolve => requestAnimationFrame(resolve));
        fpsReadings.push(game.loop.actualFps);
      }
      
      return {
        avgFps: fpsReadings.reduce((a, b) => a + b) / fpsReadings.length
      };
    });
    
    expect(result.avgFps).toBeGreaterThan(58);
  });
});
```

### Testing Best Practices

```typescript
// Test utilities and helpers
// apps/web/tests/fixtures/testHelpers.ts

export const createMockScene = () => {
  return {
    add: {
      existing: vi.fn(),
      group: vi.fn(() => ({
        create: vi.fn(),
        getChildren: vi.fn(() => []),
        clear: vi.fn()
      }))
    },
    physics: {
      add: {
        existing: vi.fn(),
        collider: vi.fn(),
        overlap: vi.fn()
      }
    }
  };
};

// Performance test harness
export const performanceTest = async (
  testFn: (game: Phaser.Game) => Promise<any>
) => {
  const config = { type: Phaser.HEADLESS };
  const game = new Phaser.Game(config);
  try {
    return await testFn(game);
  } finally {
    game.destroy(true, false);
  }
};
```

### CI Test Configuration

```yaml