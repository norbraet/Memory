
import React, { useContext, useEffect, useRef} from 'react'
import './LogArea.css'
import LogContext from '../../context/LogContext'
import {ReactComponent as InfoLogo} from '../../assets/infoLogo.svg'
import {ReactComponent as WarningLogo} from '../../assets/warningLogo.svg'

const LogArea = ({ headingLevel: Heading = "h2", heading = "Logs" }) => {
  const { logs } = useContext(LogContext)
  const logEndRef = useRef(null)

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behaviour: 'smooth'})
  }, [logs])

  return (
    <section>
      <Heading>
        { heading }
      </Heading>
      <div className="log-area">
        {logs.map((log, index) => {
          const LogoComponent = log.type === 'warning' ? WarningLogo : InfoLogo

          return (
            <div className="log-area-item" key={index}>
              <div className="log-area-logo-container">
                <LogoComponent className="log-area-logo" />
                <div className="log-area-line" />
              </div>
              <div>
                <p className="log-area-message">{log.message}</p>
                <p className="log-area-time">{log.timestamp}</p>
              </div>
            </div>
          )
        })}
        <div ref={logEndRef} />
      </div>
    </section>
  )
}

export default LogArea
