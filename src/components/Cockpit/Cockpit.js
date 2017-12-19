import React from 'react';
import styles from './Cockpit.css'

const cockpit = (props) => {
    let classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.Red;
    }

    if (props.persons.length <= 2) {
      classes.push(styles.red); //classes will be red.
    }
    if (props.persons.length <= 1) {
      classes.push(styles.bold); // red and bold.
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hello, im a react app!</h1>
            <p className={classes.join(' ')}>This is really working.</p>
            <button
            className={btnClass}
            onClick={props.clicked}>
            Toggle Persons</button>
        </div>
    );
};

export default cockpit;