import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStatefromProps')
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] should component update');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshot before update') 
        return {message: 'Snapshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] component did update')
        console.log(snapshot)
    }

    componentWillUnmount(){
        console.log('component will unmount!')
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