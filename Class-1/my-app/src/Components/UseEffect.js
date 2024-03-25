import { useEffect, useState } from "react";

let UseEffect = function(){
    let [count,setCount] = useState(0);
    
    let valInc = function(){
        setCount(count+1);
    }

    useEffect(function cb1(){
        console.log("This is to be printed in the Mounting Phase");
    },[]);

    // * cb1 -> will be executed when the component renders for the first time in the UI.

    useEffect(function cb2(){
        console.log("This is to be printed in the Mounting and Update Phase");
    },[count]);

    // * cb2 -> will be executed when the component renders for the first time in the UI and when STATE Changes.


    useEffect(function cb3(){
        console.log("This will also run in the Mounting and Updating Phase");
    })

    // * cb3 -> will be executed in the Mounting and Updating Phase

    return(
        <div>The value of count is : {count}
        <button onClick={valInc}>Increment</button>
        </div>
        
    )
}

export default UseEffect;