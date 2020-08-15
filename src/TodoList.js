import React from 'react';
import ReactDOM from 'react-dom';
import { Todo } from './Todo'

export class TodoList extends React.Component {
    render() {
        const todoos = this.props.todos;
        const listTodo = todoos.map((todo, j) =>

            <li key={j}>
                
                <Todo text={todo.text}
                    priority={todo.priority}
                    dueDate={todo.dueDate} />
            </li>
        );
        return (
            <ul>{listTodo}</ul>
        );        
    }
};


