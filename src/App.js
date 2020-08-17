import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
import './TodoList.js';

export class App extends React.Component {
    constructor(props) {
        super(props);
        const todos = [{ text: "Learn React", priority: 5, dueDate: new Date() },
        { text: "Learn about APIs", priority: 4, dueDate: new Date(2020, 1, 23) },
        { text: "write TODO App", priority: 3, dueDate: new Date(2020, 1, 30) }];
        this.state = { items: todos, aText: '', aPriority: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList todos={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
          </label>
                    <p />
                    <input
                        name="aText"
                        onChange={this.handleChange}
                        value={this.state.aText}
                    />
                    <input
                        name="aPriority"
                        onChange={this.handleChange}
                        value={this.state.aPriority}
                    />

                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({ [e.target.name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.aText.length || !this.state.aPriority.length) {
            return;
        }
        const newItem = {
            text: this.state.aText,
            dueDate: new Date(Date.now()),
            priority: this.state.aPriority
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            aPriority: '',

            aText: ''
            
        }));

    }
}

export default App;
