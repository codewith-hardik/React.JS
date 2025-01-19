
import { createSlice, nanoid } from '@reduxjs/toolkit'

let initialState = {
    todo: [{id:"abc", task: "Code With Hardik", isDone: false}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            let newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todo.push(newTodo); //Direct Mutation Avoid [...todo, newTodo]
        },
        delTodo: (state,action)=>{
           state.todo =  state.todo.filter((todo)=> todo.id !== action.payload);
        
        },
        markAsDone: (state,action)=>{
            state.todo = state.todo.map((todo)=> {
                if (todo.id === action.payload) {
                    todo.isDone === true;
                }
            });
        }
    }
})


export const {addTodo, delTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;