import './../App.css'
import {useState,useEffect} from 'react'

let StopWatch = function(){
    let [milisec,updateMiliSec] = useState(0);
    let [second,updateSecond] = useState(0);
    let [minute,updateMinute] = useState(0);

    
    let [isStartActive,updateStartActive] = useState(true);
    let [isResetActive,updateResetActive] = useState(true);
    let [isPauseActive,updatePauseActive] = useState(true);
    
    let handleStart = function(){
        let timerID = setInterval(function f1(){

            updateMiliSec(function f2(prevMiliSec){
                if (prevMiliSec === 9){
                    console.log("Now we shall be pausing");
                    updateMiliSec(0);
                    updateSecond(function f3(prevSec){
                        return prevSec+1;
                    })
                    
                }else{
                    return prevMiliSec+1;
                }
            });
            
        },1000);
    }

    return (
        <div className="container">
            <div className="header">
                StopWatch
            </div>

            <div className='split-timer'><span>{milisec}</span>:<span>{second}</span></div>

            <div className='action-btn'>
                <button className={isStartActive ? "activateStart" : "deactivateStart"} onClick={handleStart}>Start</button>
                <button className={isResetActive ? "activateReset" : "deactivateReset"}>Reset</button>
                <button className={isPauseActive ? "activatePause" : "deactivatePause"}>Pause</button>
            </div>
        </div>
    )
}

export default StopWatch;