import React from 'react'
import { connect } from 'react-redux'
import { todoInputHandler, userInputHandler, TodoList } from '../../redux/actions'

class TodoReduxScreen extends React.Component{
    render() {
        return (
            <div className="text-center m-5 p-5">
                <h1>Todo Screen</h1>
                <h2>{this.props.todo.todoInput}</h2>
                <input type="text" className="form-control" placeholder="Masukkan Todo" onChange={(e) => this.props.todoInputHandler(e.target.value)}/>
                <button onClick={this.props.TodoList}>Tambah</button>
                {/* <input type="text" className="form-control" placeholder="Input Todo Item" onChange={(e) => this.props.todoInputHandler(e.target.value)}/> */}
                {/* <input type="text" className="form-control" placeholder="Input User" onChange={(e) => this.props.userInputHandler(e.target.value)}/> */}
            </div>
        )//jadi this.props karena menggunakan connect,sama hal nya dengan this.prop
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps, { userInputHandler,todoInputHandler,TodoList })(TodoReduxScreen)