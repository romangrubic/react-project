import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render(){
    return (
        <Aux>
            <p key='i1' onClick={ this.props.click }>
            Im { this.props.name } and I am { this.props.age } years old!
            </p>
            <p key='i2'>
            { this.props.children }
            </p>
            <input 
            key='i3' 
            type="text" 
            onChange={ this.props.changed } 
            value={ this.props.name } />
        </Aux>
    )
}};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);