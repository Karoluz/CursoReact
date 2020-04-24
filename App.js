import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './Components/User';
import Hooks from './Components/User/hooks';

function App() {
  const name = "Carlos Ibarra"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a la paginas en React :)
        </p>
        <p>
          Pagina de prueba realizada por {name}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <UserComponent />
      <Hooks />
    </div>
  );
}

export default App;
