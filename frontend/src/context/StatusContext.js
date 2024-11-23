import React, { createContext, useState } from 'react'

const StatusContext = createContext()

export function StatusProvider({ children }) {
    const [status, setStatus] = useState('')

    return (
        <StatusContext.Provider value={{ status, setStatus }}>
            {children}
        </StatusContext.Provider>
    )
}

export default StatusContext