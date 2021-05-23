import React, { createContext, useContext, useState } from 'react';
import CardsApi from '../../api/cards.api';
import { cardsApi } from '../../config/inversify.depedencies';
import { withDependency } from '../../di.context';
const HomeContext = createContext();

export function useHomeState() {
    return useContext(HomeContext);
}
/**
 * 
 * @param {{
 *  cardsApi: CardsApi,
 * }} props 
 */
function HomeProvider({ children, cardsApi }) {
    const [cards, setCards] = useState([]);
    
    function loadCards() {
        const _loadCards = async () => {
            const cards = await cardsApi.getCards();
            setCards(cards);
        }
        const task = _loadCards();
    }

    return (
        <HomeContext.Provider value={{ cards, loadCards }}>
            {children}
        </HomeContext.Provider>
    );
}

export default withDependency(HomeProvider, [cardsApi]);
