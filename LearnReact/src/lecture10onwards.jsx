import React from 'react'

const lecture10onwards = () => {
    const students = [];
    console.log(Boolean(students.length));
    console.log(students.length===0);
  return (
    <>
      <p>{students.length && "No students found"}</p>
      <p>{students.length===0 && "No students found"}</p>
      <p>{!students.length && "No students found"}</p>
        <p>{Boolean(students.length===0) && "No students found"}</p>
      <p>Number of students :{students.length}</p>
    </>
  )
}

export default lecture10onwards
