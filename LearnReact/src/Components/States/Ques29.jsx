// import React from 'react'
// import { useState } from 'react'


// const users = [
//     {name:'nishu',age:19},
//     {name:'suyash',age:22},
//     {name:'mukul',age:22},
//     {name:'ishani',age:19}
// ]

// const Ques29 = () => {
//   return (
//     <div className='main-div'>
//       <h1>Users List</h1>
//       <ul>
//         {
//             users.map((currElem, index)=>{
//                 return (
//                     <li key = {index}>
//                         {currElem.name} - {currElem.age} years old.
//                     </li>
//                 )
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Ques29

import React from 'react'
import { useState } from 'react'


// const users = [
//     {name:'nishu',age:19},
//     {name:'suyash',age:22},
//     {name:'mukul',age:22},
//     {name:'ishani',age:19}
// ]

const Ques29 = () => {
    const [users,setUsers] = useState([
        {name:'nishu',age:19},
        {name:'suyash',age:22},
        {name:'mukul',age:22},
        {name:'ishani',age:19}
    ])
  return (
    <div className='main-div'>
      <h1>Users List</h1>
      <ul>
        {
            users.map((currElem, index)=>{
                return (
                    <li key = {index}>
                        {currElem.name} - {currElem.age} years old.
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Ques29