import { MongodbDao } from 'roumen';
import { ExampleScheme } from '../types';

export class ExampleDao extends MongodbDao<ExampleScheme> {
  public createExample(data: string) {
    return this.create({
      data,
    });
  }

  public getCollectionName() {
    return 'examples';
  }
}
