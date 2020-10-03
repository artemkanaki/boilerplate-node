import {
  Application as RoumenApplication,
  CorsMiddleware,
  BodyParserMiddleware,
  ErrorMiddleware,
  RequestValidatorFactory,
  AwsEventContextMiddleware,
  LoggerService,
} from 'roumen';
import { ExampleController } from './controllers';
import { ExampleDao } from './dao';
import { ExampleRouter } from './routers';
import { ExampleService } from './services';

export class Application extends RoumenApplication {
  protected _init() {
    this._layerManager.addDao(ExampleDao);

    this._layerManager.addService(LoggerService);
    this._layerManager.addService(ExampleService);

    this._layerManager.addController(ExampleController);

    this._layerManager.addMiddleware(RequestValidatorFactory);

    this._addRouter(ExampleRouter);

    this._addMiddleware(CorsMiddleware);
    this._addMiddleware(BodyParserMiddleware);
    this._addMiddleware(AwsEventContextMiddleware);

    this._addErrorMiddleware(ErrorMiddleware);
  }
}