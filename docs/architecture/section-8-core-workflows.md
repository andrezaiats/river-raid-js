# Section 8: Core Workflows

Illustrate key system workflows using sequence diagrams:

### Game Initialization Workflow

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant GameEngine
    participant AssetManager
    participant StateManager
    participant UIManager
    
    User->>Browser: Navigate to game URL
    Browser->>GameEngine: Load index.html
    GameEngine->>GameEngine: Initialize Phaser
    GameEngine->>AssetManager: loadAssets()
    AssetManager->>AssetManager: Load sprites
    AssetManager->>AssetManager: Load audio
    AssetManager->>AssetManager: Load fonts
    AssetManager-->>GameEngine: Assets loaded
    GameEngine->>StateManager: changeState(START_SCREEN)
    StateManager->>UIManager: showScreen('start')
    UIManager-->>User: Display "CLICK TO START"
```

### Core Gameplay Loop

```mermaid
sequenceDiagram
    participant User
    participant InputManager
    participant EntityManager
    participant PhysicsManager
    participant StateManager
    participant RenderManager
    
    loop Every Frame (60 FPS)
        InputManager->>InputManager: Poll input state
        InputManager->>EntityManager: Update player position
        
        EntityManager->>EntityManager: Update all entities
        EntityManager->>PhysicsManager: checkCollisions()
        
        alt Collision Detected
            PhysicsManager->>StateManager: Handle collision type
            StateManager->>EntityManager: Destroy/collect entity
            StateManager->>StateManager: Update score/fuel
        end
        
        EntityManager->>RenderManager: Render all entities
        RenderManager->>RenderManager: Update camera scroll
        RenderManager-->>User: Display frame
    end
```

### Player Fire Action Workflow

```mermaid
sequenceDiagram
    participant User
    participant InputManager
    participant EntityManager
    participant AudioManager
    participant PhysicsManager
    participant StateManager
    
    User->>InputManager: Press fire button
    InputManager->>EntityManager: spawnProjectile()
    EntityManager->>EntityManager: Get from object pool
    EntityManager->>AudioManager: playSound('fire')
    
    loop Projectile Active
        EntityManager->>EntityManager: Update position
        EntityManager->>PhysicsManager: Check collision
        
        alt Hit Enemy
            PhysicsManager->>EntityManager: Destroy enemy
            PhysicsManager->>StateManager: updateScore(points)
            PhysicsManager->>AudioManager: playSound('explosion')
            PhysicsManager->>EntityManager: recycleEntity(projectile)
        else Hit Boundary
            PhysicsManager->>EntityManager: recycleEntity(projectile)
        else Off Screen
            EntityManager->>EntityManager: recycleEntity(projectile)
        end
    end
```

### Fuel Management Workflow

```mermaid
sequenceDiagram
    participant GameEngine
    participant StateManager
    participant Player
    participant UIManager
    participant PhysicsManager
    participant EntityManager
    
    loop Every Frame
        GameEngine->>StateManager: Update fuel consumption
        StateManager->>Player: Decrease fuel
        StateManager->>Player: Calculate maxSpeed from fuel
        StateManager->>UIManager: updateHUD(fuel)
        
        alt Fuel Critical (<20%)
            UIManager->>UIManager: Flash fuel warning
        end
        
        alt Fuel Empty
            StateManager->>StateManager: changeState(GAME_OVER)
            StateManager->>UIManager: showScreen('gameOver')
        end
    end
    
    alt Player Collects Fuel Depot
        PhysicsManager->>StateManager: Fuel collision detected
        StateManager->>Player: Increase fuel
        StateManager->>EntityManager: recycleEntity(fuelDepot)
        StateManager->>UIManager: updateHUD(fuel)
    end
```

### Dynamic Scroll Direction Transition

```mermaid
sequenceDiagram
    participant GameEngine
    participant StateManager
    participant RiverGenerator
    participant RenderManager
    participant InputManager
    participant EntityManager
    
    GameEngine->>StateManager: Check transition trigger
    alt Transition Required
        StateManager->>RenderManager: transition(VERTICAL, HORIZONTAL)
        RenderManager->>RenderManager: Start camera rotation
        
        par Camera Transition
            RenderManager->>RenderManager: Animate rotation
        and River Generation
            RiverGenerator->>RiverGenerator: Generate transition segment
            RiverGenerator->>RiverGenerator: Switch generation algorithm
        and Input Remapping  
            InputManager->>InputManager: Rotate control scheme
        end
        
        RenderManager->>StateManager: Transition complete
        StateManager->>EntityManager: Resume normal spawning
    end
```

### Bomb Usage Workflow

```mermaid
sequenceDiagram
    participant User
    participant InputManager
    participant StateManager
    participant EntityManager
    participant AudioManager
    participant UIManager
    
    User->>InputManager: Press bomb button
    InputManager->>StateManager: Request bomb use
    
    alt Has Bombs
        StateManager->>StateManager: Decrement bomb count
        StateManager->>EntityManager: Get all active enemies
        StateManager->>AudioManager: playSound('bomb')
        
        loop For Each Enemy
            EntityManager->>EntityManager: Destroy enemy
            EntityManager->>EntityManager: Spawn explosion effect
        end
        
        StateManager->>UIManager: updateHUD(bombs)
        UIManager->>UIManager: Flash screen effect
    else No Bombs
        AudioManager->>AudioManager: playSound('error')
    end
```

### Score-to-Bomb Purchase

```mermaid
sequenceDiagram
    participant User
    participant InputManager
    participant StateManager
    participant UIManager
    participant AudioManager
    
    User->>InputManager: Press purchase button
    InputManager->>StateManager: Request bomb purchase
    StateManager->>StateManager: Check score >= cost
    
    alt Sufficient Score
        StateManager->>StateManager: Deduct score cost
        StateManager->>StateManager: Increment bombs
        StateManager->>UIManager: updateHUD(score, bombs)
        StateManager->>AudioManager: playSound('purchase')
    else Insufficient Score
        StateManager->>AudioManager: playSound('error')
        UIManager->>UIManager: Flash score display
    end
```

---
