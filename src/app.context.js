import React, { createContext, useContext, useEffect, useState } from 'react';
import UserApi from './api/user.api';

import { tokenService, userApi } from './config/inversify.depedencies';
import { withDependency } from './di.context';
import TokenService from './services/token.service';
const AppContext = createContext();

export function useAppState() {
    return useContext(AppContext);
}
/**
 * 
 * @param {{
 *  userApi: UserApi,
 *  tokenService: TokenService,
 * }} param0 
 */
function AppProvider({ children, userApi, tokenService }) {
    const [isAppReady, setIsAppReady] = useState(false);
    useEffect(() => {
        userApi.getUser().then(token => {
            tokenService.setToken(token);
            setIsAppReady(true);
        });
    }, []);

    return (
        <AppContext.Provider value={{ isAppReady }}>
            {children}
        </AppContext.Provider>
    );
}

export default withDependency(AppProvider, [tokenService, userApi]);
