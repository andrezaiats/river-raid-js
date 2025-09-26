// Core game types
export interface GameConfig {
  width: number;
  height: number;
  backgroundColor: string;
  parent: string;
  physics: {
    default: string;
    arcade: {
      gravity: { y: number };
      debug: boolean;
    };
  };
  scene: any[];
}

export interface SceneConfig {
  key: string;
  active: boolean;
  visible: boolean;
}

// Entity types
export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface GameEntity {
  id: string;
  position: Position;
  velocity: Velocity;
  active: boolean;
}

export interface IPlayer extends GameEntity {
  fuel: number;
  maxSpeed: number;
  currentSpeed: number;
  lives: number;
  isAlive: boolean;
}