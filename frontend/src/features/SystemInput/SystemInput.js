import React from 'react'
import "./SystemInput.css"
import Slider from './components/Slider/Slider'


const SystemInput = ({ headingLevel: Heading = "h2", heading = "System Input" }) => {

    return (
        <section>
            <Heading>
                { heading }
            </Heading>
            <div className='system-input-slider'>
                <Slider label='Colorfull' />
                <Slider label='Blurriness' />
                <Slider label='Brightness' />
            </div>
        </section>
    )
}

export default SystemInput