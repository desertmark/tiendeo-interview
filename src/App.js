import logo from './logo.svg';
import './App.css';
import Home from './app/home/home';
import { tokenService, userApi } from './config/inversify.depedencies';
import { withDependency } from './di.context';
import UserApi from './api/user.api';
import { useEffect } from 'react';
import TokenService from './services/token.service';
import AppProvider from './app.context';
/**
 * 
 * @param {{
 *  userApi: UserApi,
 *  tokenService: TokenService
 * }} props 
 */
function App() {
  return (
    <div>
      <main>
        <Home></Home>
      </main>
    </div>
  );
}

export default () => <AppProvider><App></App></AppProvider>
