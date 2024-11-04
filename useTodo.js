import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


const initialState = [
    //   {
    // id: new Date().getTime(),
    // description: 'Aprender React',
    // done: false,
    // },
    // {
    //   id: new Date().getTime() * 3,
    //   description: 'Pesar 60 kilos',
    //   done: false,  
    //}
    
    ]; 

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
      }
      

export const useTodo = () => {
    

    const [todos, dispatch] = useReducer(todoReducer  , initialState, init); 
    
    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));
      }
      ,[todos]);

    const handleNewTodo = (todo) => {
        const action= {
            type: 'Add Todo',
            payload: todo
        };
        console.log({todo});
        dispatch (action); 
    }
    const handleDeleteTodo = (todoId) => {
        const action= {
            type: 'Delete Todo',
            payload: todoId
        };
        dispatch(action); 
    }
    const handleToggleTodo = (todoId) => {
    console.log({todoId});
        const action= {
            type: 'Toggle Todo',
            payload: todoId
            };
        dispatch(action); 
    } 
    
    
  return {
    todos,
    todosLength: todos.length,
    todosPending: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
