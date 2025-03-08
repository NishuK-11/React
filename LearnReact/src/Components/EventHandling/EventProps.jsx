// import React from 'react'

// const EventHandling2 = (props) => {
//     const {name,age,summary}=props;
//   return (
//     <div>
//         <h1>Name:{props.name}</h1>
//         <h1>Age:{props.age}</h1>
//         <h1>Summary:{props.summary}</h1>
//     </div>
//   )
// }

// export default EventHandling2

import React from 'react'
import WelcomeUser from './WelcomeUser';

const EventProps = () => {
  const HandleWelcomeUser = (user) =>{
    alert(`Hey, ${user}`);
  };
  const HandleHover = () =>{
    alert(`Hey, thanks for hovering me`);
  };
  return (
    <>
      <WelcomeUser 
        onClick={()=> HandleWelcomeUser("Nishu")} 
        onMouseEnter={HandleHover}
      />

    </>
  )
}



export default EventProps

