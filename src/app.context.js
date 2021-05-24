import React, { createContext, useContext, useEffect, useState } from 'react';
import UserApi from './api/user.api';

import { tokenService, userApi } from './config/inversify.depedencies';
import { withDependency } from './di.context';
import TokenService from './services/token.service';
import LoaderUtil from './utils/loader-util';
const AppContext = createContext();
/**
 * @returns {{
 *  loader: LoaderUtil,
 *  isAppReady: boolean,
 *  isLoading: boolean,
 * }}
 */
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
    const [isLoading, setIsLoading] = useState(false);
    const [loader] = useState(new LoaderUtil());

    const sub = loader.subscribe(isLoading => {
        setIsLoading(isLoading);
    });

    useEffect(() => {
        return () => {
            loader.unsubscribe(sub);
        }
    }, []);

    useEffect(() => {
        let token = tokenService.getToken();
        if (token) {
            setIsAppReady(true);
        } else {
            const task = userApi.getUser().then(token => {
                tokenService.setToken(token);
                setIsAppReady(true);
            });
            loader.waitFor(task);
        }
    }, []);

    return (
        <AppContext.Provider value={{ isAppReady, isLoading, loader }}>
            {children}
        </AppContext.Provider>
    );
}

export default withDependency(AppProvider, [tokenService, userApi]);
