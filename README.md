# River Raid JS

A modern, browser-based tribute to the classic Atari 2600 game "River Raid" with innovative gameplay mechanics and dynamic scrolling technology.

![Game Preview](https://img.shields.io/badge/Status-In%20Development-yellow)
![Tech Stack](https://img.shields.io/badge/Tech-JavaScript%20ES6%2B-blue)
![Game Engine](https://img.shields.io/badge/Engine-Phaser%203.70.0-green)

## 🎮 About

River Raid JS brings the beloved classic arcade shooter to modern web browsers with respect for the original while introducing compelling new mechanics. Navigate through dynamic river environments, manage fuel strategically, and experience the innovative scrolling system that shifts between vertical and horizontal gameplay.

### Key Features

- **🕹️ Faithful Core Gameplay**: Classic shoot-and-refuel mechanics that made the original addictive
- **🔄 Dynamic Scrolling System**: Revolutionary transitions between vertical and horizontal scrolling sections
- **⛽ Fuel-to-Speed Mechanics**: Strategic fuel management directly affects your maximum speed
- **💣 Score-as-Currency**: Spend points to purchase extra bombs for challenging situations
- **📱 Cross-Platform**: Optimized for both desktop and mobile browsers
- **🎯 60 FPS Performance**: Smooth gameplay on average consumer hardware

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js 18+ (for development)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bmad-method-riverraid.git
cd bmad-method-riverraid

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will be available at `http://localhost:3000`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎯 Gameplay

### Controls

**Desktop:**
- **Arrow Keys** / **WASD**: Navigate your jet
- **Spacebar**: Fire weapons
- **B Key**: Use screen-clear bomb (limited quantity)
- **X Key**: Purchase extra bomb (costs score points)

**Mobile:**
- **Touch Controls**: Tap and drag to move
- **Tap**: Fire weapons
- **Bomb Button**: Use screen-clear bomb
- **Buy Button**: Purchase extra bomb

### Objective

Fly through the river, destroy enemy ships and helicopters, avoid crashing into riverbanks, and manage your fuel carefully. Refuel at fuel depots to continue your journey. Experience dynamic gameplay as the perspective shifts between vertical and horizontal scrolling sections.

## 🛠️ Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Language** | JavaScript (ES6+) | ES2022 | Core game logic |
| **Game Engine** | Phaser | 3.70.0 | 2D rendering and physics |
| **Build Tool** | Vite | 5.2.0 | Development and bundling |
| **Testing** | Vitest | 1.6.0 | Unit testing |
| **E2E Testing** | Playwright | 1.44.0 | Automated testing |
| **CI/CD** | GitHub Actions | - | Deployment pipeline |
| **Hosting** | Vercel | - | Static hosting |

## 📁 Project Structure

```
bmad-method-riverraid/
├── src/                    # Source code
│   ├── scenes/            # Phaser game scenes
│   ├── entities/          # Game objects (Player, Enemies, etc.)
│   ├── systems/           # Game systems (Physics, Audio, etc.)
│   └── utils/             # Utility functions
├── assets/                # Game assets
│   ├── sprites/           # Image assets
│   ├── audio/             # Sound effects and music
│   └── fonts/             # Font files
├── docs/                  # Project documentation
├── tests/                 # Test files
├── public/                # Static public files
└── dist/                  # Build output (generated)
```

## 🎯 Development

### Development Workflow

1. **Feature Development**: Create feature branches from `main`
2. **Testing**: Write unit tests for new functionality
3. **Code Quality**: Follow the coding standards in `docs/architecture/coding-standards.md`
4. **Documentation**: Update relevant documentation
5. **Pull Request**: Submit PR with clear description and testing notes

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run lint         # Run code linting
npm run format       # Format code with Prettier
```

### Code Quality

- **ESLint**: Enforces code style and catches errors
- **Prettier**: Automatic code formatting
- **Vitest**: Unit testing framework
- **Playwright**: End-to-end testing

## 🎮 Game Development Status

### MVP Features (In Progress)

- [x] Project foundation and tooling setup
- [x] Basic Phaser game structure
- [ ] Player jet movement and controls
- [ ] Enemy spawning and AI
- [ ] Collision detection system
- [ ] Fuel management system
- [ ] Dynamic scrolling transitions
- [ ] Score and bomb purchasing system
- [ ] Audio integration
- [ ] Mobile touch controls
- [ ] Performance optimization

### Post-MVP Features (Planned)

- [ ] Turret bonus stage
- [ ] Online leaderboards
- [ ] Additional enemy types
- [ ] Environmental hazards
- [ ] Campaign mode with levels
- [ ] Boss battles

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](docs/architecture/pr-process.md) for details.

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the coding standards in `docs/architecture/coding-standards.md`
4. Write tests for your changes
5. Commit using our [commit convention](docs/architecture/commit-convention.md)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📚 Documentation

- **[Project Brief](docs/brief.md)**: Complete project overview and goals
- **[Architecture](docs/architecture.md)**: Technical architecture and design decisions
- **[PRD](docs/prd.md)**: Product Requirements Document
- **[Coding Standards](docs/architecture/coding-standards.md)**: Development guidelines
- **[Development Workflow](docs/architecture/section-13-development-workflow.md)**: Process documentation

## 🎯 Target Metrics

- **Player Count**: 1,000 unique players (first month)
- **Session Duration**: 10+ minutes average
- **Retention Rate**: 15% day-1 retention
- **Performance**: Consistent 60 FPS gameplay

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original "River Raid" game by Activision (1982)
- [Phaser](https://phaser.io/) community for excellent documentation
- Retro gaming community for inspiration and feedback

---

**River Raid JS** - Bringing classic arcade action to the modern web 🚁✨