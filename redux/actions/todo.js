export const todoInputHandler = (text) => {
    return {
        type: "ON_CHANGE_TODO_INPUT",
        payload: text
    }
} 
export const TodoList = (todoitem) => {
    return {
        type: "ON_CHANGE_USER_INPUT_LIST",
        payload: todoitem
    }
} 