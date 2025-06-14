
import React from 'react'

const Person = ({person}) => {
  return (
    <div>
      <h2>{person.firstName} {person.lastName}</h2>
      <p>Age: {person.age}</p>
    </div>
  )
}

export default Person
