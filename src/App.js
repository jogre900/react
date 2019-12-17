import React from 'react';
import logo from './logo.svg';
import './App.css';

function presentacion(nombre, mensaje){
  let mostrar = (
    <div>
      <p><strong>{nombre}</strong> {mensaje}</p>
    </div>
  )
    return mostrar
}
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {presentacion('Jose Del Corral', 'Esta aprendiendo')}
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
    </div>
  );
}

export default App;
