import React from 'react'
import Axios from 'axios'
import { API_URL } from '../../constants/API'
import { connect } from 'react-redux'
import { userInputHandler } from '../../redux/actions'
import { loginHandler } from '../../redux/actions'
import Cookie from 'universal-cookie'

const cookieObject = new Cookie()
class LoginScreen extends React.Component {
    state = {
        username: "",
        password: "",
        userlogin: [],
    }
    inputHandler = (e,field) => {
        this.setState({[field]: e.target.value})
    }
    loginHandler = () => {
        const {username,password} = this.state
        const datalogin = {
            username,
            password
        }
        this.props.loginHandler(datalogin)
        this.props.userInputHandler(`${username}`)
    }

    componentDidUpdate(){
        if(this.props.user.username){
            cookieObject.set("authData", JSON.stringify(this.props.user))
        }
    }

    render(){
            if(!this.props.user.username){
                return (
                <div className="text-center d-flex flex-column align-items-center">
                    <div className="border rounded border-dark p-2 col-3">
                        <h3>Login</h3>
                        <input onChange={(e) => this.inputHandler(e,"username")} className="m-1 rounded" type="text" placeholder="Username" ref="unl"/><br/>
                        <input onChange={(e) => this.inputHandler(e,"password")} className="m-1 rounded" type="password" placeholder="Password" ref="pwl"/><br/>
                        <button onClick={this.loginHandler} className="m-1 rounded btn btn-primary">Login</button>
                    </div>
                </div>
                )
            }else{
                return(
                    <p>...</p>
                )
            }
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps,{userInputHandler,loginHandler})(LoginScreen)