import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import firebase from "firebase/app"
import NewTaskForm from "./components/NewTaskForm";

//NewTaskForm
//TaskList
//PurgeButton

class App extends React.Component {
  render() {
    let taskRef = firebase.database().ref("tasks");
    return (
      <div>  
        <div className="jumbotron bg-dark text-white">
          <div className="container">
            <h1 className="display-3">Tasks 343</h1>
          </div>
        </div>
        <section>
          <div className="container">
            {
              <NewTaskForm taskRef={taskRef} />
              // tasks here
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
