import React from 'react'
let a = 0
class InputScreen extends React.Component {
    state = {
        username: "",
        email: "",
        teks:""
    }
    render(){
        const {username,email,teks} = this.state
        const inputHandler = (e,field) => {
            this.setState({[field]: e.target.value}) //untuk mengambil value dari onchange pada box input //[] pake biar jadi key dari parameter, jika tidak pake dikira property object
        }
        return (
            //e pada onchange merupakan saat terjadi perubahan pada input
        <div>
            <h1>Input Screen</h1>
            <h3>Welcome {username}</h3>
            <h3>Email: {email}</h3>
            <input onChange={(e) => inputHandler(e,"username")} type="text" placeholder="Username"/><br/>
            <input onChange={(e) => inputHandler(e,"email")}type="text" placeholder="Email"/><br/>
            <textarea onChange={(e) => inputHandler(e,"teks")} name="" id="" cols="30" rows="10"/><br/>
            <p>{teks.length} / 140</p>
        </div>
        )
    }
}

export default InputScreen