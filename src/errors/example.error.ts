import { WebError } from 'roumen';

export class ExampleError extends WebError {
  constructor(details?: string, stack?: string) {
    super('EXAMPLE_ERROR', 500, details, stack);
  }
}