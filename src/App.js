import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { name: "Roman", age: 28},
            { name: "Max", age: 29}
        ],
        otherState: "some other value"
    }

    switchNameHandler = () => {
        // console.log('dd');
        // dont do this this.state.persons[0].name = "Maximillian";
        this.setState({
            persons: [
            { name: "Roman Grubic", age: 28},
            { name: "Maximillian", age: 29}
        ] })
    }

    render() {
        return (
            <div className="App">
            <h1>Hi, im a React developer!</h1>
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            </div>
        );
    }
}
export default App;
