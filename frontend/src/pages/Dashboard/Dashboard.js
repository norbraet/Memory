import './Dashboard.css'
import React, { useContext } from 'react'
import api from '../../services/api'
import Button from '../../components/Button/Button'
import LogContext from '../../context/LogContext'
import SystemOverview from '../../features/SystemOverview/SystemOverview'
import LogArea from '../../features/LogArea/LogArea'


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
    <main>
      <div className="container-center">
        <h1>Dashboard</h1>

        {/* <SystemOverview headingLevel='h2' /> */}
        <Button onClick={turnOff} label="LED Aus" />
        <Button onClick={turnOn} label="LED An" />
        <LogArea />
      </div>
    </main>
  )
}

export default App
