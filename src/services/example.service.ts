import { DbService, LayerManager } from 'roumen';
import { ExampleDao } from '../dao';
import { ExampleScheme } from '../types';

export class ExampleService extends DbService<ExampleScheme, ExampleDao> {
  constructor(layerManager: LayerManager) {
    super(layerManager, layerManager.getDao(ExampleDao));
  }

  public createExample(data: string) {
    return this._dao.createExample(data);
  }
}