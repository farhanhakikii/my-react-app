import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { todoInputHandler,userInputHandler } from '../../redux/actions'
import cookie from 'universal-cookie'

const cookieObject = new cookie()
class Navbar extends React.Component{
    deleteCookie = () => {
        cookieObject.remove('authData')
        this.props.userInputHandler('')
    }
    render() {
        return (
            <div className="d-flex justify-content-around align-items-center"
                 style={{ height: "80px"}}>
                {/* <Link to="/">Home</Link>
                <Link to="/auth">Authentication</Link>
                <Link to="/counter">Counter</Link> */}
                <Link to="/">Registration</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
                {this.props.user.username}
                {
                    this.props.user.username ? <button className="btn btn-danger" onClick={this.deleteCookie}>Logout</button> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
        user: state.user
    }
}
export default connect(mapStateToProps,{todoInputHandler,userInputHandler})(Navbar);
