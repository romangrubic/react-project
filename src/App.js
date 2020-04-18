import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        persons: [
            { id: 'a1', name: 'Max', age: 28 },
            { id: 'b2', name: 'Manu', age: 29 },
            { id: 'c3', name: 'Stephanie', age: 26 },
        ],
        otherState: 'some other value',
        showPersons: false,
        userInput: '',
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

    inputChangedHandler = (event) => {
        this.setState({ userInput: event.target.value })
    }
    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('')
        this.setState({userInput: updatedText});
    }
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '16px'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    { this.state.persons.map((person, index) => {
                        return <Person
                            click={ () => this.deletePersonHandler(index) }
                            name={ person.name }
                            age={ person.age }
                            key={ person.id }
                            changed={ (event) => this.nameChangedHandler(event, person.id) } />
                    }) }
                </div>
            )
        }

        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char 
            character={ch} 
            key={index}
            clicked={() => this.deleteCharHandler(index)} />;
        });

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <input type="text"
                    onChange={ this.inputChangedHandler }
                    value={ this.state.userInput } />
                <p>{ this.state.userInput }</p>
                <Validation inputLength={this.state.userInput.length}/>
                { charList }
                <button
                    style={ style }
                    onClick={ this.togglePersonsHandler }>Toggle persons</button>
                { persons }
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
