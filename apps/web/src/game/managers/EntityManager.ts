import { Player } from '../entities/Player.js';

export class EntityManager {
  private static instance: EntityManager;
  private entities: Map<string, any> = new Map();

  static getInstance(): EntityManager {
    if (!EntityManager.instance) {
      EntityManager.instance = new EntityManager();
    }
    return EntityManager.instance;
  }

  static resetInstance(): void {
    EntityManager.instance = undefined as any;
  }

  spawnPlayer(scene: Phaser.Scene, x: number, y: number): Player {
    const player = new Player(scene, x, y);
    this.entities.set(player.id, player);
    return player;
  }

  registerEntity(entity: any): void {
    this.entities.set(entity.id, entity);
  }

  removeEntity(id: string): void {
    this.entities.delete(id);
  }

  getEntity(id: string): any {
    return this.entities.get(id);
  }

  recycleEntity(entity: any): void {
    entity.active = false;
    this.entities.delete(entity.id);
  }
}