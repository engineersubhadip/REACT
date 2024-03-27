import {useState} from 'react';
import './../TodoItem.css'


function TodoItem(prop){
    // console.log(prop);

    let [isEditing,setIsEditing] = useState(false);

    let [todoChange,setTodoChange] = useState(prop.todoDetail);

    // let [isEdit,setIsEdit] = useState(true);

    // function editTodo(e,todoID){
    //     console.log(todoID);
    //     console.log(e.target)
        
    // }

    return(
        <>
        
            <div className='todo-item-wrapper'>


                {
                    (!isEditing) ? <div>{prop.todoDetail}</div> : <input type="text" value={todoChange} onChange={(e) => setTodoChange(e.target.value)}></input>
                }

                <button onClick={() => {prop.delete()}}>
                    Done
                </button>

                <button onClick={() => {
                    setIsEditing(!isEditing)
                    if(prop.todoDetail !== todoChange){
                        prop.editData(todoChange);
                    }
                    // prop.editData(todoChange);
                }}>

                    {(isEditing) ? "Save" : "Edit"}

                </button>
            </div>

        
        </>
    )
}

export default TodoItem;