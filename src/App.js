import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
    state = {
        persons: [
            { id: 'a1', name: 'Max', age: 28 },
            { id: 'b2', name: 'Manu', age: 29 },
            { id: 'c3', name: 'Stephanie', age: 26 },
        ],
        otherState: 'some other value',
        showPersons: false,
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };


        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {

        let btnClass = [classes.Button];
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    { this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={ person.id }>
                            <Person
                            click={ () => this.deletePersonHandler(index) }
                            name={ person.name }
                            age={ person.age }
                            changed={ (event) => this.nameChangedHandler(event, person.id) } />
                            </ErrorBoundary>
                    }) }
                </div>
            );
            btnClass.push(classes.Red);
        }
        // Dinamicly assigning classes 
        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red); // classes= ['red']
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold); // classes= ['red', 'bold']
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={ assignedClasses.join(' ') }>This is really working!</p>
                <button 
                    className={btnClass.join(' ')}
                    onClick={ this.togglePersonsHandler }>Toggle persons
                </button>
                { persons }
            </div>
        );
    }
}

export default App;
