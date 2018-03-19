import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoInput: '',
            todoList: []
        }
    }

    uniqId() {
        return([1e7] + -1e3 + -4e3 + -8e3 + -1e11).
        replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
    }

    addTodo() {
        const todoList = this.state.todoList;
        todoList.push({
            id: this.uniqId(),
            name: this.state.todoInput,
        });

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

    deleteInput(id) {
        const todoList = this.state.todoList.filter(el => el.id !== id);
        this.setState({ todoList });
    }

    render() {
        return (
            <div className="container pt-4">
                <div className="row">
                    <div className="col border">
                        <ul>
                            {this.state.todoList.map(el => <li key={el.id}>{el.name}
                                <span className="btn btn-danger btn-sm"
                                      onClick={() => this.deleteInput(el.id)}>Delete</span>
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
