import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStatefromProps')
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] should component update')        
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshot before update') 
        return {message: 'Snapshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] component did update')
        console.log(snapshot)
    }

    render() {
        console.log('[Persons.js] renderingg..') 
        return this.props.persons.map((person, index) => {
            return <Person
                click={ () => this.props.clicked(index) }
                name={ person.name }
                age={ person.age }
                key={ person.id }
                changed={ (event) => this.props.changed(event, person.id) } />
        })
    }
};

export default Persons;