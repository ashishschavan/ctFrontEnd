import logo from './logo.svg';
import './App.css';
import LoginComponent from './LoginComponent/LoginComponent';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RoutesComponent from './RoutesComponent';
import HeadNavComponent from './HeadNavComponent/HeadNavComponent';
import { DataProvider } from './DataContext';
import { Provider } from 'react-redux'
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <div className="App ">
          <DataProvider>
            <Router>
              <div>
                <HeadNavComponent />
                <RoutesComponent />
              </div>
            </Router>
          </DataProvider>
          <footer className="text-center text-lg-start bg-light text-muted footer-setter">
            <div className="text-center p-4" >
              © 2021 Copyright:
              <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
          </footer>
        </div >
      </PersistGate>
    </Provider>
  );
}

export default App;
