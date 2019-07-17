import React, {Component} from 'react';
import Todo from './components/Todo';
import todosData from './data/todosData';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: todosData
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState((preState) => {
      const updatedState = preState.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      });
      
      return updatedState;
    })
  }

  render() {
    return (
      <div className="todo-list">
        { this.state.todos.map(todo => <Todo key={ todo.id } todo={ todo } handleClick={ this.handleClick } />) }
      </div>
    );
  }
}

export default App;
