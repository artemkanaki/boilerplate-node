import { Application } from './application';

const app = new Application();

export const rest = app.handleAwsRequest.bind(app);
