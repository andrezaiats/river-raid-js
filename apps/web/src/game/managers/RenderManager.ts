export class RenderManager {
  private static instance: RenderManager;
  private layers: Map<string, any[]> = new Map();

  static getInstance(): RenderManager {
    if (!RenderManager.instance) {
      RenderManager.instance = new RenderManager();
    }
    return RenderManager.instance;
  }

  static resetInstance(): void {
    RenderManager.instance = undefined as any;
  }

  addToLayer(layerName: string, entity: any): void {
    if (!this.layers.has(layerName)) {
      this.layers.set(layerName, []);
    }
    this.layers.get(layerName)!.push(entity);
  }

  removeFromLayer(layerName: string, entity: any): void {
    const layer = this.layers.get(layerName);
    if (layer) {
      const index = layer.indexOf(entity);
      if (index > -1) {
        layer.splice(index, 1);
      }
    }
  }

  getLayer(layerName: string): any[] {
    return this.layers.get(layerName) || [];
  }
}