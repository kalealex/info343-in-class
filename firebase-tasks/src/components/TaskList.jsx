import React from "react";
import Task from "Task"

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            tasksSnapshot: undefined
        }
    }

    componentDidMount() {
        this.props.tasksRef.on("value",
            snapshot => this.setState({tasksSnapshot: snapshot})
        );
    }

    componentWillUnmount() {
        this.props.tasksRef.off("value");
    }

    toggleDone() {

    }

    render () {
        if (!this.state.tasksSnapshot) {
            return (
                <div>Loading... please wait</div>
            )
        }
        let tasks = [];
        this.state.tasksSnapshot.array.forEach(task => {
            tasks.push(<Task />)
        });
        return (
            <ul>
                {tasks}
            </ul>
        )
    }
}