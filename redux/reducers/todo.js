const init_state = {
    todoInput: "Hello Fellas",
    todoList: [],
}

export default (state=init_state, action) => {
    if(action.type === "ON_CHANGE_TODO_INPUT"){
        return { ...state, todoInput: action.payload }
    }else if(action.type === "ON_CHANGE_USER_INPUT_LIST"){
        console.log(this.state.TodoList.length);
        return { ...state, todoList: [...state.todoList,action.payload] }
    }else{
        return { ...state }
    }

}