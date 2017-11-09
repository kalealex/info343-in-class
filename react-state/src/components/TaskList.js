import React from "react";
import Task from './Task';

export default class TaskList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map(task => 
                    <Task 
                        key={task.id}
                        toggleDone={(this.props.toggleDone)} 
                        {...task} 
                    />)
                }
            </ul>
        )
    }
}