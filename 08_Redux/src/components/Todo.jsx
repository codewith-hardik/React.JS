import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { delTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  let handleDelete = (id)=>{
    dispatch(delTodo(id))
  }
  let handleDone = (id)=>{
      dispatch(markAsDone(id))
      console.log(todos,id)
  }
  return (
    <>
      <h1>Todos App</h1>
      <hr />
      <AddForm />
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} >
           
            {todo.task}
            <button onClick={()=> handleDelete(todo.id)}> Delete</button>
            <button onClick={()=> handleDone(todo.id)}> Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
