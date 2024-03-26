// import {useState} from 'react';

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
    console.log(prop);
    let todoData = prop.todolist;
    console.log(todoData);
    return(
        <>
            {
                todoData.map(function(data,idx){
                    return <div key={idx}>{data}</div>
                })
            }
        </>
    )
}

export default Todolist;