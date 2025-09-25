# PR Process

1. Create feature branch from develop
2. Make changes with clear commits
3. Run `npm run check` locally
4. Push and create PR to develop
5. CI runs automatically
6. Merge after review
```

### Debugging Workflow

```javascript
// Debug configuration for VS Code (.vscode/launch.json)
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Game",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/apps/web",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "/@fs/*": "${workspaceFolder}/*"
      }
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Tests",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "test:debug"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

### Hot Reload Development Tips

```typescript
// Enable Phaser debug mode in development
// In src/game/config/GameConfig.ts
export const gameConfig: Phaser.Types.Core.GameConfig = {
  // ... other config
  physics: {
    default: 'arcade',
    arcade: {
      debug: import.meta.env.DEV, // Show collision boxes in dev
      gravity: { y: 0 }
    }
  },
  // Enable FPS meter in dev
  fps: import.meta.env.DEV ? {
    target: 60,
    min: 30,
    forceSetTimeOut: true
  } : undefined
};

// Hot reload friendly scene updates
if (import.meta.hot) {
  import.meta.hot.accept('./scenes/GameScene', () => {
    // Reload scene without losing game state
    game.scene.remove('GameScene');
    game.scene.add('GameScene', GameScene);
  });
}
```

---

## Section 14: Deployment Architecture

Define deployment strategy based on platform choice.

### Deployment Strategy

**Frontend Deployment:**
- **Platform:** Vercel
- **Build Command:** `npm run build`
- **Output Directory:** `apps/web/dist`
- **CDN/Edge:** Vercel Edge Network (automatic global distribution)

**Backend Deployment:**
- **Platform:** N/A (Client-side only for MVP)
- **Build Command:** N/A
- **Deployment Method:** N/A

**Asset Optimization:**
- Sprites compressed via build pipeline
- JavaScript bundles minified and tree-shaken
- Automatic code splitting for optimal loading
- Brotli compression on Vercel Edge

### CI/CD Pipeline

```yaml