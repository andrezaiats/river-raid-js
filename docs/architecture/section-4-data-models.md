# Section 4: Data Models

Define the core data models/entities that will be shared between frontend components:

### Player

**Purpose:** Represents the player's jet aircraft with its position, fuel, and state

**Key Attributes:**
- x: number - Horizontal position on screen
- y: number - Vertical position on screen  
- fuel: number - Current fuel level (0-100)
- maxSpeed: number - Maximum speed based on fuel level
- currentSpeed: number - Current movement speed
- lives: number - Remaining lives (future feature)
- isAlive: boolean - Whether player is active

**TypeScript Interface:**
```typescript
interface Player {
  x: number;
  y: number;
  fuel: number;
  maxSpeed: number;
  currentSpeed: number;
  lives: number;
  isAlive: boolean;
}
```

**Relationships:**
- Creates Projectiles when firing
- Collides with Enemies, FuelDepots, and RiverBoundaries

### Enemy

**Purpose:** Represents hostile entities (ships and helicopters) that the player must avoid or destroy

**Key Attributes:**
- id: string - Unique identifier
- type: EnemyType - Ship or Helicopter enum
- x: number - Horizontal position
- y: number - Vertical position
- speed: number - Movement speed
- movementPattern: MovementPattern - How enemy moves
- points: number - Score value when destroyed
- width: number - Collision box width
- height: number - Collision box height

**TypeScript Interface:**
```typescript
enum EnemyType {
  SHIP = 'SHIP',
  HELICOPTER = 'HELICOPTER'
}

enum MovementPattern {
  STRAIGHT = 'STRAIGHT',
  ZIGZAG = 'ZIGZAG',
  HOVER = 'HOVER'
}

interface Enemy {
  id: string;
  type: EnemyType;
  x: number;
  y: number;
  speed: number;
  movementPattern: MovementPattern;
  points: number;
  width: number;
  height: number;
}
```

**Relationships:**
- Destroyed by Projectiles
- Collides with Player
- Cleared by Bombs

### FuelDepot

**Purpose:** Represents refueling stations that replenish the player's fuel when collected

**Key Attributes:**
- id: string - Unique identifier
- x: number - Horizontal position
- y: number - Vertical position
- fuelAmount: number - Amount of fuel provided
- isCollected: boolean - Whether already collected
- width: number - Collision box width
- height: number - Collision box height

**TypeScript Interface:**
```typescript
interface FuelDepot {
  id: string;
  x: number;
  y: number;
  fuelAmount: number;
  isCollected: boolean;
  width: number;
  height: number;
}
```

**Relationships:**
- Collected by Player on collision
- Affects Player fuel level

### Projectile

**Purpose:** Represents bullets fired by the player to destroy enemies

**Key Attributes:**
- id: string - Unique identifier
- x: number - Horizontal position
- y: number - Vertical position
- velocityX: number - Horizontal velocity
- velocityY: number - Vertical velocity
- damage: number - Damage dealt (for future enemy health)
- isActive: boolean - Whether projectile is still active

**TypeScript Interface:**
```typescript
interface Projectile {
  id: string;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  damage: number;
  isActive: boolean;
}
```

**Relationships:**
- Created by Player
- Destroys Enemies on collision
- Deactivated when off-screen or after collision

### GameState

**Purpose:** Manages the overall game state, score, and game flow

**Key Attributes:**
- currentState: GameStateType - Current game phase
- score: number - Player's current score
- highScore: number - Session high score
- bombs: number - Available screen-clear bombs
- scrollDirection: ScrollDirection - Current scrolling orientation
- scrollSpeed: number - Environment scroll rate
- gameTime: number - Elapsed game time
- difficulty: number - Current difficulty multiplier

**TypeScript Interface:**
```typescript
enum GameStateType {
  START_SCREEN = 'START_SCREEN',
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  GAME_OVER = 'GAME_OVER'
}

enum ScrollDirection {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
  TRANSITIONING = 'TRANSITIONING'
}

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
```

**Relationships:**
- Controls all game entities
- Manages state transitions
- Tracks scoring and progression

### RiverBoundary

**Purpose:** Represents the navigable river boundaries that constrain player movement

**Key Attributes:**
- leftBoundary: number[] - Array of x-coordinates for left edge
- rightBoundary: number[] - Array of x-coordinates for right edge
- segmentHeight: number - Height of each boundary segment
- currentOffset: number - Scroll offset for infinite scrolling

**TypeScript Interface:**
```typescript
interface RiverBoundary {
  leftBoundary: number[];
  rightBoundary: number[];
  segmentHeight: number;
  currentOffset: number;
}
```

**Relationships:**
- Constrains Player movement
- Defines navigable game area
- Updates with scroll direction changes

---
