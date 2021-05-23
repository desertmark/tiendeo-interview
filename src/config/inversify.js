import { Container } from 'inversify'
import { appConfig, cardsApi, userApi, tokenService } from './inversify.depedencies';
import { appConfig as appConfigValue } from './app.config.js';
import CardsApi from '../api/cards.api';
import UserApi from '../api/user.api';
import TokenService from '../services/token.service';

var container = new Container();
container.bind(appConfig).toConstantValue(appConfigValue);
container.bind(tokenService).to(TokenService).inSingletonScope();
container.bind(cardsApi).to(CardsApi);
container.bind(userApi).to(UserApi);
export { container };

