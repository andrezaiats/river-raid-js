import Phaser from 'phaser';
import { SCENE_KEYS, GAME_WIDTH, GAME_HEIGHT } from '@shared/constants/gameplay.js';
import { Player } from '../entities/Player.js';
import { EntityManager } from '../managers/EntityManager.js';
import { StateManager } from '../managers/StateManager.js';
import { RenderManager } from '../managers/RenderManager.js';

export class GameScene extends Phaser.Scene {
  private player?: Player;
  private entityManager: EntityManager;
  private stateManager: StateManager;
  private renderManager: RenderManager;

  constructor() {
    super({ key: SCENE_KEYS.GAME });
    this.entityManager = EntityManager.getInstance();
    this.stateManager = StateManager.getInstance();
    this.renderManager = RenderManager.getInstance();
  }

  create(): void {
    // Initialize game state
    this.stateManager.reset();

    // Create player at horizontal center, near bottom of screen
    const playerX = GAME_WIDTH / 2;
    const playerY = GAME_HEIGHT - 80;

    // Use EntityManager to spawn player
    this.player = this.entityManager.spawnPlayer(this, playerX, playerY);

    // Add player to render layer
    this.renderManager.addToLayer('players', this.player);

    // Display simple game info
    this.add.text(20, 20, 'River Raid - Player Jet Rendered', {
      fontSize: '20px',
      color: '#ffffff'
    });

    this.add.text(20, 50, 'Player position: Center-bottom', {
      fontSize: '16px',
      color: '#00ff00'
    });
  }

  update(time: number, delta: number): void {
    if (this.player && this.player.active) {
      this.player.update(delta);
    }
  }

  destroy(): void {
    // Clean up player entity
    if (this.player) {
      this.renderManager.removeFromLayer('players', this.player);
      this.entityManager.recycleEntity(this.player);
      this.player = undefined;
    }
    super.destroy();
  }
}