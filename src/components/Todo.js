import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={ this.props.todo.completed } onChange={ () => this.props.handleClick(this.props.todo.id) } />
                <p>{ this.props.todo.text }</p>
            </div>
        )
    }
}
