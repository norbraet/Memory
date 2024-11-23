import './App.css'
import React, { useContext } from 'react'
import api from '../../services/api'
import Button from '../../components/Button/Button'
import StatusContext from '../../context/StatusContext'

function App() {
  const { setStatus } = useContext(StatusContext)

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
    </main>
  )
}

export default App
