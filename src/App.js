import logo from './logo.svg';
import './App.css';
import LoginComponent from './LoginComponent/LoginComponent';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RoutesComponent from './RoutesComponent';
import HeadNavComponent from './HeadNavComponent/HeadNavComponent';

function App() {
  return (
    <div className="App ">
      <Router>
        <div>
          <HeadNavComponent />
          <RoutesComponent />
        </div>

      </Router>
      <footer className="text-center text-lg-start bg-light text-muted footer-setter">
        <div className="text-center p-4" >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
