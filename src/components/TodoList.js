import React from 'react';
import {Todo} from "./Todo";

export class TodoList extends React.Component {
    constructor(props){
        super(props);
    }



    render(){
        const todoList = this.props.todoList;
        const list = todoList.map((todo,i)=>
        <Todo key={i}
            text={todo.text}
            priority={todo.priority}
            dueDate={todo.dueDate}/>
             
              
        );

        return(
            <table>
                <thead>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </thead>
                <tbody>   
                    {list}
                    <tr>
                        <button>
                            Add task
                        </button>
                    </tr>
                </tbody>
            </table>
            

        );
    }
}