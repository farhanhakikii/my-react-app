import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { todoInputHandler } from '../../redux/actions'

class Navbar extends React.Component{
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
export default connect(mapStateToProps,{todoInputHandler})(Navbar);
