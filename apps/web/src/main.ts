import Phaser from 'phaser';
import { gameConfig } from './game/config/GameConfig.js';

/**
 * River Raid JS - Main Entry Point
 * 
 * Initializes the Phaser game engine with the configured settings
 * and starts the game in the browser.
 */

// Ensure DOM is loaded before initializing the game
document.addEventListener('DOMContentLoaded', () => {
  // Create the Phaser game instance
  const game = new Phaser.Game(gameConfig);
  
  // Global reference for debugging (development only)
  if (import.meta.env?.DEV) {
    (window as any).game = game;
    console.log('🎮 River Raid JS initialized successfully!');
    console.log('Game instance available as window.game for debugging');
  }
  
  // Handle window resize for responsive design
  window.addEventListener('resize', () => {
    game.scale.refresh();
  });
});

// Handle any uncaught errors during game initialization
window.addEventListener('error', (event) => {
  console.error('Game initialization error:', event.error);
});