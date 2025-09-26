import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join, resolve } from 'path';

/**
 * Integration Tests for Static Build Content
 * 
 * Tests that verify the built HTML contains the proper
 * game initialization structure and canvas setup.
 */

describe('Static Build Content Verification', () => {
  const projectRoot = resolve(process.cwd());
  const distPath = join(projectRoot, 'dist');
  const indexPath = join(distPath, 'index.html');

  it('should have proper HTML structure for canvas rendering', () => {
    const htmlContent = readFileSync(indexPath, 'utf-8');
    
    // Verify game container is present
    expect(htmlContent).toContain('id="game-container"');
    
    // Verify proper HTML structure
    expect(htmlContent).toContain('<!DOCTYPE html>');
    expect(htmlContent).toContain('<html');
    expect(htmlContent).toContain('<body');
    
    // Should have script tags for the JS bundles
    expect(htmlContent).toMatch(/<script[^>]*src="[^"]*\.js"/);
  });

  it('should have proper page title and meta tags', () => {
    const htmlContent = readFileSync(indexPath, 'utf-8');
    
    // Check for proper title
    expect(htmlContent).toMatch(/<title>.*River.*Raid.*<\/title>/i);
    
    // Check for viewport meta tag (responsive design)
    expect(htmlContent).toContain('name="viewport"');
    
    // Should have charset declaration
    expect(htmlContent).toContain('charset=');
  });

  it('should reference required JavaScript modules', () => {
    const htmlContent = readFileSync(indexPath, 'utf-8');
    
    // Should have module script references
    expect(htmlContent).toMatch(/type="module"/);
    
    // Should reference the main application bundle
    expect(htmlContent).toMatch(/src="[^"]*main[^"]*\.js"/);
  });

  it('should have proper CSS structure for game container', () => {
    const htmlContent = readFileSync(indexPath, 'utf-8');
    
    // Should have some styling for the game container
    expect(htmlContent).toMatch(/#game-container|\.game-container|body.*{/);
  });

  it('should verify Phaser bundle is properly chunked', () => {
    const { readdirSync } = require('fs');
    const files = readdirSync(join(distPath, 'assets'));
    
    const phaserChunk = files.find(file => file.includes('phaser') && file.endsWith('.js'));
    expect(phaserChunk).toBeDefined();
    
    // Phaser chunk should be substantial in size (> 100KB)
    const { statSync } = require('fs');
    const phaserStats = statSync(join(distPath, 'assets', phaserChunk!));
    expect(phaserStats.size).toBeGreaterThan(100000);
  });

  it('should have proper game initialization structure', () => {
    const htmlContent = readFileSync(indexPath, 'utf-8');
    
    // Verify the structure suggests proper game initialization
    expect(htmlContent).toContain('game-container');
    
    // Should not have obvious errors in the HTML
    expect(htmlContent).not.toContain('Error:');
    expect(htmlContent).not.toContain('undefined');
    expect(htmlContent).not.toContain('[object Object]');
  });
});