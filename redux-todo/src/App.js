import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="jumbotron bg-dark">
          <h1 className="display-3 text-white">Redux Todo</h1>
        </header>
        <section>
          <form className="pb-3">
            <input type="text" className="form-control" placeholder="What do you want to do?"/>
          </form>
          <ul className="list-group">
            <li className="list-group-item">To Do Item 1</li>
            <li className="list-group-item">To Do Item 2</li>
            <li className="list-group-item">To Do Item 3</li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#all">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#active">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#all">Completed</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
