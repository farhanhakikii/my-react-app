import Axios from "axios"
import { API_URL } from "../../constants/API"
import user from "../reducers/user"

export const userInputHandler = (text) => {
    return {
        type: "ON_CHANGE_USER_INPUT",
        payload: text
    }
}

export const regHandler = (regdata) => {
    return (dispatch) => {
        const {username,password,role,fullName} = regdata
        Axios.get(`${API_URL}/pengguna?un=${username}`)
        .then(res => {
            if(username == '' || password == '' || role == '' || fullName == ''){
                alert("Lengkapi form registrasi")
            }else if(res.data.length > 0){
                alert("Username telah terdaftar")
            }else{
                Axios.post(`${API_URL}/pengguna`,{
                    un: username,
                    pw: password,
                    rl: role,
                    fn: fullName
                   })
                alert("Registrasi Berhasil")
                dispatch({
                    type: "ON_LOGIN_SUCCESS",
                    payload: res.data[0]
                })
                this.props.userInputHandler(`${username}`)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const loginHandler = (datauser) => {
    return (dispatch) => {
        const {username,password} = datauser
        Axios.get(`${API_URL}/pengguna`, {
            params: {
                un: username,
                pw: password
            }
        })
        .then(res => {
            if(res.data.length > 0){
                alert("sukses")
                dispatch({
                    type: "ON_LOGIN_SUCCESS",
                    payload: res.data[0]
                })
            }else {
                alert("gagal")
                dispatch({
                    type: "ON_LOGIN_FAILED",
                    payload: "username/password salah"
                })
            }
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        // dispatch({
        //     type: "TESTING",
        //     payload: "Hello World"
        // })        
        // dispatch({
        //     type: "TESTING2",
        //     payload: "Hello Worldas"
        // })
    }
}

export const keepLogin = (dtapengguna) => {
    return dispatch => {
        Axios.get(`${API_URL}/pengguna`, {
            params: {
                username: dtapengguna.username
            }
        })
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type: "ON_LOGIN_SUCCESS",
                    payload: res.data[0]
                })
            }else {
                dispatch({
                    type: "ON_LOGIN_FAILED",
                    payload: "username/password salah"
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}