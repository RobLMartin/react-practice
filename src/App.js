import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Rob', age: 27 },
      { name: 'Brett', age: 26 }
    ], 
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked.');
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Jake', age: 28 },
        { name: 'Brett', age: 26 }
      ]
     });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, im a react app!</h1>
        <p>This is really working.</p>
        <button onClick={() => this.switchNameHandler('Arren')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Leonhardt')}>I'm an artist!</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this text'));
  }
}

export default App;
