// es una función pura de JavaScript 



export const todoReducer = (inicialState = [], action) => {

    switch (action.type) {
        case 'Add Todo':
            return [...inicialState, action.payload];
           
        case 'Delete Todo':
            return inicialState.filter(todo => todo.id !== action.payload); 
        case 'Toggle Todo':
            return inicialState.map(todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;

            });
        default:
           return inicialState;
    }  

}
