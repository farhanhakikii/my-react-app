import React from 'react'
import Axios from 'axios'

class test extends React.Component{
    state = {
        halo = []
    }
    masukarray = () => {
        this.setState({halo: [1,2,3]})
        alert(this.state.halo.length)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}