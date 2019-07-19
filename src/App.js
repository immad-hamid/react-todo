import React, {Component} from 'react';
import Todo from './components/Todo';
import './App.css';
// import todosData from './data/todosData';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: []
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

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
  }
  

  render() {
    return (
      <div className="todo-list">
        <h1>Todos</h1>
        <hr/>
        { this.state.todos.length ?
            this.state.todos.map(todo => <Todo key={ todo.id } todo={ todo } handleClick={ this.handleClick } />):
            <p>Loading...</p> }
      </div>
    );
  }
}

export default App;
