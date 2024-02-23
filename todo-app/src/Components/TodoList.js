import "./../Styles/todo-styling.css";
import { useState } from "react";

let TodoList = function () {

  let [todo, setTodos] = useState(
    [
    // { title: "Item1", isCompleted: true },
    // { title: "Item2", isCompleted: false },
    // { title: "Item3", isCompleted: true },
    // { title: "Item4", isCompleted: false },
    // { title: "Item5", isCompleted: true },
  ]
  );

  let [newTodo, setNewTodo] = useState("");

  let handleNewTodoChange = function (e) {
    setNewTodo(e.target.value);
  };

  let handleTodoSubmit = function (e) {
    // Upon Clicking on the AddNewTodo Button we will add the new todo the todo list
    e.preventDefault(); // To stop the page from reloading
    let newTodoList = [...todo, { title: newTodo, isCompleted: dropDownValue}];
    console.log(dropDownValue);
    setTodos(newTodoList);
    setNewTodo(""); // The value just entered inside the I/P will be initialized to "" inside SV.
    setDropDownvalue(false); // Resetting the Drop Down SV
  };

  let handleCompletion = function(e){
    let currentIndexClicked = e.target.dataset.id;
    let currentIsCompletedStatus = e.target.checked;

    // Lets create a copy of the todoList:-
    let newTodoList = [...todo];

    // Where is the element present in this todoList and make a copy of that object:-
    let currentElement = {...newTodoList[currentIndexClicked]};
    currentElement.isCompleted = currentIsCompletedStatus; // We have updated the copied element

    // Now we will replace:-

    newTodoList.splice(currentIndexClicked,1,currentElement);

    // Update the State Variable:-

    setTodos(newTodoList);
  }

  let [dropDownValue,setDropDownvalue] = useState(false);

  let handleDropDown = function(e){
    if(e.target.value === "Pending"){
        setDropDownvalue(false);
    }else{
        setDropDownvalue(true);
    }
  }

  return (
    <div className="parent-wrapper">
      <h3>Todo Application</h3>
      <div className="todo-wrapper">
        <div className="todo-form">
          <form>
            <input
              type="text"
              value={newTodo}
              placeholder="Please enter a todo"
              onChange={handleNewTodoChange}
            ></input>
            <select onChange={handleDropDown} value={dropDownValue?"Complete":"Pending"}>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
            <button onClick={handleTodoSubmit}>Add Todo</button>
          </form>
        </div>
        <div className="todo-list-wrapper">
        {!todo.length ? <p className="default-todo">Please enter a todo</p> : ""} 
          {todo.map(function (ele,idx) { 
            return (
              <p>
                <input type="checkbox" checked={ele.isCompleted} data-id={idx} onChange={handleCompletion} />
                <span className={ele.isCompleted ? "task-complete":""}>{ele.title}</span>
              </p>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default TodoList;
