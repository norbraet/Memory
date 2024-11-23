import './Dashboard.css'
import React, { useContext } from 'react'
import api from '../../services/api'
import Button from '../../components/Button/Button'
import StatusContext from '../../context/StatusContext'
import SystemOverview from '../../features/SystemOverview/SystemOverview'

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
        <h1>Dashboard</h1>

        <SystemOverview headingLevel='h2' />
        <Button onClick={turnOff} label="LED Aus" />
        <Button onClick={turnOn} label="LED An" />
      </div>
    </main>
  )
}

export default App
