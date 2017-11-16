import React, {Component} from "react";

export default class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskTitle: ""
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.taskRef.push({
            title: this.state.newTaskTitle
        });
        this.setState({newTaskTitle: ""})
    }

    render() {
        return (
            <form onSubmit={evt => this.handleSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.newTaskTitle} 
                    placeholder="what do you need to do?"
                    onInput={evt => this.setState(
                        {newTaskTitle: evt.target.value}
                    )}
                />
            </form>
        );
    }
}