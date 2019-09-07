import React from 'react';
import './Person.css'
const person = (props) => {
    return <p className="Person">This is {props.name} and I am {props.age} years old</p>
};

export default person