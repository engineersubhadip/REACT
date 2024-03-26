import './../Header.css'
import {useState} from 'react';
import Todolist from './Todolist';

function Header(){
    // let [todo,setTodo] = useState("");

    // let [todoList,setTodoList] = useState([]);

    // function updateTodo(e){
    //     setTodo(e.target.value);
    // }

    // function addTodo(){
    //     // console.log(todo);
    //     setTodoList([...todoList,todo]);
    //     setTodo("")
    // }

    let todo = ['todo1','todo2','todo3','todo4']

    return (
        <>
        <div>
            <Todolist todolist={todo}/>
        </div>
        {/* <div className="header-wrapper">
            <input className='input-box' type="text" value={todo} onChange={updateTodo}></input>
            <button className='add-btn' onClick={addTodo}>Add Task</button>
        </div> */}
        
            {/* <div className='todo-wrapper'>
                {
                    todoList.map(function(ele,index){
                        return <div key={index}>{ele}</div>
                    })
                }
            </div> */}
            {/* <Todolist items={todoList}/> */}
        
        
        </>
    )
}

export default Header;