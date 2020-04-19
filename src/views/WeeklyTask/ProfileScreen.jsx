import React from 'react'
import Axios from 'axios'
import { API_URL } from '../../constants/API'

class ProfileScreen extends React.Component{
    state = {
        userprofile: this.props.match.params.username,
        datausers: [],
        namalengkap: "",
        role: ""
    }
    componentWillMount(){
        this.getDataHandler()
    }
    getDataHandler = () => {
        const {userprofile} = this.state
        Axios.get(`${API_URL}/pengguna?un=${userprofile}`)
        .then((res) => {
            let datas = [...res.data]
            this.setState({namalengkap: datas[0].fn, role: datas[0].rl})  
        })
        .catch((err) => {console.log(err)})
    }
    render(){
        return(
            <div className="text-center">
                <h1>Hello, {this.state.userprofile}</h1><br/><br/><br/>
                <h2>Profile</h2><br/>
                <p>Nama Lengkap: {this.state.namalengkap}</p>
                <p>Role: {this.state.role}</p>
            </div>
        )
    }
}

export default ProfileScreen