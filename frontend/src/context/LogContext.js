import React, { createContext, useState } from 'react'

const LogContext = createContext()

export function LogProvider({ children }) {
  const [logs, setLogs] = useState([])

  const addLog = (newLog) => {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    setLogs((prevLogs) => [
      ...prevLogs,
      { message: newLog.status, timestamp: timestamp, type: newLog.type },
    ])
  }

  return <LogContext.Provider value={{ logs, addLog }}>{children}</LogContext.Provider>
}

export default LogContext
