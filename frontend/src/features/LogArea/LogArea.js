
import React, { useContext, useEffect, useRef} from 'react'
import './LogArea.css'
import LogContext from '../../context/LogContext'
import {ReactComponent as InfoLogo} from '../../assets/infoLogo.svg'
import {ReactComponent as WarningLogo} from '../../assets/warningLogo.svg'

const LogArea = ({ headingLevel: Heading = "h2", heading = "Logs" }) => {
  const { logs } = useContext(LogContext);
  const logAreaRef = useRef(null);

  useEffect(() => {
    if (logAreaRef.current) {
      logAreaRef.current.scrollTop = logAreaRef.current.scrollHeight
    }

  }, [logs])

  return (
    <section className='log-area-section'>
      <div className='container-center'>
          <Heading>
            { heading }
          </Heading>
          <ol className="log-area" ref={logAreaRef}>
            {logs.map((log, index) => {
              const LogoComponent = log.type === 'warning' ? WarningLogo : InfoLogo

              return (
                <li className="log-area-item" key={index}>
                  <div className="log-area-logo-container">
                    <LogoComponent className="log-area-logo" />
                    <div className="log-area-line" />
                  </div>
                  <div>
                    <p className="log-area-message">{log.message}</p>
                    <p className="log-area-time">{log.timestamp}</p>
                  </div>
                </li>
              )
            })}
          </ol>
      </div>
    </section>
  )
}

export default LogArea
