import React from "react";

export default class Button extends React.Component {
    render () {
        return (
            <button
                className="bnt btn-primary"
                onClick={() => this.props.onClick()} // similar to adding an event listener
            >{this.props.caption}</button>
        );
    }
}