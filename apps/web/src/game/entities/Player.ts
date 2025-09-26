import Phaser from 'phaser';
import { IPlayer, Position, Velocity } from '@shared/types';

export class Player extends Phaser.GameObjects.Sprite implements IPlayer {
  public id: string;
  public position: Position;
  public velocity: Velocity;
  public active: boolean;
  public fuel: number;
  public maxSpeed: number;
  public currentSpeed: number;
  public lives: number;
  public isAlive: boolean;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player_sprite');

    // Initialize entity properties
    this.id = `player_${Date.now()}`;
    this.position = { x, y };
    this.velocity = { x: 0, y: 0 };
    this.active = true;

    // Initialize player-specific properties
    this.fuel = 100;
    this.maxSpeed = 300;
    this.currentSpeed = 0;
    this.lives = 3;
    this.isAlive = true;

    // Add to scene and enable physics
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Set proper depth layer for rendering order
    this.setDepth(10);

    // Configure physics body
    const body = this.body as Phaser.Physics.Arcade.Body;
    if (body) {
      body.setSize(this.width, this.height);
    }
  }

  public update(_delta: number, _inputManager?: any): void {
    // Update position tracking
    this.position.x = this.x;
    this.position.y = this.y;

    // Update velocity tracking if physics body exists
    const body = this.body as Phaser.Physics.Arcade.Body;
    if (body && body.velocity) {
      this.velocity.x = body.velocity.x;
      this.velocity.y = body.velocity.y;
    }
  }

  public destroy(): void {
    this.active = false;
    this.isAlive = false;
    super.destroy();
  }
}