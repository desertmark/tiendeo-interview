import './App.css';
import Home from './app/home/home';
import UserApi from './api/user.api';
import TokenService from './services/token.service';
import AppProvider, { useAppState } from './app.context';
import Spinner from './components/spinner';
/**
 * 
 * @param {{
 *  userApi: UserApi,
 *  tokenService: TokenService
 * }} props 
 */
function App() {
  const appState = useAppState();
  return (
    <div>
      <main>
        {/* {appState.isLoading && <h1>Loading...</h1>} */}
        <Spinner isVisible={appState.isLoading}></Spinner>
        <Home></Home>
      </main>
    </div>
  );
}

export default () => <AppProvider><App></App></AppProvider>
