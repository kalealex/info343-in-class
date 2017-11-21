// Take the text from the input filed and return as proper "Action" JSON object for use with other components
export const addTodo = (text) => {
    return {
        type: "ADD-TODO",
        id: nextTodoId++,
        text: text,
        completed: false
    }
}

// Take the filter and return a proper "Action" JSON object to send to other components
export const setVisibilityFilter = (filter) => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter: filter
    }
}

// Take the todo item's id and returns a proper "Action" JSON object to other components
export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id: id
    }
}

// Reducer takes the current state of Redux (an array of previous Todo items) and returns a *NEW* array of todos
// (new state) w/ the new todo added if the action type is "ADD_TODO"
export const todo = (state = [], action) => { // if no current state, default to empty
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state, {
                id: action.id,
                text: action.text,
                completed: false
                }
            ];
        case "TOGGLE_TODO":
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return Object.assign({}, todo, {completed: !todo.completed});
            });
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        
        default:
            return state
    }
}