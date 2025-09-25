<!-- Powered by BMAD™ Core -->

# Brainstorming Session Results

**Session Date:** Thursday, September 25, 2025
**Facilitator:** Business Analyst Mary

---

## Executive Summary

**Topic:** Generating innovative features for a JavaScript-based web game clone of the Atari 2600 classic, "River Raid".

**Session Goals:** To explore and select one or two standout features to make the clone more interesting and unique, while serving as an initial project using the bmad-method.

**Techniques Used:** S.C.A.M.P.E.R., Feature Prioritization Matrix

**Total Ideas Generated:** 9

**Key Themes Identified:**
- **Modernizing Gameplay:** Introducing mechanics that add strategic depth beyond the original's scope.
- **Dynamic Experience:** Creating a less predictable and more varied gameplay loop.
- **Risk/Reward Systems:** Empowering the player with choices that have both potential benefits and drawbacks.

---

## Technique Sessions

### S.C.A.M.P.E.R.

- **Description:** A creative thinking technique that guides brainstorming by asking questions about existing products, services, or ideas through seven distinct lenses: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, and Reverse.
- **Ideas Generated:**
  1.  **3D Player Jet:** Substitute the 2D player sprite with a 3D model for a unique visual contrast.
  2.  **Scrolling Shift:** Combine vertical scrolling with new horizontal scrolling sections.
  3.  **Screen-Clear Bomb:** Adapt a classic shoot 'em up mechanic for defensive use.
  4.  **Dynamic River:** Modify the environment by having the river's width and speed change.
  5.  **Fuel Affects Speed:** Modify the fuel mechanic so that low fuel slows the player's vehicle.
  6.  **Explodable Fuel Depots:** Put fuel depots to another use as makeshift bombs.
  7.  **Score as Currency:** Put the score to another use, allowing players to buy bombs.
  8.  **Eliminate Slow Enemies:** Eliminate less threatening enemies to increase game intensity.
  9.  **Turret Bonus Stage:** Reverse the player's role in a special bonus stage.

### Feature Prioritization Matrix

- **Description:** A structured approach to evaluate and prioritize ideas based on a common set of criteria. We rated each idea on Fun Factor (1-5), Uniqueness (1-5), and Development Effort (1=Easy, 5=Hard).
- **Insights Discovered:** This technique clearly separated high-value, low-effort "quick wins" from more ambitious "defining features," enabling a strategic selection process.
- **Results Table:**

| Idea | Fun Factor (1-5) | Uniqueness (1-5) | Dev Effort (1=Easy, 5=Hard) |
| :--- | :---: | :---: | :---: |
| **Scrolling Shift** | 4 | 5 | **3** |
| **Turret Bonus Stage** | 4 | 4 | **3** |
| **Screen-Clear Bomb** | 4 | 2 | **2** |
| **Fuel Affects Speed** | 3 | 3 | **1** |
| **Score as Currency** | 3 | 3 | **1** |
| **3D Player Jet** | 2 | 2 | **2** |
| **Explodable Fuel Depots**| 3 | 1 | **1** |
| **Dynamic River** | 2 | 1 | **1** |
| **Eliminate Slow Enemies**| 1 | 1 | **1** |

---

## Action Planning

Based on the prioritization matrix, we selected a strategic combination of one "big feature" and two "quick wins".

### #1 Priority: Scrolling Shift
- **Rationale:** This feature scored the highest for Uniqueness (5/5) and very high for Fun Factor (4/5). It will serve as the game's primary unique selling proposition, fundamentally distinguishing it from the original.
- **Next steps:**
  - Design level chunks for horizontal scrolling.
  - Implement the logic to transition between vertical and horizontal modes.
  - Adapt enemy patterns and player controls for the horizontal sections.

### #2 Priority: Fuel Affects Speed
- **Rationale:** This feature provides excellent value, adding strategic depth for a minimal development effort (1/5). It makes the existing fuel mechanic more engaging.
- **Next steps:**
  - Implement a simple function that maps the current fuel level to the player's maximum speed.

### #3 Priority: Score as Currency
- **Rationale:** Similar to the fuel mechanic, this adds a compelling risk/reward system for a very low development effort (1/5). It makes the score more interactive and meaningful.
- **Next steps:**
  - Implement a "buy bomb" function triggered by a key press, which checks if the score is sufficient, then subtracts the cost and adds a bomb.

---

*Session facilitated using the BMAD-METHOD™ brainstorming framework*