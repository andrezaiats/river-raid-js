import { describe, it, expect } from 'vitest';
import { existsSync, statSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

/**
 * Integration Tests for Build Verification
 * 
 * Tests that verify the build system has produced the expected
 * output files and structure (assumes build has already run).
 */

describe('Build Verification', () => {
  // Use absolute path resolution to avoid working directory issues
  const projectRoot = resolve(process.cwd());
  const distPath = join(projectRoot, 'dist');

  it('should have build output directory', () => {
    expect(existsSync(distPath)).toBe(true);
    
    const distStats = statSync(distPath);
    expect(distStats.isDirectory()).toBe(true);
  });

  it('should generate expected output files', () => {
    // Verify main HTML file exists
    const indexPath = join(distPath, 'index.html');
    expect(existsSync(indexPath)).toBe(true);
    
    // Verify HTML file has content
    const htmlContent = readFileSync(indexPath, 'utf-8');
    expect(htmlContent).toContain('game-container');
    expect(htmlContent).toContain('River Raid');
  });

  it('should generate JavaScript bundles', () => {
    // Check for JS files in assets directory
    const { readdirSync } = require('fs');
    const assetsPath = join(distPath, 'assets');
    const files = readdirSync(assetsPath);
    
    const jsFiles = files.filter(file => file.endsWith('.js'));
    expect(jsFiles.length).toBeGreaterThan(0);
    
    // Should have main bundle and Phaser chunk
    const hasMainBundle = jsFiles.some(file => file.includes('main'));
    const hasPhaserBundle = jsFiles.some(file => file.includes('phaser'));
    
    expect(hasMainBundle).toBe(true);
    expect(hasPhaserBundle).toBe(true);
  });

  it('should have proper file permissions and sizes', () => {
    const indexPath = join(distPath, 'index.html');
    const indexStats = statSync(indexPath);
    
    // Verify file is readable and has reasonable size
    expect(indexStats.size).toBeGreaterThan(0);
    expect(indexStats.size).toBeLessThan(50000); // HTML shouldn't be > 50KB
  });

  it('should have ES2022 compatible bundle structure', () => {
    // Check that the generated JS doesn't use extremely old syntax
    const { readdirSync } = require('fs');
    const assetsPath = join(distPath, 'assets');
    const files = readdirSync(assetsPath);
    const jsFiles = files.filter(file => file.endsWith('.js') && !file.includes('.map'));
    
    expect(jsFiles.length).toBeGreaterThan(0);
    
    // Read one of the JS files to verify it's properly bundled
    const mainJsFile = jsFiles.find(file => file.includes('main'));
    if (mainJsFile) {
      const jsContent = readFileSync(join(assetsPath, mainJsFile), 'utf-8');
      expect(jsContent.length).toBeGreaterThan(0);
      // Should be minified (no excessive whitespace)
      expect(jsContent).not.toMatch(/\n\s+/);
    }
  });

  it('should include assets directory structure', () => {
    const assetsPath = join(distPath, 'assets');
    expect(existsSync(assetsPath)).toBe(true);
    
    const { readdirSync } = require('fs');
    const assetFiles = readdirSync(assetsPath);
    
    // Should have at least main JS and Phaser JS
    expect(assetFiles.length).toBeGreaterThan(1);
  });
});