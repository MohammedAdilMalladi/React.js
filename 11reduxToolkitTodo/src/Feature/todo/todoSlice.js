import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
           const todo = {
            id: nanoid(),
            text: action.payload,
           }
           state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions //we export these methods because using this methods we are going to change the states

export default todoSlice.reducer //this provides a list to the store variable created using configureStore() method, because the configureStore() method does not updates all components or variables but only it takes the values of registered reducers and updates them
