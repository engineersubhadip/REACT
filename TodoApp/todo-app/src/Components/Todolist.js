import TodoItem from "./TodoItem";
import './../TodoList.css';

function TodoList(){

    let todoListArr = [{id:237,todoData:"Todo Item1"},{id:256,todoData:"Todo Item2"},{id:272,todoData:"Todo Item3"}];

    return(
        <div className="list-todo">
            {
                todoListArr.map(function(res){
                    return <TodoItem key={res.id} todoDetail={res.todoData} todoID={res.id}/>
                })
            }
            
        </div>
    )
}

export default TodoList;