import React from 'react'
import Axios from 'axios'
import { API_URL } from '../../constants/API'

class ProfileScreen extends React.Component{

    state = {
        userList: []
    }

    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/users/4`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // getDataHandler = () => {
        // Axios.get("http://localhost:3001/users/1") // pake "/1" maka ambil yg pertama dlm array
    getDataHandler = () => {
        Axios.get("http://localhost:3001/users",{
            params: {
                role: "user",
                username: "seto"
            } // biar data yg di request berdasarkan parameter/properti arraynya
        })
        .then((res) => {
            console.log(res.data)
            this.setState({userList: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
        console.log("Bukan Axios")
    }

    postDataHandler = () => {
        Axios.post(`${API_URL}/users`,{
         username: "Hayuu",
         password: "123",
         role: "admin",
         fullName: "Hayuumain"
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

    }
    render() {
        return (
            <div className="text-center">
                <h1>Profile</h1>
                <h2>Welcome, {this.props.match.params.username /*biar dapet params dari path pada apps.jsx*/}</h2>
                <input onClick={this.getDataHandler} type="button" value="Get Data" className="btn btn-success"/>
                <input onClick={this.deleteDataHandler} type="button" value="Delete" className="btn btn-danger"/>
                <input onClick={this.postDataHandler} type="button" value="Post" className="btn btn-warning"/>
            </div>
        )
    }
}

export default ProfileScreen;