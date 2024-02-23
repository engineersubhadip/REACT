import './../Styles/todo-styling.css'
import { useState } from "react";

let TodoList = function(){
    // let data = ["Item1","Item2","Item3","Item4"];
    let data = [
        {title:"Item1"},
        {title:"Item2"},
        {title:"Item3"},
        {title:"Item4"}
    ]
    return(
        <div className="parent-wrapper">
            {/* <h2>Todo Application</h2> */}
        <div className="todo-wrapper">
            <div className='top-half'>
                <input placeholder='Please enter a todo'></input>
                <select>
                    <option>Complete</option>
                    <option>Pending</option>
                </select>
                <button>Add Todo</button>
            </div>
            <div className="todo-list-wrapper">
                {data.map(function(ele){
                    return(<p>{ele.title}</p>);
                })}
            </div>
        </div>
        </div>
    )
}

export default TodoList;