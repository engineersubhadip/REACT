import { useState } from "react";

let Counter = function(){
    // let x = 10;
    let [count,setCount] = useState(0);
    let [text,setText] = useState("");

    function changeCount(){
        setCount(count+1);
    }

    function changeText(event){
        let currVal = event.target.value;
        setText(currVal);
    }

    return(
        <div className="counter">
            <span className="counterValue">{count}</span>
            <br/>
            <input type="text" onChange={changeText}/>
            <span>{text}</span>
            <br/>
            <button id="click" onClick={changeCount}>Click</button>
        </div>
    )
}

export default Counter;