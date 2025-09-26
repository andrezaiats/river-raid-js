export class StateManager {
  private static instance: StateManager;
  private gameState: Map<string, any> = new Map();

  static getInstance(): StateManager {
    if (!StateManager.instance) {
      StateManager.instance = new StateManager();
    }
    return StateManager.instance;
  }

  static resetInstance(): void {
    StateManager.instance = undefined as any;
  }

  updateScore(points: number): void {
    const currentScore = this.gameState.get('score') || 0;
    this.gameState.set('score', currentScore + points);
  }

  getScore(): number {
    return this.gameState.get('score') || 0;
  }

  setState(key: string, value: any): void {
    this.gameState.set(key, value);
  }

  getState(key: string): any {
    return this.gameState.get(key);
  }

  reset(): void {
    this.gameState.clear();
    this.gameState.set('score', 0);
  }
}