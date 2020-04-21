import React from 'react'
import Axios from 'axios'
import { API_URL } from '../../constants/API'
import { connect } from 'react-redux'
import { userInputHandler } from '../../redux/actions'

class LoginScreen extends React.Component {
    state = {
        username: "",
        password: "",
        userlogin: [],
    }
    inputHandler = (e,field) => {
        this.setState({[field]: e.target.value})
    }
    getDataHandler = () => {
        let {username} = this.state
        Axios.get(`${API_URL}/pengguna`, {
            params: {un: username}
        })
        .then((res) => {
            this.setState({ userlogin: [...res.data] }) 
            this.getLogin()
        })
        .catch((err) => {console.log(err)})
    }
    getLogin = () => {
        let {username,password,userlogin} = this.state
        if(username == userlogin[0].un && password == userlogin[0].pw){
            alert("Berhasil Login")
            this.props.history.push(`/profile/${username}`)
            this.props.userInputHandler(`Welcome, ${username}`)
            this.refs.unl.value = ''
            this.refs.pwl.value = ''
        }else{
            alert("Username tidak terdaftar atau password salah")
        }
    }
    render(){
            return (
            <div className="text-center d-flex flex-column align-items-center">
                <div className="border rounded border-dark p-2 col-3">
                    <h3>Login</h3>
                    <input onChange={(e) => this.inputHandler(e,"username")} className="m-1 rounded" type="text" placeholder="Username" ref="unl"/><br/>
                    <input onChange={(e) => this.inputHandler(e,"password")} className="m-1 rounded" type="password" placeholder="Password" ref="pwl"/><br/>
                    <button onClick={this.getDataHandler} className="m-1 rounded btn btn-primary">Login</button>
                </div>
            </div>
            )
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(mapStateToProps,{userInputHandler})(LoginScreen)