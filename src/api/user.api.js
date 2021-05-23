import { decorate, injectable, inject } from 'inversify';
import { appConfig, tokenService } from '../config/inversify.depedencies';
import BaseApi from './base.api';

class UserApi extends BaseApi {

    constructor(appConfig, tokenService) {
        super(appConfig, tokenService);
    }

    async getUser() {
        try {
            const res = await this.axios.get('/users');
            return res.data;
        } catch (e) {
            console.error(e);
        }
    }
}

decorate(injectable(), UserApi)
decorate(inject(appConfig), UserApi, 0);
decorate(inject(tokenService), UserApi, 1);

export default UserApi;