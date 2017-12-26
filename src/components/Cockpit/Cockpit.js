import React from 'react';
import styles from './Cockpit.css'
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let classes = [];
    let btnClass = styles.Button;

    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      classes.push(styles.red); //classes will be red.
    }
    if (props.persons.length <= 1) {
      classes.push(styles.bold); // red and bold.
    }

    return (
        <Auxiliary>
            <h1>{ props.appTitle }</h1>
            <p className={classes.join(' ')}>This is really working.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons</button>
        </Auxiliary>
    );
};

export default cockpit;