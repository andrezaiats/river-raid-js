# River Raid JS Product Requirements Document (PRD)

## 1. Goals and Background Context

### 1.1. Goals

*   Deliver a high-fidelity, browser-based tribute to the Atari 2600 classic, "River Raid".
*   Solve the lack of a readily available, high-quality web version of the game.
*   Attract both retro gaming enthusiasts and casual web gamers.
*   Balance nostalgic gameplay with innovative, modern features to enhance replayability.
*   Introduce a dynamic scrolling system that shifts between vertical and horizontal gameplay.
*   Implement novel mechanics like a fuel-to-speed link and a score-as-currency system for bombs.

### 1.2. Background Context

The classic Atari 2600 game "River Raid" remains a beloved title, but it is not easily accessible to a modern audience. Currently, players must rely on cumbersome emulators or low-quality web ports that lack innovation and mobile support. This project aims to fill that gap by creating the definitive, browser-native version of the game.

"River Raid JS" will faithfully replicate the original's addictive shoot-and-refuel gameplay while introducing fresh mechanics to meet the expectations of today's players. By combining the classic formula with a dynamic scrolling system and other strategic elements, we will deliver an experience that is both a nostalgic homage and a compelling modern web game.

### 1.3. Change Log

| Date       | Version | Description   | Author   |
| :--------- | :------ | :------------ | :------- |
| 2025-09-25 | 0.1     | Initial draft | John, PM |

---

## 2. Requirements

### 2.1. Functional

1.  **FR1:** The game will faithfully replicate the core gameplay loop of flying up a river, shooting enemies (ships, helicopters), avoiding riverbanks, and refueling.
2.  **FR2:** The game will feature a dynamic scrolling system that transitions between vertical and horizontal gameplay sections.
3.  **FR3:** The player's maximum speed will be directly and noticeably tied to their current fuel level.
4.  **FR4:** Players will be able to spend a portion of their score to gain one extra bomb.
5.  **FR5:** A usable, limited-quantity screen-clearing bomb will be available to the player.

### 2.2. Non-Functional

1.  **NFR1:** The game must be a purely client-side application, deployable as a static website.
2.  **NFR2:** The game must maintain a consistent 60 frames per second (FPS) on average consumer hardware.
3.  **NFR3:** The game must be accessible and playable on the latest versions of modern desktop and mobile web browsers (Chrome, Firefox, Safari, Edge).
4.  **NFR4:** The project will rely exclusively on free and open-source tools, libraries, and hosting services.
5.  **NFR5:** The game will not collect or store any user data.

---

## 3. User Interface Design Goals

### 3.1. Overall UX Vision

The user experience should be immediate, intuitive, and focused purely on gameplay. The goal is a "pick up and play" feel, with no tutorials or complex menus. The interface should feel like a modern enhancement of a classic arcade cabinet experience, prioritizing fast load times and responsive controls. The design should be clean, unobtrusive, and allow the gameplay itself to be the star.

### 3.2. Key Interaction Paradigms

*   **Direct Control:** The player will have immediate and direct control over the jet via keyboard (desktop) or touch (mobile).
*   **Minimalist HUD:** The Heads-Up Display will be simple, showing only essential information: Score, Fuel, and remaining Bombs.
*   **Single-Action Inputs:** Core actions (fire, bomb) will be mapped to single, intuitive inputs.

### 3.3. Core Screens and Views

*   **Start Screen:** A simple screen with the game's title and a "Click to Start" prompt.
*   **Game View:** The main gameplay area where all action takes place.
*   **Game Over Screen:** A screen displaying the final score and a "Play Again" button.

### 3.4. Accessibility: WCAG AA

While a fast-paced action game presents challenges, we will aim for WCAG AA compliance where feasible. This includes ensuring high-contrast UI elements (like the HUD) and allowing for remappable keys in a future version.

### 3.5. Branding

The branding will evoke the classic Atari 2600 era. This includes using pixelated fonts, a limited color palette reminiscent of early consoles, and a logo design inspired by 1980s video game box art.

### 3.6. Target Device and Platforms: Web Responsive

The game must be fully responsive, providing a seamless experience on both desktop and mobile web browsers. Controls will adapt to the input method (keyboard for desktop, on-screen touch controls for mobile).

---

## 4. Technical Assumptions

### 4.1. Repository Structure: Monorepo

The project will be managed within a single repository. Given the project's scope as a solo-developed, client-side application, a monorepo provides the simplest structure for managing all code and assets.

### 4.2. Service Architecture: Client-Side Application

The service architecture will be a purely client-side application. The MVP does not require a backend, user accounts, or a database. The entire game will be delivered as static files to the user's browser.

### 4.3. Testing Requirements: Unit + Integration

While this is a personal project, a focus on quality is paramount. The testing strategy will include:
*   **Unit Tests:** To verify individual components and game logic (e.g., scoring, fuel consumption).
*   **Integration Tests:** To ensure that different parts of the game work together correctly (e.g., player input correctly triggers shooting and enemy destruction).
End-to-end testing will be handled through manual gameplay for the MVP.

### 4.4. Additional Technical Assumptions and Requests

*   **Frontend Technology:** The project will be built with plain JavaScript (ES6+). A lightweight 2D game library, such as Phaser or PixiJS, is strongly recommended to handle rendering, physics, and input.
*   **Hosting:** The application will be deployed as a static website on a free hosting service like GitHub Pages, Netlify, or Vercel.
*   **Budget:** The project has a zero-dollar budget and must rely exclusively on free and open-source software and services.

---

## 5. Epic List

1.  **Epic 1: Project Foundation & Core Player Experience:** Establish the project structure, rendering engine, and core player mechanics, resulting in a controllable jet flying through a static, endlessly scrolling vertical river.
2.  **Epic 2: Dynamic Gameplay & Core Challenge Loop:** Implement all interactive and innovative features, including enemies, combat, fuel management, the dynamic vertical-to-horizontal scrolling shift, and the full game loop from start to game over.

---

## 6. Epic 1: Project Foundation & Core Player Experience

**Goal:** The goal of this epic is to set up the complete technical foundation of the game and implement the player's core movement and interaction with the world. This includes initializing the game project, rendering the player's jet and the river environment, and enabling smooth, responsive player control. By the end of this epic, we will have a playable, though non-interactive, slice of the game that proves out the core rendering and control systems.

---

### Story 1.1: Initial Project & Game Library Setup

*   **As a** developer,
*   **I want** to set up the initial Git repository, file structure, and integrate a chosen JavaScript game library,
*   **so that** I have a foundational, runnable project structure to build the game upon.

**Acceptance Criteria:**
1.  A Git repository is initialized for the project.
2.  The standard file structure (`/src`, `/assets`, `index.html`) is created.
3.  A JS game library (e.g., Phaser, PixiJS) is installed and configured to render a blank canvas in the browser.
4.  The project is deployed to a static hosting service (e.g., GitHub Pages) and is accessible via a URL.

### Story 1.2: Render Player Jet

*   **As a** player,
*   **I want** to see my jet on the screen,
*   **so that** I can visually identify my character in the game world.

**Acceptance Criteria:**
1.  A placeholder 2D sprite for the player's jet is loaded and displayed on the screen.
2.  The jet is centered horizontally and positioned near the bottom of the screen by default.

### Story 1.3: Basic Keyboard Controls

*   **As a** desktop player,
*   **I want** to control the jet's movement using arrow keys,
*   **so that** I can navigate the game world.

**Acceptance Criteria:**
1.  Pressing the left/right and up/down arrow keys moves the jet smoothly in the corresponding direction.
2.  The jet is constrained and cannot move outside the visible screen boundaries.

### Story 1.4: Render Scrolling River Environment

*   **As a** player,
*   **I want** to see the river environment scrolling vertically,
*   **so that** I get the sense of flying forward.

**Acceptance Criteria:**
1.  The riverbanks are rendered on both sides of the screen using placeholder graphics.
2.  The riverbanks scroll from top to bottom at a constant speed, creating a continuous and seamless loop.

### Story 1.5: Riverbank Collision Detection

*   **As a** player,
*   **I want** my jet to be stopped by the riverbanks,
*   **so that** I understand the boundaries of the playable area.

**Acceptance Criteria:**
1.  The jet's movement is physically blocked when it attempts to move into the left or right riverbank.
2.  Collision detection is accurate and prevents the jet's sprite from visually overlapping with the riverbank sprites.

### Story 1.6: Basic Touch Controls

*   **As a** mobile player,
*   **I want** to control the jet by touching and dragging on the screen,
*   **so that** I can play the game on a mobile device.

**Acceptance Criteria:**
1.  Touching and dragging on the screen moves the jet to the corresponding coordinates.
2.  The jet's movement follows the touch input smoothly and is constrained by the riverbanks.

---

## 7. Epic 2: Dynamic Gameplay & Core Challenge Loop

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

## 8. Next Steps

### 8.1. UX Expert Prompt

> `@ux-expert, please review the attached Product Requirements Document (`docs/prd.md`). Based on the "User Interface Design Goals" (Section 3), please develop a comprehensive UI/UX strategy. Your primary focus should be on creating a minimalist, retro-inspired UI that is highly intuitive for both desktop and mobile players. Please provide mockups for the core screens (Start, Game, Game Over) and a style guide for the HUD, fonts, and color palette that aligns with the specified Atari 2600-era branding. `

### 8.2. Architect Prompt

> `@architect, please review the attached Product Requirements Document (`docs/prd.md`). Your task is to create the technical architecture for the "River Raid JS" project. Pay special attention to the "Technical Assumptions" (Section 4) and the full story breakdown in Epics 1 and 2. Your first critical decision is to evaluate and choose a JavaScript game library (e.g., Phaser vs. PixiJS) that is best suited to handle the "Dynamic Vertical-to-Horizontal Scrolling Shift" (Story 2.9). Please deliver a complete architecture document that includes the project structure, class diagrams, and a development plan based on the defined user stories.`