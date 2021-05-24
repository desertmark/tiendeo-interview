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

function Home() {
    const homeState = useHomeState();
    const appState = useAppState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        if (appState.isAppReady) {
            homeState.loadCards();
        }
    }, [appState.isAppReady]);

    function createCard(values) {
        console.log(values);
        setIsModalOpen(false);
    }

    return (
        <div>
            <Grid responsive colMinSize="350px" justify="center">
                {homeState.cards.map(card => {
                    return <Card width="350px" key={card.id} {...card}></Card>
                })}
            </Grid>
            <Button onClick={() => setIsModalOpen(true)} circle fixed>+</Button>
            <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CardWrapper mw="500px" width="100vw">
                    <CardForm onSubmit={values => createCard(values)}></CardForm>
                </CardWrapper>
            </Modal>
        </div>
    );
}

export default () => <HomeProvider><Home></Home></HomeProvider>;