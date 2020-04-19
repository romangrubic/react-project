import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary'


class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }
    state = {
        persons: [
            { id: 'a1', name: 'Max', age: 28 },
            { id: 'b2', name: 'Manu', age: 29 },
            { id: 'c3', name: 'Stephanie', age: 26 },
        ],
        showPersons: false,
        showCockpit: true,
    };

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount(){
        console.log('did mount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('App.js shouldComponentUpdate')
        return true;
    }

    componentDidUpdate(){
        console.log('App.js componentDIdUpdate')
    }

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
        console.log('[App.js] render')
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />
        };

        return (
            <Aux>  
            <button onClick={() => {
                this.setState({showCockpit: false});}}>Remove cockpit</button>
                {this.state.showCockpit ? <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonsHandler} /> : null}             
                { persons }
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
