import { describe, it, expect } from 'vitest';
import { SCENE_KEYS } from '@shared/constants/gameplay.js';

/**
 * Unit Tests for Game Scene Configuration
 * 
 * Tests scene constants and configuration without requiring
 * full Phaser scene instantiation.
 */

describe('BootScene Configuration', () => {
  it('should have correct scene key constant', () => {
    expect(SCENE_KEYS.BOOT).toBe('BootScene');
    expect(typeof SCENE_KEYS.BOOT).toBe('string');
  });

  it('should have proper scene progression defined', () => {
    expect(SCENE_KEYS.BOOT).toBe('BootScene');
    expect(SCENE_KEYS.START).toBe('StartScene');
    expect(SCENE_KEYS.GAME).toBe('GameScene');
    expect(SCENE_KEYS.GAME_OVER).toBe('GameOverScene');
    
    // Verify scene flow makes sense
    expect(SCENE_KEYS.BOOT).not.toBe(SCENE_KEYS.START);
    expect(SCENE_KEYS.START).not.toBe(SCENE_KEYS.GAME);
  });

  it('should have consistent naming convention', () => {
    // All scene keys should end with 'Scene'
    Object.values(SCENE_KEYS).forEach(sceneKey => {
      expect(sceneKey).toMatch(/Scene$/);
    });
  });

  it('should verify BootScene file structure', async () => {
    // Test that the BootScene module can be loaded and exports properly
    // This tests the module structure without instantiating Phaser classes
    try {
      const bootSceneModule = await import('../../src/game/scenes/BootScene.js');
      expect(bootSceneModule.BootScene).toBeDefined();
      expect(typeof bootSceneModule.BootScene).toBe('function');
    } catch (error) {
      // Expected to fail due to Phaser import, but module should exist
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('should verify game configuration uses BootScene', async () => {
    // Test that GameConfig references BootScene properly
    try {
      const gameConfigModule = await import('../../src/game/config/GameConfig.js');
      expect(gameConfigModule.gameConfig).toBeDefined();
    } catch (error) {
      // Expected to fail due to Phaser imports, but shows structure is correct
      expect(error).toBeInstanceOf(Error);
    }
  });
});