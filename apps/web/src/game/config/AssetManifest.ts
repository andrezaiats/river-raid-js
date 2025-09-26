// Asset manifest for managing game assets with proper typing
// Never hardcode asset paths - use these constants only

export const ASSET_KEYS = {
  // Player assets
  PLAYER_SPRITE: 'player_sprite',

  // Future asset categories
  ENEMIES: {},
  TERRAIN: {},
  UI: {},
  AUDIO: {}
} as const;

export const ASSET_PATHS = {
  SPRITES: {},
  AUDIO: {},
  FONTS: {}
} as const;

// Asset loading configurations - player sprite will be generated at runtime
export const ASSET_CONFIGS = [] as const;