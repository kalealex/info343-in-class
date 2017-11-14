import React from "react";
import {Link} from "react-router-dom";
import constants from "./constants";

export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit(evt) {
        evt.preventDefault(); // very important
        console.log(
            "Authenticating user account with credentials: %s, %s",
            this.state.email,
            this.state.password
        );
        this.setState({
            email: "",
            password: ""
        });
    }
    
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={evt => this.handleSubmit(evt)}>
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
                        <button type="submit" className="btn btn-primary">Sign In!</button>
                    </div>
                </form>
                <p>
                    Don't yet have an account? <Link to={constants.routes.signup}>Sign Up!</Link>
                </p>
                <p>
                    <Link to="channel/:jacobChannel">Jacob's Channel</Link>
                </p>
            </div>
        );
    }
}