import React, { useContext } from 'react'
import api from '../../services/api'
import Button from './components/Button/Button'
import LogContext from '../../context/LogContext'
import "./SystemInput.css"
import Slider from './components/Slider/Slider'


const SystemInput = ({ headingLevel: Heading = "h2", heading = "System Input" }) => {
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
        <section>
            <Heading>
                { heading }
            </Heading>
            <div className='system-input-slider'>
                <Slider label='Colorful' />
                <Slider label='Blurriness' />
                <Slider label='Brightness' />
            </div>
            <div>
                <Button className='primary' onClick={turnOff} label="LED Aus" />
                <Button onClick={turnOn} label="LED An" />
            </div>
        </section>
    )
}

export default SystemInput