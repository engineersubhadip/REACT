import './../Header.css'
import {useState} from 'react';
import Todolist from './Todolist';

function Header(){
    let [todo,setTodo] = useState("");

    let [todoList,setTodoList] = useState([]);

    function updateTodo(e){
        setTodo(e.target.value);
    }

    function addTodo(){
        // console.log(todo);
        setTodoList([...todoList,todo]);
        setTodo("")
    }

    return (
        <>
        <div className="header-wrapper">
            <input className='input-box' type="text" value={todo} onChange={updateTodo}></input>
            <button className='add-btn' onClick={addTodo}>Add Task</button>
        </div>
        <div>
            <div className='todo-wrapper'>
                {
                    todoList.map(function(ele,index){
                        return <div key={index}>{ele}</div>
                    })
                }
        </div>
        </div>
        
        </>
    )
}

export default Header;