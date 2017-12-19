import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 28 },
      { id: 'fgh', name: 'Rob', age: 27 },
      { id: 'ghj', name: 'Brett', age: 26 }
    ], 
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}> 
              <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ ErrorBoundary>
          })}
        </div>
      );

      btnClass = styles.Red;
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red); //classes will be red.
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold); // red and bold.
    }

    return (
      <div className={styles.App}>
        <h1>Hello, im a react app!</h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this text'));
  }
}

export default App;
