# 6. Epic 1: Project Foundation & Core Player Experience

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
