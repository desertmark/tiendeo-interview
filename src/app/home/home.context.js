import React, { createContext, useContext, useState } from 'react';
import CardsApi from '../../api/cards.api';
import { cardsApi } from '../../config/inversify.depedencies';
import { withDependency } from '../../di.context';
const HomeContext = createContext();

/**
 * @returns {{
 *  cards: [],
 *  loadCards: () => Promise<any>,
 *  createCard: (card) => Promise<any>,
 *  updateCard: (card) => Promise<any>,
 *  removeCard: (cardId) => Promise<any>,
 *  orderCards: (orderBy: string) => void
 * }} homeState
 */
export function useHomeState() {
    return useContext(HomeContext);
}

function orderByString(orderBy) {
    return (a, b) => a[orderBy] < b[orderBy] ? -1 : 1;
}

function orderByDateOrNumber(orderBy) {
    return (a,b) => a[orderBy] - b[orderBy];
}

/**
 * 
 * @param {{
 *  cardsApi: CardsApi,
 * }} props 
 */
function HomeProvider({ children, cardsApi }) {
    const [cards, setCards] = useState([]);
    
    function orderCardsBy(cards, orderBy) {
        if (cards && cards.length) {
            let isNumber = typeof cards[0][orderBy] === 'number';
            let isDate = cards[0][orderBy] instanceof Date;
            if (isNumber || isDate) {
                return cards.sort(orderByDateOrNumber(orderBy));
            } else {
                return cards.sort(orderByString(orderBy));
            }
        } else {
            return cards;
        }
    }

    function orderCards(orderBy) {
        setCards([...orderCardsBy(cards, orderBy)])
    }

    function loadCards(orderBy) {
        const _loadCards = async () => {
            const cards = await cardsApi.getCards();
            setCards(orderCardsBy(cards, orderBy));
        }
        const task = _loadCards();
        return task;
    }

    function createCard(card) {
        const task = cardsApi.createCard(card);
        return task;
    }

    function removeCard(cardId) {
        const task = cardsApi.deleteCard(cardId);
        return task;
    }

    function updateCard(card) {
        const task = cardsApi.updateCard(card);
        return task;
    }

    return (
        <HomeContext.Provider value={{ cards, loadCards, createCard, removeCard, updateCard, orderCards }}>
            {children}
        </HomeContext.Provider>
    );
}

export default withDependency(HomeProvider, [cardsApi]);
