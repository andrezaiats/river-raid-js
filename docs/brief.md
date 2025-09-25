<!-- Powered by BMAD™ Core -->

# Project Brief: River Raid JS

**Session Date:** Thursday, September 25, 2025
**Facilitator:** Business Analyst Mary

---

## Executive Summary

We are creating "River Raid JS," a modern web game clone of the Atari 2600 classic, "River Raid." The primary problem being solved is the lack of a readily available, browser-based version of this beloved retro game that incorporates modern gameplay mechanics. The target market is retro gaming enthusiasts and casual web gamers looking for a quick, action-packed experience. The key value proposition is to deliver a nostalgic yet fresh gameplay experience by combining the classic, addictive formula with innovative features like dynamic scrolling and strategic resource management.

---

## Problem Statement

The classic Atari 2600 game "River Raid" remains a beloved title, but modern accessibility is limited. Fans wanting to play today must often resort to emulators, which can be cumbersome to set up, or rely on unofficial web ports that are often of low quality, lack mobile support, and offer no new gameplay experiences.

This creates a gap: retro gaming enthusiasts lack a definitive, high-quality, browser-native version of the game. Furthermore, the original's static gameplay, while classic, doesn't fully meet the expectations of modern players who are accustomed to more dynamic and varied experiences. Existing solutions are mere replicas; they fail to innovate or enhance the core loop, thus missing an opportunity to re-engage old fans and attract a new generation of players.

---

## Proposed Solution

Our proposed solution is a high-fidelity, browser-based tribute to "River Raid," developed in JavaScript to ensure maximum accessibility across all modern web browsers and devices. The core of the game will faithfully replicate the original's addictive shoot-and-refuel gameplay.

The key differentiator will be the introduction of innovative, modern features designed to enhance replayability and strategic depth. The primary innovation is a **dynamic scrolling system**, where the gameplay will shift between the classic vertical scrolling and new, challenging horizontal sections. This will be complemented by smaller, impactful mechanics, including a **fuel-to-speed link** (where low fuel decreases speed) and a **score-as-currency system** for purchasing extra bombs.

This solution will succeed because it strikes a balance between nostalgia and novelty. It respects the original source material that fans love, while providing the enhanced, dynamic experience that modern players expect, making it the definitive web-based version of the classic game.

---

## Target Users

**Primary User Segment: The Retro Gaming Enthusiast**
*   **Profile:** Ages 30-50, grew up playing Atari, NES, and other classic consoles. They have a deep appreciation for the history of video games and enjoy nostalgic experiences. They are likely active in online retro gaming communities.
*   **Behaviors:** They might use emulators or seek out remakes of classic titles. They value authenticity but are also receptive to quality-of-life improvements and respectful modernizations of classic games.
*   **Needs & Pains:** They need a convenient, "no-fuss" way to play the classics they love without downloading software or configuring emulators. They are often disappointed by low-quality, ad-riddled web clones.
*   **Goals:** To relive a cherished gaming memory and see how a classic holds up, and to be pleasantly surprised by a modern take that respects the original.

**Secondary User Segment: The Casual Web Gamer**
*   **Profile:** Any age, plays games directly in their browser on PC or mobile during short breaks (e.g., at work, during a commute). They are not necessarily familiar with the original River Raid.
*   **Behaviors:** They discover games through web portals, social media, or word-of-mouth. They favor games that are easy to learn, have short session times, and are instantly engaging.
*   **Needs & Pains:** They need games that load quickly and are intuitive to play without a lengthy tutorial. They have low tolerance for poor performance or clunky controls.
*   **Goals:** To have a fun, fast, and satisfying action game to fill a few minutes of downtime.

---

## Goals & Success Metrics

**Business Objectives**
*   Successfully launch a playable, bug-free version of the game to a public web host.
*   Develop a small, engaged community around the game, evidenced by positive feedback and social media mentions.

**User Success Metrics**
*   **High Engagement:** Players are spending a significant amount of time in the game per session (e.g., aiming for an average session duration of 10+ minutes).
*   **High Replayability:** Players are returning to the game to beat their high scores (e.g., aiming for a 20% return rate within the first week of playing).
*   **Positive Reception:** The game receives favorable ratings and comments on any platform where it is shared (e.g., Itch.io, Twitter).

**Key Performance Indicators (KPIs)**
*   **Player Count:** Total number of unique players within the first month of launch. (Target: 1,000)
*   **Average Session Duration:** The average length of a single gameplay session. (Target: 10 minutes)
*   **Day 1 Retention Rate:** The percentage of players who return to play the game the day after their first session. (Target: 15%)

---

## MVP Scope

**Core Features (Must Have)**
*   **Faithful Core Loop:** The fundamental gameplay of flying up a river, shooting enemies (ships, helicopters), avoiding riverbanks, and refueling will be accurately recreated.
*   **Dynamic Scrolling Shift:** The primary innovative feature. The game must include at least one transition from a vertical scrolling section to a horizontal one and back.
*   **Fuel-to-Speed Link:** The player's maximum speed will be directly and noticeably tied to their current fuel level.
*   **Score-as-Currency System:** Players must be able to press a key to spend a portion of their score to gain one extra bomb.
*   **Screen-Clear Bomb:** A usable, limited-quantity bomb that destroys all on-screen enemies.

**Out of Scope for MVP**
*   **Turret Bonus Stage:** The role-reversal bonus stage is a great idea for a future update, but not for the initial launch.
*   **3D Player Jet:** To maintain focus and a consistent retro aesthetic, the MVP will use 2D pixel art for all assets.
*   **Multiple Levels or Bosses:** The MVP will be a single, "endless runner" style level, consistent with the original game's structure.
*   **Online Leaderboards:** High scores will be tracked per session, but a persistent, global leaderboard is not part of the MVP.

**MVP Success Criteria**
*   The MVP is a success if it delivers a stable, complete, and fun gameplay loop that includes all the "Must Have" features. Success means a player can start the game, play until they lose, and have their session's high score tracked, with all the innovative mechanics working as intended.

---

## Post-MVP Vision

**Phase 2 Features**
*   The top priority for a post-MVP update would be to implement the most popular ideas that were deferred, starting with the **Turret Bonus Stage** to add variety to the gameplay loop.
*   Introduce **new enemy types and environmental hazards** to deepen the challenge in both vertical and horizontal sections.
*   Implement a persistent **online leaderboard** to foster competition and community.

**Long-term Vision (1-2 years)**
*   The long-term vision is to evolve the project from a "clone" into a "spiritual successor." This could involve creating a **structured campaign with multiple, distinct levels**, each with its own unique theme, enemies, and a challenging end-boss. The scrolling shift mechanic would be heavily utilized to create unique level designs.

**Expansion Opportunities**
*   The game's framework could be used to create spiritual successors to other classic vertical shooters.
*   There is potential for a mobile-native version if the web game proves popular.

---

## Technical Considerations

**Platform Requirements**
*   **Target Platforms:** Modern desktop and mobile web browsers.
*   **Browser/OS Support:** Latest versions of Chrome, Firefox, Safari, and Edge.
*   **Performance Requirements:** The game must maintain a consistent 60 frames per second (FPS) during gameplay on average consumer hardware.

**Technology Preferences**
*   **Frontend:** Plain JavaScript (ES6+). To accelerate development and handle rendering, physics, and input, using a lightweight 2D game library like **Phaser** or **PixiJS** is highly recommended over building directly on the Canvas API.
*   **Backend:** Not required for the MVP, as there are no server-side features like leaderboards or user accounts.
*   **Database:** Not required for the MVP.
*   **Hosting/Infrastructure:** The game will be deployed as a static website. Services like **GitHub Pages**, **Netlify**, or **Vercel** are ideal.

**Architecture Considerations**
*   **Repository Structure:** A simple, clean structure (e.g., `/src` for code, `/assets` for media, `index.html` at the root) will be used.
*   **Service Architecture:** The MVP will be a purely client-side application.
*   **Integration Requirements:** None for the MVP.
*   **Security/Compliance:** Standard web security best practices will be followed. The MVP will not collect or store any user data.

---

## Constraints & Assumptions

**Constraints**
*   **Budget:** Zero. This is a personal project that will rely exclusively on free and open-source tools, libraries, and hosting services.
*   **Timeline:** This is a learning project with no hard deadline. The goal is to focus on quality and learning the development process rather than rushing to a specific release date.
*   **Resources:** This is a solo project. All development, design, and testing will be handled by a single person.

**Key Assumptions**
*   **Audience Interest:** We assume there is a latent interest in a high-quality, modernized browser version of River Raid among both retro and casual gamers.
*   **Technical Feasibility:** We assume that implementing the core innovative feature—the dynamic vertical-to-horizontal scrolling shift—is achievable for a solo developer using a modern JavaScript game library.
*   **Value of New Features:** We assume that the newly designed mechanics (scrolling shift, fuel/speed link, score/bomb system) will be seen as compelling enhancements by players and will make the game more fun and replayable than a simple 1:1 clone.

---

## Risks & Open Questions

**Key Risks**
*   **Technical Complexity Risk:** The dynamic scrolling shift, while conceptually clear, could prove to be technically challenging to implement smoothly, potentially causing delays or bugs that affect the core gameplay experience.
*   **Scope Creep Risk:** As a passion project, there's a risk of wanting to add "just one more feature" (like the turret bonus stage or 3D jet) before the MVP is complete, which could delay the project indefinitely.
*   **Player Experience Risk:** The new mechanics, while innovative, might not be well-received by purists of the original game, or they might make the game too complex for new casual players.

**Open Questions**
*   What is the ideal difficulty curve for a game that serves both nostalgic fans and newcomers?
*   How will the controls be adapted to work intuitively on both keyboard (desktop) and touchscreens (mobile)?
*   What is the most effective way to introduce the new mechanics (scrolling shift, score-as-currency) to players without a formal, disruptive tutorial?

**Areas Needing Further Research**
*   **JavaScript Game Libraries:** A decision needs to be made between different libraries (e.g., Phaser vs. PixiJS). This will involve building small prototypes to understand their respective strengths and weaknesses for this specific project.
*   **Pixel Art Assets:** A plan is needed for creating or sourcing the 2D art for the game, including the player jet, enemies, and environment tiles.

---

## Next Steps

**Immediate Actions**
1.  **Technology Evaluation:** Create "Hello World" style prototypes in both Phaser and PixiJS to evaluate which library feels more intuitive and is better suited for the project's core mechanics, especially the scrolling shift.
2.  **Asset Plan:** Decide on an art style and a plan for asset creation. This involves choosing a color palette and deciding whether to create the pixel art from scratch or adapt existing open-source assets.
3.  **Repository Setup:** Initialize a new Git repository for the project and set up the basic file structure (`index.html`, `/src`, `/assets`).
4.  **Begin Core Mechanic Development:** Once a library is chosen, begin development of the most fundamental features: player movement, shooting, and the static vertical scrolling of the riverbanks.

---

*This Project Brief provides the full context for River Raid JS. Please start in 'PRD Generation Mode', review the brief thoroughly to work with the user to create the PRD section by section as the template indicates, asking for any necessary clarification or suggesting improvements.*