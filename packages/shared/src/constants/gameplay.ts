// Game dimensions
export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;

// Scene keys
export const SCENE_KEYS = {
  BOOT: 'BootScene',
  START: 'StartScene',
  GAME: 'GameScene',
  GAME_OVER: 'GameOverScene'
} as const;

// Asset keys
export const ASSET_KEYS = {
  // Sprites
  PLAYER_SPRITE: 'player_sprite',
  ENEMY_SPRITE: 'enemy_sprite',
  
  // Audio
  EXPLOSION_SOUND: 'explosion_sound',
  SHOOT_SOUND: 'shoot_sound'
} as const;