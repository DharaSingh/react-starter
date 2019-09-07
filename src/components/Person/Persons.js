import React from 'react';
import Person from './Person'

const persons = (props) => {
    return props.persons.map(p => {
        return <Person key={p.name} name={p.name} age={p.age} />
    })
};

export default persons;