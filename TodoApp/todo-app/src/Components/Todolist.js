import TodoItem from "./TodoItem";
import './../TodoList.css';
import { useState } from "react";

function TodoList(){

    // let todoListArr = [{id:237,todoData:"Todo Item1"},{id:256,todoData:"Todo Item2"},{id:272,todoData:"Todo Item3"}];

    let [todoListArr,setTodoListArr] = useState([])
    let [getTodo,setTodo] = useState("");

    function addTodo(){
        setTodoListArr([...todoListArr,{id:(new Date()).getTime(),todoData:getTodo}]);
        setTodo("")
    }

    function deleteTodo(id){
        console.log(id);
        let remainingTodo = todoListArr.filter(function(ele){
            if(ele.id !== id){
                return true;
            }
        })
        setTodoListArr(remainingTodo);
    }

    return(
        <div className="list-todo">
            <div className="top-header">
                <input value={getTodo} onChange={(e) => setTodo(e.target.value)}/>
                <button onClick={addTodo}>Add Todo</button>
            </div>
            {
                todoListArr.map(function(res){
                    return <TodoItem key={res.id} todoDetail={res.todoData} todoID={res.id} delete={() => deleteTodo(res.id)}/>
                })
            }
            
        </div>
    )
}

export default TodoList;