import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GAME_WIDTH, GAME_HEIGHT, SCENE_KEYS } from '@shared/constants/gameplay.js';
import { GameScene } from '../../src/game/scenes/GameScene.js';
import { ASSET_KEYS } from '../../src/game/config/AssetManifest.js';
import { EntityManager } from '../../src/game/managers/EntityManager.js';
import { RenderManager } from '../../src/game/managers/RenderManager.js';
import { StateManager } from '../../src/game/managers/StateManager.js';

// Mock Phaser to avoid canvas initialization issues
vi.mock('phaser', () => {
  return {
    default: {
      Scene: class MockPhaserScene {
        scene: any;
        add: any;
        physics: any;
        textures: any;

        constructor(config: any) {
          this.scene = { key: config.key };
          this.add = {
            existing: vi.fn(),
            text: vi.fn(() => ({ setOrigin: vi.fn() }))
          };
          this.physics = { add: { existing: vi.fn() } };
          this.textures = { exists: vi.fn(() => true) };
        }

        destroy() {
          // Mock destroy method
        }
      },
      GameObjects: {
        Sprite: class MockSprite {
          x: number;
          y: number;
          texture: { key: string };
          body: any;
          depth: number = 0;
          active: boolean = true;
          id: string;
          position: { x: number; y: number };
          velocity: { x: number; y: number };

          constructor(scene: any, x: number, y: number, texture: string) {
            this.x = x;
            this.y = y;
            this.texture = { key: texture };
            this.body = { setSize: vi.fn() };
            this.id = `player_${Date.now()}_${Math.random()}`;
            this.position = { x, y };
            this.velocity = { x: 0, y: 0 };
            scene.add.existing(this);
            scene.physics.add.existing(this);
          }

          setDepth(d: number) {
            this.depth = d;
            return this;
          }

          destroy() {
            this.active = false;
          }

          update(delta: number) {
            this.position.x = this.x;
            this.position.y = this.y;
          }
        }
      }
    }
  };
});

describe('Player Rendering Integration', () => {
  let gameScene: GameScene;

  beforeEach(() => {
    // Reset singleton instances to avoid test interference
    EntityManager.resetInstance();
    RenderManager.resetInstance();
    StateManager.resetInstance();

    // Create GameScene instance
    gameScene = new GameScene();
    // Manually call create to initialize player
    gameScene.create();
  });

  describe('GameScene Player Integration', () => {
    it('should create GameScene with correct key', () => {
      expect(gameScene.scene.key).toBe(SCENE_KEYS.GAME);
    });

    it('should create player entity in GameScene', () => {
      const player = (gameScene as any).player;
      expect(player).toBeDefined();
      expect(player.texture.key).toBe(ASSET_KEYS.PLAYER_SPRITE);
    });

    it('should position player at correct location', () => {
      const player = (gameScene as any).player;
      const expectedX = GAME_WIDTH / 2;
      const expectedY = GAME_HEIGHT - 80;

      expect(player.x).toBe(expectedX);
      expect(player.y).toBe(expectedY);
    });

    it('should set correct render depth', () => {
      const player = (gameScene as any).player;
      expect(player.depth).toBe(10);
    });
  });

  describe('Manager Integration', () => {
    it('should register player with EntityManager', () => {
      const entityManager = (gameScene as any).entityManager;
      const player = (gameScene as any).player;

      expect(entityManager.getEntity(player.id)).toBe(player);
    });

    it('should add player to RenderManager layer', () => {
      const renderManager = (gameScene as any).renderManager;
      const playersLayer = renderManager.getLayer('players');

      expect(playersLayer).toBeDefined();
      expect(playersLayer.length).toBe(1);
      expect(playersLayer[0]).toBe((gameScene as any).player);
    });

    it('should initialize StateManager with score 0', () => {
      const stateManager = (gameScene as any).stateManager;
      expect(stateManager.getScore()).toBe(0);
    });
  });

  describe('Scene Lifecycle', () => {
    it('should handle scene updates without errors', () => {
      expect(() => {
        gameScene.update(0, 16);
      }).not.toThrow();
    });

    it('should properly cleanup on destroy', () => {
      const player = (gameScene as any).player;
      const playerId = player.id;
      const entityManager = (gameScene as any).entityManager;

      gameScene.destroy();

      expect(entityManager.getEntity(playerId)).toBeUndefined();
    });
  });
});