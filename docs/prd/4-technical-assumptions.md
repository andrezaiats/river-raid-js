# 4. Technical Assumptions

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
