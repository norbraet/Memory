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
      <h1>Raspberry PI Control UI</h1>
      <div className="container">
        <Button onClick={turnOff} label="LED Aus" />
        <Button onClick={turnOn} label="LED An" />
      </div>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;
