import React from 'react';

const userInput = (props) => {
    const style={
        border: '2px solid red'
    }
    return(
        <div>
            <input type="txt" 
            style={style}
            onChange={props.changed} value={props.username}/>
        </div>
    )
}

export default userInput;