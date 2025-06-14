// import React from 'react'
// import Practice from './Practice';
// const Greetings = () => {
//     let Name = "nishu";
//   return (
//     <div>
//         <Practice Name={Name} />;
//     </div>
//   )
// }

// export default Greetings



import React from 'react'
const Greetings = (props) => {
  return (
    <div>
            <h2>Name: {props.Name}</h2>
    </div>
  )
}

export default Greetings