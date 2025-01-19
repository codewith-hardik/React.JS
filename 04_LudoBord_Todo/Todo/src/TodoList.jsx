import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Some-Task", id: uuidv4() , isDone: false}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id)=>{
   setTodos(todos.filter((todo)=>todo.id != id));
  }

  let markAllDone = ()=>{
    setTodos(todos.map((todo)=>{
        return {
            ...todo,
            isDone: true
        }
    }))
  }
  let markAsDone = (id)=>{
    setTodos(todos.map((todo)=>{
    if (todo.id == id){
        return {
            ...todo,
           isDone : true
        }
    }else {
        return todo;
    }

       
    }))
  }
  return (
    <div>
      <input
        type="text"
        name="task"
        id="task"
        value={newTodo}
        placeholder="Add A Task"
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <br />
      <hr />
      <h3>Tasks Todo</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span style={ todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => { deleteTodo(todo.id)}}>Delete</button>
              <button onClick={() => { markAsDone(todo.id)}}>markAsDone</button>
            </li>
          );
        })}
      </ul>
      <br /><br />
      <button onClick={markAllDone}>Mark All Done</button>
    </div>
  );
}
