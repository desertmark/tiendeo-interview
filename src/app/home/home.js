import React, { useEffect } from 'react';
import { useHomeState } from './home.context';
import HomeProvider from './home.context';
import { useAppState } from '../../app.context';

function Home() {
    const homeState = useHomeState();
    const appState = useAppState();
    useEffect(() => {
        if (appState.isAppReady) {
            homeState.loadCards();
        }
    }, [appState.isAppReady]);
    return (
        <div>
            {JSON.stringify(homeState.cards, null, 2)}
        </div>
    );
}

export default () => <HomeProvider><Home></Home></HomeProvider>;