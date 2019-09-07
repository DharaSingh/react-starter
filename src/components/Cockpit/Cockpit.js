import React from 'react'
import './Cockpit.css'
import Persons from '../Person/Persons'

const cockpit = (props) => {
    return <div className="Cockpit">
        <h1>
          React-First-App
        </h1>
          <Persons persons={props.persons} />
    </div>
};

export default cockpit;