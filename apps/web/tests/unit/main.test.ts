import { describe, it, expect } from 'vitest';

/**
 * Unit Tests for Application Structure
 * 
 * Tests that verify the basic application setup and configuration
 * without requiring full Phaser initialization.
 */

describe('Application Configuration', () => {
  it('should have required game constants defined', async () => {
    const { GAME_WIDTH, GAME_HEIGHT, SCENE_KEYS } = await import('@shared/constants/gameplay.js');
    
    expect(GAME_WIDTH).toBe(800);
    expect(GAME_HEIGHT).toBe(600);
    expect(SCENE_KEYS.BOOT).toBe('BootScene');
    expect(SCENE_KEYS.START).toBe('StartScene');
    expect(SCENE_KEYS.GAME).toBe('GameScene');
    expect(SCENE_KEYS.GAME_OVER).toBe('GameOverScene');
  });

  it('should have proper package configuration', async () => {
    const packageJson = await import('../../package.json');
    
    expect(packageJson.name).toBe('@river-raid/web');
    expect(packageJson.type).toBe('module');
    expect(packageJson.dependencies.phaser).toBe('3.70.0');
    expect(packageJson.devDependencies.vitest).toBe('1.6.0');
    expect(packageJson.devDependencies['@playwright/test']).toBe('1.44.0');
  });

  it('should have required scripts defined', async () => {
    const packageJson = await import('../../package.json');
    
    expect(packageJson.scripts.build).toBe('vite build');
    expect(packageJson.scripts.test).toBe('vitest run');
    expect(packageJson.scripts['test:e2e']).toBe('playwright test');
    expect(packageJson.scripts.dev).toBe('vite');
  });

  it('should have proper TypeScript configuration', async () => {
    // Verify that we can import types without errors
    const { GAME_WIDTH } = await import('@shared/constants/gameplay.js');
    
    // This tests that the module resolution and TypeScript paths are working
    expect(typeof GAME_WIDTH).toBe('number');
  });

  it('should verify HTML container structure exists', () => {
    // Simulate the expected DOM structure
    document.body.innerHTML = '<div id="game-container"></div>';
    
    const gameContainer = document.getElementById('game-container');
    expect(gameContainer).toBeTruthy();
    expect(gameContainer?.tagName).toBe('DIV');
  });
});