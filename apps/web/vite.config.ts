import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'dist',
    target: 'es2022',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          phaser: ['phaser']
        }
      }
    },
    sourcemap: true
  },
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '../../packages/shared/src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        'dist/'
      ]
    }
  }
});