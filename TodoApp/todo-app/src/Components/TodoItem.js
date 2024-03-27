import {useState} from 'react';
import './../TodoItem.css'


function TodoItem(prop){
    

    let [isEditing,setIsEditing] = useState(false);

    let [todoChange,setTodoChange] = useState(prop.todoDetail);

    return(
        <>
        
            <div className='todo-item-wrapper'>


                {
                    (!isEditing) ? <div>{prop.todoDetail}</div> : 
                    <input type="text" value={todoChange} onChange={(e) => setTodoChange(e.target.value)}></input>
                }

                <button onClick={() => {prop.delete()}}>
                    Done
                </button>

                <button onClick={() => {
                    setIsEditing(!isEditing)
                    if(prop.todoDetail !== todoChange){
                        prop.editData(todoChange);
                    }
                }}>

                    {(isEditing) ? "Save" : "Edit"}

                </button>
            </div>

        
        </>
    )
}

export default TodoItem;