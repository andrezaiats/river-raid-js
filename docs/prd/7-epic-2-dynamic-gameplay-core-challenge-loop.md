# 7. Epic 2: Dynamic Gameplay & Core Challenge Loop

**Goal:** The goal of this epic is to implement all the dynamic and interactive elements of the game. This includes adding enemies, player combat, the strategic fuel management system, and the innovative scrolling-shift mechanic. By the end of this epic, "River Raid JS" will be a feature-complete, playable game that fully delivers on the vision outlined in the Project Brief.

---

### Story 2.1: Player Shooting

*   **As a** player,
*   **I want** to be able to fire projectiles from my jet,
*   **so that** I can destroy enemy targets.

**Acceptance Criteria:**
1.  Pressing a dedicated key (e.g., Spacebar) on desktop fires a projectile.
2.  Tapping a dedicated area on the screen on mobile fires a projectile.
3.  Projectiles travel forward from the jet's position.

### Story 2.2: Spawn and Animate Enemies

*   **As a** player,
*   **I want** to encounter enemy ships and helicopters that move,
*   **so that** I have challenging targets to engage with.

**Acceptance Criteria:**
1.  Enemy ship sprites are spawned and move at varying speeds down the river.
2.  Enemy helicopter sprites are spawned and can move more dynamically (e.g., side-to-side) within the river boundaries.

### Story 2.3: Combat Loop: Destruction and Scoring

*   **As a** player,
*   **I want** my projectiles to destroy enemies and for my score to increase,
*   **so that** I am rewarded for successful gameplay.

**Acceptance Criteria:**
1.  When a player projectile collides with an enemy, the enemy is destroyed and removed from the screen.
2.  The player's score, displayed on the HUD, increases by a set amount for each enemy destroyed.

### Story 2.4: Spawn Fuel Depots

*   **As a** player,
*   **I want** to see fuel depots appear in the river,
*   **so that** I have the opportunity to refuel my jet.

**Acceptance Criteria:**
1.  Fuel depot sprites are spawned periodically within the river.
2.  Fuel depots are visually distinct from enemies.

### Story 2.5: Fuel and Collision Failure States

*   **As a** player,
*   **I want** the game to end if I run out of fuel or collide with an enemy,
*   **so that** there is a clear challenge and failure condition.

**Acceptance Criteria:**
1.  The jet's fuel, displayed on the HUD, continuously decreases over time.
2.  Flying over a fuel depot replenishes the jet's fuel.
3.  If the fuel level reaches zero, the jet is destroyed and the "Game Over" screen is displayed.
4.  If the jet collides with an enemy sprite, the jet is destroyed and the "Game Over" screen is displayed.

### Story 2.6: Fuel-to-Speed Link

*   **As a** player,
*   **I want** my jet's maximum speed to be tied to my fuel level,
*   **so that** I must strategically manage my fuel to maintain maneuverability.

**Acceptance Criteria:**
1.  The jet's maximum achievable speed is directly proportional to the current fuel level (e.g., 100% fuel = 100% speed, 50% fuel = 50% speed).
2.  The change in speed is noticeable and impacts gameplay.

### Story 2.7: Screen-Clear Bomb

*   **As a** player,
*   **I want** to use a limited-quantity bomb to destroy all enemies on screen,
*   **so that** I have a powerful tool for escaping difficult situations.

**Acceptance Criteria:**
1.  Pressing a dedicated input (key/button) uses one bomb.
2.  All currently visible enemies are destroyed simultaneously.
3.  The bomb count on the HUD is updated to reflect the bomb used.

### Story 2.8: Score-as-Currency for Bombs

*   **As a** player,
*   **I want** to trade a portion of my score for an extra bomb,
*   **so that** I can make strategic decisions about resource allocation.

**Acceptance Criteria:**
1.  Pressing a dedicated input (key/button) decreases the player's score by a predefined amount.
2.  The player's bomb count is increased by one.
3.  This action is only possible if the player has sufficient score to spend.

### Story 2.9: Dynamic Vertical-to-Horizontal Scrolling Shift

*   **As a** player,
*   **I want** the river to dynamically change direction, shifting the gameplay from vertical to horizontal scrolling,
*   **so that** the experience is varied and unpredictable.

**Acceptance Criteria:**
1.  After a set amount of time or distance, the river layout smoothly transitions, causing the direction of travel and scrolling to shift from vertical to horizontal.
2.  Player controls are reoriented to match the new scrolling direction (e.g., "up" now moves the jet "right").
3.  The game can transition back from horizontal to vertical scrolling.
4.  Enemies and fuel depots spawn correctly in both orientations.

---
