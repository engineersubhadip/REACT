import { useState } from "react";
import TodoList from "./TodoList";

let Todo = function(){
    let todoData = [
        {id:1,data:"todo 1"},
        {id:2,data:"todo 2"},
        {id:3,data:"todo 3"}
    ]
    let [newTodo,addNewTodo] = useState("");
    let [idCount,addIdCount] = useState(1);
    
    function changeTodo(event){
        addNewTodo(event.target.value);
        addIdCount(idCount+1);
    }

    function addTodo(){
        todoData.push()
    }
    return(
        <div>
            <input placeholder="Enter todo" onChange={changeTodo}/>
            <br/>
            <button onClick={addTodo}>Add Item</button>
            <TodoList data={todoData}/>
        </div>
    )
}

export default Todo;