import { Container } from 'inversify'
import { appConfig } from './inversify.depedencies';
import { appConfig as appConfigValue } from './app.config.js';

var container = new Container();
container.bind(appConfig).toConstantValue(appConfigValue);

export { container };

