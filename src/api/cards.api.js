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

    async createCard(card) {
        try {

            const form = new FormData();
            form.append('title', card.title);
            form.append('description', card.description);
            if (card.image) {
                form.append('image', card.image);
            }

            const res = await this.axios.post('/cards', form);
            return res.data;
        } catch (e) {
            console.error(e);
        }
    }

    async updateCard({ id, title, description }) {
        try {
            const res = await this.axios.put(`/cards/${id}`, { title, description });
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    async deleteCard(cardId) {
        try {
            const res = await this.axios.delete(`/cards/${cardId}`);
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}

decorate(injectable(), CardsApi);
decorate(inject(appConfig), CardsApi, 0);
decorate(inject(tokenService), CardsApi, 1);

export default CardsApi;