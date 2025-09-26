/**
 * Vitest Test Setup
 * 
 * Global test configuration and environment setup for unit and integration tests.
 */

import { beforeAll, afterEach, vi } from 'vitest';

// Mock Phaser globally for unit tests
beforeAll(() => {
  // Mock global objects that Phaser expects
  Object.defineProperty(global, 'requestAnimationFrame', {
    writable: true,
    value: (cb: FrameRequestCallback) => setTimeout(cb, 16)
  });

  Object.defineProperty(global, 'cancelAnimationFrame', {
    writable: true,
    value: (id: number) => clearTimeout(id)
  });

  // Complete Phaser mock
  vi.doMock('phaser', () => {
    const mockScene = {
      Scene: class MockScene {
        constructor(config?: any) {
          this.scene = { key: config?.key || 'MockScene' };
        }
        scene: any = {};
        add: any = {};
        load: any = {};
        input: any = {};
        time: any = {};
      }
    };

    return {
      default: {
        Game: vi.fn(() => ({
          scale: { refresh: vi.fn() }
        })),
        Scene: mockScene.Scene,
        AUTO: 'AUTO',
        Scale: {
          FIT: 'FIT',
          CENTER_BOTH: 'CENTER_BOTH'
        }
      },
      Scene: mockScene.Scene,
      Game: vi.fn(() => ({
        scale: { refresh: vi.fn() }
      })),
      AUTO: 'AUTO'
    };
  });

  // Mock Canvas API completely
  const mockCanvas2D = {
    fillStyle: '',
    fillRect: vi.fn(),
    clearRect: vi.fn(),
    getImageData: vi.fn(() => ({
      data: new Uint8ClampedArray(4),
      width: 1,
      height: 1
    })),
    putImageData: vi.fn(),
    createImageData: vi.fn(() => ({
      data: new Uint8ClampedArray(4),
      width: 1,
      height: 1
    })),
    setTransform: vi.fn(),
    drawImage: vi.fn(),
    save: vi.fn(),
    restore: vi.fn(),
    scale: vi.fn(),
    rotate: vi.fn(),
    translate: vi.fn(),
    beginPath: vi.fn(),
    closePath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    fill: vi.fn(),
    arc: vi.fn(),
    rect: vi.fn(),
    clip: vi.fn(),
    isPointInPath: vi.fn(() => false),
    measureText: vi.fn(() => ({ width: 0 })),
    createLinearGradient: vi.fn(),
    createRadialGradient: vi.fn(),
    createPattern: vi.fn()
  };

  const mockCanvasWebGL = {
    canvas: {},
    drawingBufferWidth: 800,
    drawingBufferHeight: 600,
    getExtension: vi.fn(() => ({})),
    getParameter: vi.fn(),
    createProgram: vi.fn(),
    createShader: vi.fn(),
    shaderSource: vi.fn(),
    compileShader: vi.fn(),
    attachShader: vi.fn(),
    linkProgram: vi.fn(),
    useProgram: vi.fn(),
    getAttribLocation: vi.fn(),
    getUniformLocation: vi.fn(),
    enableVertexAttribArray: vi.fn(),
    vertexAttribPointer: vi.fn(),
    createBuffer: vi.fn(),
    bindBuffer: vi.fn(),
    bufferData: vi.fn(),
    clear: vi.fn(),
    clearColor: vi.fn(),
    enable: vi.fn(),
    disable: vi.fn(),
    drawElements: vi.fn(),
    drawArrays: vi.fn(),
    viewport: vi.fn(),
    scissor: vi.fn(),
    blendFunc: vi.fn(),
    getShaderParameter: vi.fn(() => true),
    getProgramParameter: vi.fn(() => true),
    getShaderInfoLog: vi.fn(() => ''),
    getProgramInfoLog: vi.fn(() => '')
  };

  HTMLCanvasElement.prototype.getContext = vi.fn((contextType) => {
    if (contextType === '2d') return mockCanvas2D;
    if (contextType === 'webgl' || contextType === 'experimental-webgl') return mockCanvasWebGL;
    return null;
  });

  // Mock Audio for sound tests
  (global as any).Audio = vi.fn(() => ({
    play: vi.fn(),
    pause: vi.fn(),
    load: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    volume: 1,
    currentTime: 0,
    duration: 0,
    paused: true,
    ended: false,
    readyState: 4
  }));
});

// Clean up after each test
afterEach(() => {
  vi.clearAllMocks();
  
  // Reset any global state
  if (typeof window !== 'undefined') {
    delete (window as any).game;
  }
});