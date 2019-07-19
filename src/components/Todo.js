import React, { Component } from 'react'

export default class Todo extends Component {
    completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={ this.props.todo.completed } onChange={ () => this.props.handleClick(this.props.todo.id) } />
                <p 
                    style={ 
                        this.props.todo.completed ? this.completedStyle: null 
                    }>
                    { this.props.todo.title }
                </p>
            </div>
        )
    }
}
