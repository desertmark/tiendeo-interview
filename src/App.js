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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home></Home>
      </header>
    </div>
  );
}

export default () => <AppProvider><App></App></AppProvider>
