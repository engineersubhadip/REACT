import './../Style/Counter.css'
import { useState } from 'react';

let Counter = function(props){
    let contClassName = `counter-wrapper ${props.theme}`;
    // let count = 0;
    let [count,setCount] = useState(0);

    function increaseCounter(event){
        setCount(count+1);
    }

    function decreaseCounter(event){
        setCount(count-1);
    }

    function changeInput(event){
        let currVal = Number(event.target.value);
        setCount(currVal);
    }
    return(
        <div className = {contClassName}>
            <h1>Counter {props.label}</h1>
            <div>
                <button onClick={increaseCounter}>+</button>
                {count}
                <input type="number" value={count} onChange={changeInput}></input>
                <button onClick={decreaseCounter}>-</button>
            </div>
        </div>
    )
}

export default Counter;