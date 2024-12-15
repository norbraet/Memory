import './Dashboard.css'
import React from 'react'
import LogArea from '../../features/LogArea/LogArea'
import SystemInput from '../../features/SystemInput/SystemInput'

function App() {
  return (
    <main>
      <section>
        <h1>Dashboard</h1>
      </section>
      <SystemInput headingLevel='h2' heading='System Input' />
      <LogArea headingLevel='h2' heading='Logs' />
    </main>
  )
}

export default App
