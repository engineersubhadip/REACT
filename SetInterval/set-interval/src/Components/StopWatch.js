import {useEffect, useState} from 'react';
import './../App.css'

let StopWatch = function(){
    let [counter,setCounter] = useState(0);

    // setInterval(function(){
    //     setCounter(counter+1);
    //     console.log(counter);
    // },3000);
    // console.log("Re-rendered");

    useEffect(function f1(){
        setInterval(function f2(){
            setCounter(function f3(prev){
                // console.log("Prev State Value is",prev);
                return prev+1;
            }); // async
        },1000);
    },[]);



    return(
        <div>
            <div className='headerName'>StopWatch</div>
            <div>
            <div>{counter}</div>
            </div>
        </div>
    )
}

export default StopWatch;