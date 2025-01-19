import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){

    let [task, setTask] = useState("");
    let dispatch = useDispatch();

    let handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
       setTask("");

    }
    return (<>
    <form action="#" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add New Task" name="task" id="task" value={ task} onChange={(e)=>setTask(e.target.value)}/>
        <br /><br />
        <button type="submit"  >Add Task</button>

    </form>
    </>)
}