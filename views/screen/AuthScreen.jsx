import React from 'react'
import { Link } from 'react-router-dom'
let a = 0
class user{
    constructor(usname,pass){
        this.usname = usname;
        this.pass = pass;
    }
}
let isLoggedIn
let userlogin
let isRegSuccess
let i
class AuthScreen extends React.Component {
    state = {
        dataUser: [],
        username: "",
        password: "",
        passconfirm:""
    }
    render(){
        const {username,password,passconfirm,dataUser} = this.state
        const inputHandler = (e,field) => {
            this.setState({[field]: e.target.value})
        }
        const renderData = () => {
            return dataUser.map((val,idx) =>{
                return(
                    <tr>
                        <td>{idx+1}</td>
                        <td>{val.username}</td>
                        <td><Link to={`/profile/${val.username}`}><button className="btn btn-danger">Open</button></Link></td>
                    </tr>
                )
            })
        }
        const hapus = (idx) => {
            let temp = [...dataUser]
            temp.splice(idx,1)
            this.setState({ dataUser: temp })
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
                let newData = {username,password}
                isRegSuccess = true
                this.setState({dataUser: [...dataUser,newData], username: "", password: "", passconfirm: ""})
                this.refs.unr.value = ''
                this.refs.pwr.value = ''
                this.refs.rpwr.value = ''
            }
        }
        const login = () => {
            let b = 0
            for(let i = 0; i < dataUser.length; i++){
                if(username == dataUser[i].username && password == dataUser[i].password){
                    b++
                }
            }
            if(username == '' || password == ''){
                alert("Masukkan Username / Password")
            }else if(b == 1){
                alert(`Selamat Datang ${username}`)
                isLoggedIn = true
                userlogin = username
                this.setState({username: '',password: ''})
                this.refs.unl.value = ''
                this.refs.pwl.value = ''
            }else{
                alert("Password salah atau anda belum registrasi.")
            }
        }
        return (
        <div className="text-center d-flex flex-column align-items-center">
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
        {isLoggedIn ? <h2>Welcome {userlogin}</h2> : null}
            <div>
                <tr className="table ml-3 mr-3">
                    <th scope="col">No</th>
                    <th scope="col">Username</th>
                    <th scope="col">Action</th>
                </tr>
                {isRegSuccess ? renderData() : null
                }
            </div>
        </div>
        )
    }
}

export default AuthScreen