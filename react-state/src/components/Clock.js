import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props); //must call super since this is extending a parent class
    this.state = {date: new Date()}; //can only set the value of a state directly in the constructor
  }

  //lifecycle method for when Clock mounts
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }
  
  //lifecycle method for when we unmount clock
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    //have to update states using this syntax when outside the constructor
    this.setState({
      date: new Date()
    });
  }

  render() {
      return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2> 
      </div>
    );
  }
}