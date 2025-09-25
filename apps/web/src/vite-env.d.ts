/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_GAME_DEBUG: string;
  readonly VITE_PHYSICS_DEBUG: string;
  readonly VITE_SHOW_FPS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}