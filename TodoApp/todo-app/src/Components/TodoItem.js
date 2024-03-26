import {useState} from 'react';
import './../TodoItem.css'


function TodoItem(prop){

    let [isFinished,setIsFinished] = useState(false);

    return(
        <>
        
            <div>
                <div className={(isFinished) ? 'todo-done' : 'todo-not-done'}>{prop.todoDetail}</div>
                <button onClick={() => setIsFinished(!isFinished)}>{(isFinished) ? 'Redo' : 'Done'}</button>
            </div>

        
        </>
    )
}

export default TodoItem;