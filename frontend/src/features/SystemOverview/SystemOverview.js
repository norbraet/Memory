import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import './SystemOverview.css'

const SystemOverview = ({ headingLevel: Heading = 'h2' }) => {
  const [stats, setStats] = useState({})

  useEffect(() => {
    const socket = io('http://localhost:5000')

    socket.on('system_stats', (data) => {
      setStats(data)
      console.log(data)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  const renderStatsRows = () => {
    return Object.entries(stats).map(([key, value]) => {
      return (
        <div className='system-overview-flex'>
          <label>{key}</label>
          <span>{value}</span>
        </div>
      )
    })
  }

  return (
    <div>
      <Heading>System</Heading>
      <div className='system-overview'>{renderStatsRows()}</div>
    </div>
  )
}

export default SystemOverview
