import React from "react";
import {Link} from "react-router-dom";
import constants from "./constants";

export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastname: "",
            email: "",
            password: ""
        };
    }

    handleSubmit(evt) {
        evt.preventDefault(); // very important
        console.log(
            "Creating user account with credentials: %s, %s, %s, %s",
            this.state.firstName,
            this.state.lastname,
            this.state.email,
            this.state.password
        );
        this.setState({
            firstName: "",
            lastname: "",
            email: "",
            password: ""
        });
    }
    
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            id="firstName"
                            type="text" 
                            placeholder="enter your first name" 
                            value={this.state.firstName} 
                            onInput={evt => this.setState({firstName: evt.target.value})}
                            className="form-control"
                        />
                    </div>    
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            id="lastName"
                            type="text" 
                            placeholder="enter your last name" 
                            value={this.state.lastName} 
                            onInput={evt => this.setState({lastName: evt.target.value})}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="enter your email" 
                            value={this.state.email} 
                            onInput={evt => this.setState({email: evt.target.value})}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password"
                            type="text" 
                            placeholder="enter your password" 
                            value={this.state.password} 
                            onInput={evt => this.setState({password: evt.target.value})}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Sign Up!</button>
                    </div>
                </form>
                <p>
                    Already have an account? <Link to={constants.routes.signin}>Sign In!</Link>
                </p>
            </div>
        );
    }
}