    const init_state = {
        id: "",
        username: "",
        fullName: "",
        role: "",
        testing: "",
        testing2: "",
        errmsg: "",
        isExist: true
    };
    
    export default (state = init_state, action) => {
        if (action.type === "ON_CHANGE_USER_INPUT") {
            return { ...state, username: action.payload };
        }else if (action.type === "ON_LOGIN_SUCCESS") {
            const {un, fn, rl} = action.payload
            return { ...state, username: un, fullName: fn, role: rl, isExist: false };
        }else{
            return{ ...state, isExist: true}
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