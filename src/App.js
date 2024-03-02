import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo , changeTask } from "./redux/actions";
import "./App.css";
import Todolist from "./todolist";

const App = () => {
  const task = useSelector((state) => state.task);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(changeTask(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addTodo(task));
    }
  
    dispatch(changeTask(''));
  };
  

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div id="header">
      <div id="main">
        <nav id="nav">
          <h1>Todo-List</h1>
        </nav>
        <br></br>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="btn0"
            name="task"
            value={task}
            placeholder="Add the text"
            onChange={changeHandler}
          />
          <br></br>
          <br></br>
          <button id="btn">Add</button>
          <br></br>
          <br></br>
        </form>
        <Todolist todolist={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
