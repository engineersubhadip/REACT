import './App.css';
import TodoList from './Components/TodoList';
import './Styles/todo-styling.css'

function App() {
  return (
	<div>
	{/* <h2>Todo List</h2> */}
	<div className="todo-container">
		<TodoList/>
	</div>
	</div>
  );
}

export default App;
