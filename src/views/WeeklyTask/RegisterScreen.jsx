import React from 'react'
import Axios from 'axios'
import { API_URL } from '../../constants/API'
import swal from 'sweetalert'
import { Spinner } from 'reactstrap'
import { userInputHandler, regHandler } from '../../redux/actions'
import { connect } from 'react-redux'

class RegisterScreen extends React.Component {
    state = {
        username: "",
        password: "",
        role: "",
        fullName: "",
        loading: false
    }
    inputHandler = (e,field) => {
        this.setState({[field]: e.target.value})
    }
    regHandler = () => {
        const {username,password,role,fullName} = this.state
        const datareg = {
            username,password,role,fullName
        }
        this.props.regHandler(datareg)
        this.props.userInputHandler(`${username}`)
        this.refs.fnr.value = ''
        this.refs.unr.value = ''
        this.refs.pwr.value = ''
        this.refs.rlr.value = ''
        //this.props.history.push(`/profile/${username}`)
    }
    // postDataHandler = () => {
    //     let {username} = this.state
    //     let x
    //     this.setState({loading: true})
    //     setTimeout(() => {
    //         Axios.get(`${API_URL}/pengguna?un=${username}`)
    //         .then((res) => {
    //             this.setState({loading: false})
    //             x = res.data.length
    //             this.registerHandler(x)
    //         })
    //         .catch((err) => {console.log(err)})
    //     }, 1500);
    //     }
    // registerHandler = (val) => {
    //     let {username,password,role,fullName} = this.state
    //     if(username == '' || password == '' || role == '' || fullName == ''){
    //         swal("Lengkapi form registrasi")
    //     }else if(val == 0){
    //         Axios.post(`${API_URL}/pengguna`,{
    //          un: username,
    //          pw: password,
    //          rl: role,
    //          fn: fullName
    //         })
    //         .then((res) => {
    //             console.log(res)
    //             swal(`Registrasi Berhasil!`)
    //             //this.props.history.push('/login')
    //             this.setState({username: "", password: "", role: "", fullName: ""})
    //             this.refs.fnr.value = ''
    //             this.refs.unr.value = ''
    //             this.refs.pwr.value = ''
    //             this.refs.rlr.value = ''
    //         })
    //         .catch((err) => {console.log(err)})
    //     }else{
    //         swal("Username sudah terdaftar")
    //     }
    // }
    render(){
        return (
        <div className="text-center d-flex flex-column align-items-center">
            <div className="border rounded border-dark p-2 col-3"> 
                <h3>Register</h3>
                <input onChange={(e) => this.inputHandler(e,"fullName")} className="m-1 rounded" type="text" placeholder="Full Name" ref="fnr"/><br/>
                <input onChange={(e) => this.inputHandler(e,"username")} className="m-1 rounded" type="text" placeholder="Username" ref="unr"/><br/>
                <input onChange={(e) => this.inputHandler(e,"password")} className="m-1 rounded" type="password" placeholder="Password" ref="pwr"/><br/>
                <input onChange={(e) => this.inputHandler(e,"role")} className="m-1 rounded" type="text" placeholder="Role" ref="rlr"/><br/>
                {/* <button onClick={this.postDataHandler} disabled={this.state.loading} className="m-1 rounded btn btn-primary">Register</button> */}
                <button onClick={this.regHandler} className="m-1 rounded btn btn-primary">Register</button>
                {/* {
                    this.state.loading ? 
                    <button onClick={this.postDataHandler} disabled className="m-1 rounded btn btn-primary">Register</button> :
                    <button onClick={this.postDataHandler} className="m-1 rounded btn btn-primary">Register</button>
                } */}
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{userInputHandler,regHandler})(RegisterScreen)