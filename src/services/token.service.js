

import { decorate, injectable } from 'inversify';

class TokenService {
    constructor() {
        this.token = null;
    }
    setToken(token) {
        this.token = token;
        localStorage.setItem('token', token);
    }

    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }
        return this.token;
    }
}

decorate(injectable(), TokenService)
export default TokenService;