import {useState} from 'react';
import './../TodoItem.css'


function TodoItem(prop){
    // console.log(prop);

    let [isFinished,setIsFinished] = useState(false);

    // let [isEdit,setIsEdit] = useState(true);

    // function editTodo(e,todoID){
    //     console.log(todoID);
    //     console.log(e.target)
        
    // }

    return(
        <>
        
            <div className='todo-item-wrapper'>
                <div className={(isFinished) ? 'todo-done' : 'todo-not-done'}>{prop.todoDetail}</div>
                {/* <button onClick={(e) => editTodo(e,prop.todoID)}>{(isEdit) ? 'Edit' : 'Save'}</button> */}
                <button onClick={() => {
                    setIsFinished(!isFinished);
                    prop.delete();
                    }}>
                    {(isFinished) ? 'Redo' : 'Done'}
                </button>
            </div>

        
        </>
    )
}

export default TodoItem;