import React, {Component} from 'react';
import './components/Person/Persons.css'
import './App.css';
import Persons from './components/Person/Persons'


class App extends Component {

  state = {
    persons : [
      {name : "Dhara Singh.", age : 28},
      {name : "Hello World.", age : 100}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>
          React first commit 
        </h1>
        <div className="Persons">
          <Persons persons={this.state.persons} />
        </div>
        
      </div>
    );
  }
}

export default App;
