// import {useState} from 'react';

import { useState } from "react";

// function Todolist({props}){ // props is an array of todos
//     console.log(props)
//     return (
//         <div>
//             {
//                 props.items.map(function(data){
//                     return <div>{data}</div>
//                 })
//             }
//         </div>
//     )
// }

// export default Todolist;


function Todolist(prop){
    
    function handleClick(data){
        alert(`${data} is clicked`);
    }

    let todoData = prop.todolist;

    let [isFinished,setIsFinished] = useState(false);

    return(
        <>
            {
                todoData.map(function(data,idx){
                    return (
                        <div>
                            <div key={idx} onClick={() => handleClick(data)}>{data}</div>
                            <button onClick={() => setIsFinished(!isFinished)}>{(isFinished) ? `Redo` : `Done`}</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Todolist;