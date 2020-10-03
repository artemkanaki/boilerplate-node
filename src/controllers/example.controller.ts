import { Controller, LoggerService } from 'roumen';
import { ExampleService } from '../services';
import { CreateExample } from './example.controller.interface';

export class ExampleController extends Controller {
  private _logger: LoggerService;
  private _exampleService: ExampleService;

  protected _init() {
    this._exampleService = this._layerManager.getService(ExampleService);
    this._logger = this._layerManager.getService(LoggerService);
  }

  public async createExample(payload: CreateExample) {
    this._logger.info('Trying to create example...');

    try {
      await this._exampleService.createExample(payload.data);
    } catch (err) {
      this._logger.error('Error was occurred during creating example!', { err, errMessage: err.message });
      throw err;
    }
  }
}
