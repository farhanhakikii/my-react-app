    const init_state = {
        id: 0,
        username: "admin",
        fullName: "",
        role: "",
        testing: "",
        testing2: "",
        errmsg: ""
    };
    
    export default (state = init_state, action) => {
        if (action.type === "ON_CHANGE_USER_INPUT") {
            return { ...state, username: action.payload };
        }else if (action.type === "ON_LOGIN_SUCCESS") {
            const {un, fn, rl} = action.payload
            return { ...state, un, fn, rl };
        }
        return { ...state };
    };
    
    // const init_state = {
    //     id: "0",
    //     username: "User",
    //     fullName: "",
    //     role: "",
    //     testing: "",
    //     testing2: ""
    // }
    
    // export default (state=init_state, action) => {
    //     if(action.type === "ON_CHANGE_USER_INPUT"){
    //         return { ...state, username: action.payload }
    //     }else if(action.type === "TESTING"){
    //         return { ...state }
    //     }
    //     }