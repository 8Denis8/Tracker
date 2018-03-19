import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoInput: '',
            todoList: []
        }
    }

    addTodo() {

        const todoList = this.state.todoList;
        todoList.push(this.state.todoInput);

        this.setState({
            todoList,
            todoInput: '',
            todoInputValid: false,
        });
    }

    inputChange(v) {
        let todoInputValid = v.trim().length >= 3;
        this.setState({
            todoInput: v,
            todoInputValid
        });
    };

    deleteInput(todo) {
        const todoList = this.state.todoList.filter(el => el !== todo);
        this.setState({ todoList }, () => { console.log(this.state); });
    }

    render() {
        return (
            <div className="container pt-4">
                <div className="row">
                    <div className="col border">
                        <ul>
                            {this.state.todoList.map(el => <li key={el}>{el}
                                <span className="btn btn-danger btn-sm"
                                      onClick={() => this.deleteInput(el)}>Delete</span>
                            </li>)}
                        </ul>
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="text"
                                value={this.state.todoInput}
                                onChange={(e) => this.inputChange(e.target.value)}
                            />
                            <div className="input-group-append">
                                <button
                                    disabled={!this.state.todoInputValid}
                                    className="btn btn-outline-primary" onClick={() => this.addTodo()}>Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
