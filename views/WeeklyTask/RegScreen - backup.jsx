import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../constants/API'

class RegScreen extends React.Component {
    state = {
        username: "",
        password: "",
        role: "",
        fullName: "",
        listUserName: []
    }
    inputHandler = (e,field) => {
        this.setState({[field]: e.target.value})
    }
    postDataHandler = () => {
        let {username,password,role,fullName,listUserName} = this.state
        let x = 0
        for(let i = 0; i < listUserName.length; i++){
            if(username == listUserName[i]){
                x++
            }
        }
        if(x >= 1){
            alert("Username sudah terdaftar")
        }else if(username == '' || password == '' || role == '' || fullName == ''){
            alert("Lengkapi form registrasi")
        }else{
            Axios.post(`${API_URL}/pengguna`,{
             un: username,
             pw: password,
             rl: role,
             fn: fullName
            })
            .then((res) => {
                console.log(res)
                alert(`Registrasi Berhasil!`) //${API_URL/pengguna/1}
                this.setState({username: "", password: "", role: "", fullName: "", listUserName: [...listUserName,username]})
                this.refs.fnr.value = ''
                this.refs.unr.value = ''
                this.refs.pwr.value = ''
                this.refs.rlr.value = ''
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
    render(){
        return (
        <div className="text-center d-flex flex-column align-items-center">
            <div className="border rounded border-dark p-2 col-3"> 
                <h3>Register</h3>
                <input onChange={(e) => this.inputHandler(e,"fullName")} className="m-1 rounded" type="text" placeholder="Full Name" ref="fnr"/><br/>
                <input onChange={(e) => this.inputHandler(e,"username")} className="m-1 rounded" type="text" placeholder="Username" ref="unr"/><br/>
                <input onChange={(e) => this.inputHandler(e,"password")} className="m-1 rounded" type="password" placeholder="Password" ref="pwr"/><br/>
                <input onChange={(e) => this.inputHandler(e,"role")} className="m-1 rounded" type="text" placeholder="Role" ref="rlr"/><br/>
                <button onClick={this.postDataHandler} className="m-1 rounded btn btn-primary">Register</button>
            </div>
        </div>
        )
    }
}

export default RegScreen
