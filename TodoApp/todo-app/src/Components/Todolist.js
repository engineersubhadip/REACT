import {useState} from 'react';

function Todolist(props){
    console.log(props);
    let [todoList,setTodoList] = useState([]);

    return (
        <div>
            {/* <div>I am a todo item 1</div>
            <div>I am a todo item 2</div> */}

        </div>
    )
}

export default Todolist;