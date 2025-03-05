
import React from 'react'
import Person from './Person'
const Data = () => {
    const person = {
        firstName: 'Nishu',
        lastName: 'Kumari',
        age: 20
    };
  return (
    <div>
      <Person person={person} />
    </div>
  )
}

export default Data;
