import './Dashboard.css'
import React, { useContext } from 'react'
import api from '../../services/api'
import Button from '../../components/Button/Button'
import LogContext from '../../context/LogContext'
import LogArea from '../../features/LogArea/LogArea'
import SystemInput from '../../features/SystemInput/SystemInput'


function App() {
  const { addLog } = useContext(LogContext)

    const turnOn = () => {
        api.get('/on')
          .then(response => addLog(response.data))
          .catch(error => console.log(error))
    }

    const turnOff = () => {
          api.get('/off')
          .then(response => addLog(response.data))
          .catch(error => console.log(error))
    }

  return (
    <main className="container-center">
      <h1>Dashboard</h1>

      <SystemInput headingLevel='h2' heading='System Input'/>
      <Button onClick={turnOff} label="LED Aus" />
      <Button onClick={turnOn} label="LED An" />
      <LogArea headingLevel='h2' heading='Logs' />
    </main>
  )
}

export default App
