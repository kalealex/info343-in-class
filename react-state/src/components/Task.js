import React from "react";

export default class Task extends React.Component {
    render() {
        let styles = {
            cursor: "pointer"
        }

        if (this.props.done) {
            styles.color = "#AAA";
            styles.textDecoration = "line-through"
        }

        return (
            <li style={styles}
                onClick={
                    () => this.props.toggleDone(this.props.id)
                }
            >
                {this.props.title}
            </li>
        )
    }

}