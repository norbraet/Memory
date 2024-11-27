import './Dashboard.css'
import React, { useEffect } from 'react'
import LogArea from '../../features/LogArea/LogArea'
import SystemInput from '../../features/SystemInput/SystemInput'
import { socket } from '../../services/socket'


function App() {
  useEffect(() => {
    console.log("init dashboard")

    socket.on('connect', (data) => {
      console.log('Connected to socket server')
      console.log(data)
      socket.emit('system_stats_request')
    })

    socket.on('system_stats', (data) => {
      console.log('Received system stats :', data)
    })

    return () => {
      socket.off('connect')
      socket.off('system_stats')
    }

  }, [])

  return (
    <main>
      <section>
        <h1>Dashboard</h1>
      </section>
      <SystemInput headingLevel='h2' heading='System Input'/>
      <LogArea headingLevel='h2' heading='Logs' />
    </main>
  )
}

export default App
