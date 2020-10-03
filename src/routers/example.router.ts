import { Router, WebError, UnknownError, RequestValidatorFactory } from 'roumen';
import { Request, Response, NextFunction } from 'express';
import { ExampleController } from '../controllers';

export class ExampleRouter extends Router {
  private _controller: ExampleController;
  private _requestValidatorFactory: RequestValidatorFactory;

  public getExpressRouter() {
    const router = this._createExpressRouter();

    router.post(
      '/',
      this._requestValidatorFactory.generateMiddleware(require('../../scheme/createExampleRequest')),
      this._createExample.bind(this),
    );

    return router;
  }

  public getUrlPrefix() {
    return '/examples';
  }

  protected _init() {
    this._controller = this._layerManager.getController(ExampleController);
    this._requestValidatorFactory = this._layerManager.getMiddleware(RequestValidatorFactory);
  }

  private async _createExample(req: Request, res: Response, next: NextFunction) {
    try {
      await this._controller.createExample({ data: req.body.data });
      res.end();
    } catch (err) {
      next(err instanceof WebError ? err : new UnknownError(err.message))
    }
  }
}