import logo from './logo.svg';
import './App.css';
import LoginComponent from './LoginComponent/LoginComponent';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <LoginComponent />
    </div>
  );
}

export default App;
