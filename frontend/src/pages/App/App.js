import logo from '../../assets/logo.svg'
import './App.css'
import React, { useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button/Button'

function App() {

  const [status, setStatus] = useState("")

    const turnOn = () => {
        api.get('/on')
          .then(response => setStatus(response.data.status))
          .catch(error => console.log(error))
    };

    const turnOff = () => {
          api.get('/off')
          .then(response => setStatus(response.data.status))
          .catch(error => console.log(error))
    };

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


        <Button onClick={turnOn} label="LED An" />
        <Button onClick={turnOff} label="LED Aus" />
        <p>Status: {status}</p>
      </header>
    </div>
  );
}

export default App;
