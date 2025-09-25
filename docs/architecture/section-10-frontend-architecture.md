# Section 10: Frontend Architecture

Define frontend-specific architecture details:

### Component Architecture

#### Component Organization

```text
src/
├── game/
│   ├── scenes/
│   │   ├── BootScene.ts      # Asset loading
│   │   ├── StartScene.ts     # Start screen
│   │   ├── GameScene.ts      # Main gameplay
│   │   └── GameOverScene.ts  # Game over screen
│   ├── entities/
│   │   ├── Player.ts
│   │   ├── Enemy.ts
│   │   ├── Projectile.ts
│   │   └── FuelDepot.ts
│   ├── managers/
│   │   ├── InputManager.ts
│   │   ├── EntityManager.ts
│   │   ├── PhysicsManager.ts
│   │   ├── AudioManager.ts
│   │   └── StateManager.ts
│   ├── generators/
│   │   └── RiverGenerator.ts
│   └── config/
│       ├── GameConfig.ts
│       └── AssetManifest.ts
├── ui/
│   ├── HUD.ts
│   ├── TouchControls.ts
│   └── Screens.ts
├── utils/
│   ├── ObjectPool.ts
│   └── MathUtils.ts
├── types/
│   └── index.ts
└── main.ts
```

#### Component Template

```typescript
// Example component structure - Player.ts
import { GameObjects, Scene } from 'phaser';
import { Player as IPlayer } from '../types';
import { InputManager } from '../managers/InputManager';

export class Player extends GameObjects.Sprite implements IPlayer {
  public fuel: number = 100;
  public maxSpeed: number = 300;
  public currentSpeed: number = 0;
  public lives: number = 3;
  public isAlive: boolean = true;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'player_jet');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setDepth(10);
  }

  update(delta: number, inputManager: InputManager): void {
    // Update fuel consumption
    this.fuel = Math.max(0, this.fuel - (delta * 0.002));
    
    // Update max speed based on fuel
    this.maxSpeed = 300 * (this.fuel / 100);
    
    // Handle input
    const input = inputManager.getInputState();
    this.handleMovement(input);
  }

  private handleMovement(input: any): void {
    // Movement logic based on current scroll direction
  }
}
```

### State Management Architecture

#### State Structure

```typescript
// StateManager implementation
interface GameState {
  currentState: GameStateType;
  score: number;
  highScore: number;
  bombs: number;
  scrollDirection: ScrollDirection;
  scrollSpeed: number;
  gameTime: number;
  difficulty: number;
}

class StateManager {
  private state: GameState;
  private listeners: Map<string, Function[]> = new Map();

  constructor() {
    this.state = this.getInitialState();
  }

  private getInitialState(): GameState {
    return {
      currentState: GameStateType.START_SCREEN,
      score: 0,
      highScore: this.loadHighScore(),
      bombs: 3,
      scrollDirection: ScrollDirection.VERTICAL,
      scrollSpeed: 100,
      gameTime: 0,
      difficulty: 1
    };
  }

  public updateScore(points: number): void {
    this.state.score += points;
    this.emit('scoreChanged', this.state.score);
  }

  public subscribe(event: string, callback: Function): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
  }

  private emit(event: string, data: any): void {
    const callbacks = this.listeners.get(event) || [];
    callbacks.forEach(cb => cb(data));
  }
}
```

#### State Management Patterns
- Single source of truth via StateManager
- Event-driven updates for UI reactivity
- Immutable state updates for debugging
- LocalStorage persistence for high scores

### Routing Architecture

For this single-page game application, routing is handled through Phaser's Scene management:

#### Route Organization

```text
Scene Flow:
BootScene (loading) -> StartScene (menu) -> GameScene (play) -> GameOverScene (results)
                          ^                                            |
                          |____________________________________________|
```

#### Protected Route Pattern

```typescript
// Scene transition with state validation
class SceneManager {
  public static transitionTo(scene: Phaser.Scene, targetScene: string): void {
    const stateManager = scene.registry.get('stateManager') as StateManager;
    
    // Validate transition
    if (targetScene === 'GameScene' && !this.canStartGame(stateManager)) {
      console.warn('Cannot start game in current state');
      return;
    }
    
    // Perform transition
    scene.scene.start(targetScene, { 
      stateManager,
      previousScene: scene.scene.key 
    });
  }

  private static canStartGame(stateManager: StateManager): boolean {
    return stateManager.getCurrentState() !== GameStateType.PLAYING;
  }
}
```

### Frontend Services Layer

#### API Client Setup

```typescript
// Prepared for future backend integration
class APIClient {
  private baseURL: string;
  
  constructor(baseURL: string = '') {
    this.baseURL = baseURL;
  }

  // Prepared for future leaderboard submission
  public async submitHighScore(score: number): Promise<void> {
    if (!this.baseURL) {
      // Store locally for now
      localStorage.setItem('riverraid_highscore', JSON.stringify({
        score,
        timestamp: new Date().toISOString(),
        gameVersion: '1.0.0'
      }));
      return;
    }
    
    // Future API call
    // const response = await fetch(`${this.baseURL}/api/scores`, {...});
  }
}
```

#### Service Example

```typescript
// AudioService wrapping Phaser's audio system
export class AudioService {
  private scene: Phaser.Scene;
  private sounds: Map<string, Phaser.Sound.BaseSound> = new Map();
  private musicVolume: number = 0.7;
  private sfxVolume: number = 1.0;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  public playSound(key: string, config?: any): void {
    if (!this.sounds.has(key)) {
      const sound = this.scene.sound.add(key, {
        volume: this.sfxVolume,
        ...config
      });
      this.sounds.set(key, sound);
    }
    
    this.sounds.get(key)!.play();
  }

  public playMusic(key: string): void {
    // Stop existing music
    this.stopMusic();
    
    const music = this.scene.sound.add(key, {
      loop: true,
      volume: this.musicVolume
    });
    
    this.sounds.set('currentMusic', music);
    music.play();
  }

  public stopMusic(): void {
    const music = this.sounds.get('currentMusic');
    if (music) {
      music.stop();
      this.sounds.delete('currentMusic');
    }
  }
}
```

---
