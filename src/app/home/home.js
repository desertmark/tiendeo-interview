import React, { useEffect, useState } from 'react';
import { useHomeState } from './home.context';
import HomeProvider from './home.context';
import { useAppState } from '../../app.context';
import Flex from '../../components/flex';
import Button from '../../components/button';
import Card, { CardWrapper } from '../../components/card';
import Grid from '../../components/grid';
import Modal from '../../components/modal';
import CardForm from '../../components/card-form';
import Radio from '../../components/radio';
import Text from '../../components/text';

function Home() {
    const homeState = useHomeState();
    const appState = useAppState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const [orderBy, setOrderBy] = useState('created');
    useEffect(() => {
        if (appState.isAppReady) {
            loadCards();
        }
    }, [appState.isAppReady, orderBy]);

    function loadCards() {
        return homeState.loadCards(orderBy);
    }

    function createCard(values) {
        setCurrentCard(null);
        homeState.createCard(values).then(() => {
            loadCards();
            setIsModalOpen(false);
        });
    }

    function editCard(card) {
        homeState.updateCard(card)
            .then(() => {
                loadCards();
                setIsModalOpen(false);
            })
            .finally(() => setCurrentCard(null));

    }

    function removeCard(card) {
        homeState.removeCard(card.id).then(() => {
            loadCards();
        });
    }

    function openEditModal(card) {
        setCurrentCard(card);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        setCurrentCard(null);
    }

    function handleSubmit(values) {
        if (currentCard) {
            editCard(values);
        } else {
            createCard(values);
        }
    }

    function handleOrderChange(value) {
        setOrderBy(value);
        homeState.orderCards(value);
    }

    return (
        <div>
            <Flex m="2rem">
                <Radio value={orderBy} onChange={handleOrderChange} label="Ordenar por" name="orderBy" options={[{ label: 'Titulo', value: 'title' }, { label: 'Date', value: 'created' }]}></Radio>
            </Flex>
            <Grid responsive colMinSize="350px" justify="center">
                {homeState.cards.map(card => {
                    return <Card width="350px" key={card.id} card={card} onEdit={openEditModal} onRemove={removeCard}></Card>
                })}
            </Grid>
            {!homeState.cards.length &&
                <Text align="center">No cards yet</Text>
            }
            <Button onClick={() => setIsModalOpen(true)} circle fixed>+</Button>
            <Modal isVisible={isModalOpen} onClose={closeModal}>
                <CardWrapper mw="500px" width="100vw">
                    <CardForm card={currentCard} onSubmit={handleSubmit}></CardForm>
                </CardWrapper>
            </Modal>
        </div>
    );
}

export default () => <HomeProvider><Home></Home></HomeProvider>;