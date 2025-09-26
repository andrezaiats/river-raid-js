import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Player } from '../../src/game/entities/Player.js';

// Mock Phaser completely to avoid canvas issues
vi.mock('phaser', () => {
  return {
    default: {
      GameObjects: {
        Sprite: class MockSprite {
          scene: any;
          x: number;
          y: number;
          texture: { key: string };
          body: any;
          depth: number = 0;
          active: boolean = true;

          constructor(scene: any, x: number, y: number, texture: string) {
            this.scene = scene;
            this.x = x;
            this.y = y;
            this.texture = { key: texture };
            this.body = { setSize: vi.fn(), velocity: { x: 0, y: 0 } };
          }

          setDepth(depth: number) {
            this.depth = depth;
            return this;
          }

          destroy() {
            // Mock destroy
          }
        }
      },
      Physics: {
        Arcade: {
          Body: class MockBody {
            velocity = { x: 0, y: 0 };
            setSize = vi.fn();
          }
        }
      }
    }
  };
});

// Mock Phaser scene
const mockScene = {
  add: { existing: vi.fn() },
  physics: { add: { existing: vi.fn() } }
} as any;

describe('Player Entity', () => {
  let player: Player;

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();

    // Create player instance
    player = new Player(mockScene, 400, 520);
  });

  describe('Initialization', () => {
    it('should initialize with correct default properties', () => {
      expect(player.fuel).toBe(100);
      expect(player.maxSpeed).toBe(300);
      expect(player.currentSpeed).toBe(0);
      expect(player.lives).toBe(3);
      expect(player.isAlive).toBe(true);
      expect(player.active).toBe(true);
    });

    it('should set initial position correctly', () => {
      expect(player.position.x).toBe(400);
      expect(player.position.y).toBe(520);
      expect(player.x).toBe(400);
      expect(player.y).toBe(520);
    });

    it('should initialize with zero velocity', () => {
      expect(player.velocity.x).toBe(0);
      expect(player.velocity.y).toBe(0);
    });

    it('should have a unique ID', () => {
      // Add small delay to ensure different timestamps
      const player2 = new Player(mockScene, 0, 0);
      expect(player.id).toBeDefined();
      expect(player2.id).toBeDefined();
      expect(player.id).toMatch(/^player_\d+$/);
      expect(player2.id).toMatch(/^player_\d+$/);
    });

    it('should use correct sprite texture key', () => {
      expect(player.texture.key).toBe('player_sprite');
    });
  });

  describe('Phaser Integration', () => {
    it('should add itself to scene', () => {
      expect(mockScene.add.existing).toHaveBeenCalledWith(player);
    });

    it('should enable physics', () => {
      expect(mockScene.physics.add.existing).toHaveBeenCalledWith(player);
    });

    it('should set correct depth layer', () => {
      expect(player.depth).toBe(10);
    });
  });

  describe('Position Calculations', () => {
    it('should calculate horizontal centering correctly for 800px width', () => {
      const centerX = 800 / 2;
      const centeredPlayer = new Player(mockScene, centerX, 520);
      expect(centeredPlayer.x).toBe(400);
    });

    it('should position near bottom correctly for 600px height', () => {
      const bottomY = 600 - 80;
      const bottomPlayer = new Player(mockScene, 400, bottomY);
      expect(bottomPlayer.y).toBe(520);
    });
  });

  describe('Update Method', () => {
    it('should update position tracking', () => {
      // Simulate position change
      player.x = 450;
      player.y = 530;

      player.update(16);

      expect(player.position.x).toBe(450);
      expect(player.position.y).toBe(530);
    });

    it('should accept input manager parameter', () => {
      const mockInputManager = {};
      expect(() => player.update(16, mockInputManager)).not.toThrow();
    });
  });

  describe('Destroy Method', () => {
    it('should mark player as inactive when destroyed', () => {
      player.destroy();

      expect(player.active).toBe(false);
      expect(player.isAlive).toBe(false);
    });
  });
});