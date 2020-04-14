import React from 'react'
let a = 0
class user{
    constructor(usname,pass){
        this.usname = usname;
        this.pass = pass;
    }
}
let dataUser = [];
class AuthScreen extends React.Component {
    state = {
        username: "",
        password: "",
        passconfirm:""
    }
    render(){
        const {username,password,passconfirm} = this.state
        const inputHandler = (e,field) => {
            this.setState({[field]: e.target.value})
        }
        const regis = () => {
            let b = 0
            for(let i = 0; i < dataUser.length; i++){
                if(username == dataUser[i].usname){
                    b++
                }
            }
            if(b == 1){
                alert("Username sudah terdaftar")
            }else if(username == '' || password == '' || passconfirm == ''){
                alert("Lengkapi Form Registrasi")
            }else if(password !== passconfirm){
                alert("Password dan Konfirmasi Tidak Sama")
            }else{
                alert("Registrasi Berhasil")
                dataUser.push(new user(username,password))
                this.setState({username: "", password: "", passconfirm: ""})
                this.refs.unr.value = ''
                this.refs.pwr.value = ''
                this.refs.rpwr.value = ''
            }
        }
        const login = () => {
            let b = 0
            for(let i = 0; i < dataUser.length; i++){
                if(username == dataUser[i].usname && password == dataUser[i].pass){
                    b++
                }
            }
            if(username == '' || password == ''){
                alert("Masukkan Username / Password")
            }else if(b == 1){
                alert(`Selamat Datang ${username}`)
                this.setState({username: '',password: ''})
                this.refs.unl.value = ''
                this.refs.pwl.value = ''
            }else{
                alert("Password salah atau anda belum registrasi.")
            }
        }
        return (
        <div className="d-flex flex-column align-items-center">
            <h1>Auth Screen</h1>
            <div className="border rounded border-dark p-2 col-3"> 
                <h3>Register</h3>
                <input onChange={(e) => inputHandler(e,"username")} className="m-1 rounded" type="text" placeholder="Username" ref="unr"/><br/>
                <input onChange={(e) => inputHandler(e,"password")} className="m-1 rounded" type="password" placeholder="Password" ref="pwr"/><br/>
                <input onChange={(e) => inputHandler(e,"passconfirm")} className="m-1 rounded" type="password" placeholder="Repeat Password" ref="rpwr"/><br/>
                <button onClick={regis} className="m-1 rounded btn btn-primary">Register</button>
            </div>
            <br/>
            <div className="border rounded border-dark p-2 col-3">
                <h3>Login</h3>
                <input onChange={(e) => inputHandler(e,"username")} className="m-1 rounded" type="text" placeholder="Username" ref="unl"/><br/>
                <input onChange={(e) => inputHandler(e,"password")} className="m-1 rounded" type="password" placeholder="Password" ref="pwl"/><br/>
                <button onClick={login} className="m-1 rounded btn btn-primary">Login</button>
            </div>
        </div>
        )
    }
}

export default AuthScreen