import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Roman", age: 28},
            { name: "Max", age: 29}
        ],
        otherState: "some other value"
    });

    const [otherState, setOtherState] = useState("some other value");
    console.log(personsState, otherState);
    const switchNameHandler = () => {
        // console.log('dd');
        // dont do this personsState.persons[0].name = "Maximillian";
    setPersonsState({
            persons: [
            { name: "Roman Grubic", age: 28},
            { name: "Maximillian", age: 29}
        ],
        otherState: personsState.otherState
     });
    };

    return (
        <div className="App">
        <h1>Hi, im a React developer!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        </div>
    );
}
export default App;




    
