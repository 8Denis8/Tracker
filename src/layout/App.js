import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
      todoList: []
    }
  }

    addTodo(){

      const todoList = this.state.todoList;
      todoList.push(this.state.todoInput);

      this.setState({
        todoList,
          todoInput: '',
      });
    }

  render() {
    return (
      <div>

      <input
          type="text"
          value={this.state.todoInput}
          onChange={(e) => this.setState({ todoInput: e.target.value })}
      />
      <button onClick={() => this.addTodo()}>Add</button>

        <ul>

            {this.state.todoList.map(el => <li key={el}>{el}</li>)}

        </ul>

      </div>
    );
  }
}

export default App;
