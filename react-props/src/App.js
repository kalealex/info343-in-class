import React, { Component } from 'react';
import './App.css';
import Alert from './components/Alert'; // imports from the class, not the js file, per React convention
import Button from './components/Button';
import Card from './components/Card';

class App extends Component {
  handleButtonClick() {
    console.log("button added to the App was clicked");
  }
  dontHandleButtonClick() {
    console.log("I told you not to click that button!");
  }
  
  render() {
    let alerts = [
      {
        id: 1,
        message: "Alert Me",
        type: "primary"
      },
      {
        id: 2,
        message: "Zombie Attack iminent",
        type: "danger"
      },
      {
        id: 3
      }
    ]
    return (
      <div className="container">
        {alerts.map(a => 
          <Alert 
            key={a.id} 
            message={a.message} 
            type={a.type}
          />)
        }
        
        <Card 
          title="My Card"
          imgsrc="husky.jpg"
          imgalt="Cute Husky"
          width={300}
        >
          <p>This is a cute husky!</p>
          <Alert message="Yay dogs!"/>
        </Card>

        <Button caption="Click Me!"
          onClick={() => this.handleButtonClick()}
        />
        <br/>
        <br/>
        <Button caption="Don't Click Me :("
          onClick={() => this.dontHandleButtonClick()}
        />
      </div>
    );
  }
}

export default App;
