import './App.css'
import React, { useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'

function App() {

  const [status, setStatus] = useState("")

    const turnOn = () => {
        api.get('/on')
          .then(response => setStatus(response.data.status))
          .catch(error => console.log(error))
    }

    const turnOff = () => {
          api.get('/off')
          .then(response => setStatus(response.data.status))
          .catch(error => console.log(error))
    }

  return (
    <main>
      <div className="container-center">
        <Button onClick={turnOff} label="LED Aus" />
        <Button onClick={turnOn} label="LED An" />
      </div>

      <Footer status={status}/>
    </main>
  )
}

export default App
