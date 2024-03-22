import { useState } from "react";

let Counter = function(){
    
    let [count,setCount] = useState(0);

    let handlePlusBtn = function(){
        setCount(count+1);
    }

    let handleMinusBtn = function(){
        if(count > 0){
            setCount(count-1);
        }
    }
    return (
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={handlePlusBtn}>+</button>
            <button onClick={handleMinusBtn}>-</button>
        </div>
    )
}

export default Counter;