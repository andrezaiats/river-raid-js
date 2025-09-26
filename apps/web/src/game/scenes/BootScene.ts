import Phaser from 'phaser';
import { SCENE_KEYS } from '@shared/constants/gameplay.js';
import { ASSET_KEYS } from '../config/AssetManifest.js';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.BOOT });
  }

  preload(): void {
    // Create a simple loading bar
    const loadingBar = this.add.graphics();
    this.add.text(400, 250, 'Loading...', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Progress bar background
    loadingBar.fillStyle(0x444444);
    loadingBar.fillRect(300, 300, 200, 20);

    // Update loading progress
    this.load.on('progress', (progress: number) => {
      loadingBar.clear();
      loadingBar.fillStyle(0x444444);
      loadingBar.fillRect(300, 300, 200, 20);
      loadingBar.fillStyle(0x00ff00);
      loadingBar.fillRect(300, 300, 200 * progress, 20);
    });

    // Create player sprite programmatically
    this.createPlayerSprite();
  }

  private createPlayerSprite(): void {
    // Create 32x32 blue rectangle sprite for player
    const graphics = this.add.graphics();
    graphics.fillStyle(0x0066cc);
    graphics.fillRect(0, 0, 32, 32);
    graphics.generateTexture(ASSET_KEYS.PLAYER_SPRITE, 32, 32);
    graphics.destroy();
  }

  create(): void {
    // Display game title and simple start message
    this.add.text(400, 200, 'River Raid JS', {
      fontSize: '48px',
      color: '#ffffff',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(400, 350, 'Canvas Ready - Game Engine Initialized', {
      fontSize: '20px',
      color: '#00ff00'
    }).setOrigin(0.5);

    this.add.text(400, 400, 'Press any key to continue', {
      fontSize: '16px',
      color: '#cccccc'
    }).setOrigin(0.5);

    // Add input listener for any key press
    this.input.keyboard?.once('keydown', () => {
      this.scene.start(SCENE_KEYS.GAME);
    });

    // Auto-continue after 3 seconds for demo purposes
    this.time.delayedCall(3000, () => {
      this.scene.start(SCENE_KEYS.GAME);
    });
  }
}