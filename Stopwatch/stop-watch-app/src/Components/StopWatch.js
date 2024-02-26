import './../App.css'
import {useState} from 'react'

let StopWatch = function(){
    let [milisec,updateMiliSec] = useState(0);
    let [second,updateSecond] = useState(0);
    let [minute,updateMinute] = useState(0);
    
    return (
        <div className="container">
            <div className="header">
                StopWatch
            </div>

            <div className='split-timer'><span>{milisec}</span></div>

            <div className='action-btn'>
                <button className='start-btn'>Start</button>
                <button className='reset-btn'>Reset</button>
                <button className='pause-btn'>Pause</button>
            </div>
        </div>
    )
}

export default StopWatch;