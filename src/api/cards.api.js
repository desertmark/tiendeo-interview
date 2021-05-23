import { decorate, injectable, inject } from 'inversify';
import { appConfig, tokenService } from '../config/inversify.depedencies';
import BaseApi from './base.api';

class CardsApi extends BaseApi {

    constructor(appConfig, tokenService) {
        super(appConfig, tokenService);
    }

    async getCards() {
        try {
            const res = await this.axios.get('/cards');
            return res.data;
        } catch (e) {
            console.error(e);
        }
    }
}

decorate(injectable(), CardsApi);
decorate(inject(appConfig), CardsApi, 0);
decorate(inject(tokenService), CardsApi, 1);

export default CardsApi;