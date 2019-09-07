import React, {Component} from 'react';
import './App.css';
import Cockpit from './components/Cockpit/Cockpit'


class App extends Component {

  state = {
    persons : [
      {name : "Dhara Singh.", age : 28},
      {name : "Hello World.", age : 0},
      {name: "Test name", age : 10} 
    ]
  }

  HitButtonHandler = (event) => {
    let existingPersons = [...this.state.persons]
    this.setState({
      persons : existingPersons.map((p, index) => {
        let newPerson = {...p}
        if (newPerson.name.toUpperCase() === p.name) {
          newPerson.name = p.name.toLocaleLowerCase()
        } else {
          newPerson.name = p.name.toUpperCase()
        }
        return newPerson
      })
    });
  } 

  render() {
    return (
      <div className="App">
        <Cockpit persons={this.state.persons}/>
        <button className="Button" onClick={this.HitButtonHandler}>Hit It</button>
      </div>
    );
  }
}

export default App;
