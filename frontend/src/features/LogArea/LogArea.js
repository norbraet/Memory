
import React, { useContext, useEffect, useRef} from 'react'
import './LogArea.css'
import LogContext from '../../context/LogContext'

const LogArea = ({ headingLevel: Heading = "h2", heading = "Logs" }) => {
  const { logs } = useContext(LogContext)
  const logEndRef = useRef(null)

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behaviour: 'smooth'})
  }, [logs])

  return (
    <div>
      <Heading>
        { heading }
      </Heading>
      <div className="log-area container-centar">
        {logs.map((log, index) => {
          return (
            <div className="log-area-item" key={index}>
              <p className='log-area-message'>{log.message}</p>
              <p className='log-area-time'>{log.timestamp}</p>
            </div>
          )
        })}
        <div ref={logEndRef} />
      </div>
    </div>
  )
}

export default LogArea
