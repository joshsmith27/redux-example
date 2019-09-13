import React, { Component } from 'react'
import {connect} from 'react-redux';

class todo extends Component {

    addTodo = () => {
        this.props.dispatch({type:'ADD_TODO', payload: {id:this.props.todos.length + 1, todo:this.props.todoText},})
    }
    handleChange = (e) => {
        this.props.dispatch({type:'UPDATE_TODO_TEXT', payload: e.target.value,})
    }
    render() {
        console.log(this.props)
        const todos = this.props.todos.map((e)=>{
            return <div key={e.id}>{e.todo}</div>
        })
        return (
            <div>
                <input type="text" name="todoText" value={this.props.todoText} onChange={this.handleChange}/>
                <button onClick={this.addTodo}>Add</button>
                {todos}
                {this.props.count}
            </div>
        )
    }
}

export default connect((storeObject)=>{return storeObject})(todo)