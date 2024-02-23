import './../Styles/todo-styling.css'
import { useState } from "react";

let TodoList = function(){
    // let data = ["Item1","Item2","Item3","Item4"];
    // let data = [
    //     {title:"Item1"},
    //     {title:"Item2"},
    //     {title:"Item3"},
    //     {title:"Item4"}
    // ]

    let [todo,setTodos] = useState([
        {title:"Item1"},
        {title:"Item2"},
        {title:"Item3"},
        {title:"Item4"},
        {title:"Item5"}
    ]);
    
    let [newTodo,setNewTodo] = useState("");

    let handleNewTodoChange = function(e){
        setNewTodo(e.target.value);
    }

    let handleTodoSubmit = function(e){ // Upon Clicking on the AddNewTodo Button we will add the new todo the todo list
        console.log(newTodo); // User has currently typed the word
        // setTodos(todo.push({title:newTodo}));
        setTodos([...todo,{title:newTodo}]);
        setNewTodo("") // The value just entered inside the I/P will be initialized to "" inside SV.
    }

    return(
        <div className="parent-wrapper">
            {/* <h2>Todo Application</h2> */}
        <div className="todo-wrapper">
            <div className='todo-form'>
                <input type='text' value={newTodo} placeholder='Please enter a todo' onChange={handleNewTodoChange}></input>
                <select>
                    <option>Complete</option>
                    <option>Pending</option>
                </select>
                <button onClick={handleTodoSubmit}>Add Todo</button>
            </div>
            <div className="todo-list-wrapper">
                {
                todo.map(function(ele){
                    return(<p>{ele.title}</p>)
                })
                }
            </div>
        </div>
        </div>
    )
}

export default TodoList;