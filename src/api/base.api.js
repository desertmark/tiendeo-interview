import axios, {AxiosRequestConfig} from 'axios';
import { decorate, injectable, unmanaged } from 'inversify';
import { appConfig, tokenService } from '../config/inversify.depedencies';
/**
 * @param {AxiosRequestConfig} config 
 */
function tokenInterceptor(config) {
    if (this.tokenService.token) {
        return {
            ...config,
            headers: {
                authorization: `Bearer ${this.tokenService.token}`,
            }
        }
    }
    return config;
}

class BaseApi {
    constructor(appConfig, tokenService) {
        this.axios = axios.create({
            baseURL: appConfig.baseUrl,
        });
        this.axios.interceptors.request.use(tokenInterceptor.bind(this));
        this.tokenService = tokenService;
    }
}

decorate(injectable(), BaseApi)
decorate(unmanaged(appConfig), BaseApi, 0);
decorate(unmanaged(tokenService), BaseApi, 1);

export default BaseApi