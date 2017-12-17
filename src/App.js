import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, im a react app!</h1>
        <p>This is really working.</p>
        <Person name='Rob' age='27'/>
        <Person  name='Brett' age='26'>I'm an artist!</Person>
        <Person  name='Max' age='28'/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this text'));
  }
}

export default App;
