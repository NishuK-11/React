// import React from 'react'

// const EventHandling1 = () => {
//     // const handleButtonClick = () => {
//     //     alert('Button clicked')  
//     // }
//     const handleButtonClick = (event) => {
//         console.log(event);
//         console.log(event.type);
//         console.log(event.target);
//         alert('Button clicked')  
//     }
//     const ButtonStyle = {
//         backgroundColor: 'blue',
//         color: 'white',
//         padding: '10px 20px',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         fontSize: '1.2rem',
//         border: 'none'
//     }
//     const handleWelcome = (name) => {
//         console.log(`Hello ${name}`);
//         alert(`Welcome ${name}`)
//     }
//   return (
//     <>
//       <button className='mx-4 py-6 my-4' onClick={handleButtonClick} style={ButtonStyle}>Click Me</button>
//       {/* if we use fat arrow function, then call the function isme react synthetic-base-event nhi deta hai so pass event object explicitly*/}
//       <button onClick={(event)=> handleButtonClick(event)} style={ButtonStyle}>Click This</button>
//       <button style={ButtonStyle} onClick={(event)=>console.log(event)}>Inline Function</button>
//       <button style={ButtonStyle} onClick={()=>alert("Hey i am inline event function")}>Inline function run</button>
//       {/* <button style={ButtonStyle} onClick={handleWelcome("nishu")}>Dont click</button> */}
//       <button style={ButtonStyle} onClick={()=>handleWelcome("nishu")}>Click</button>
//     </>
//   )
// }

// export default EventHandling1



// import React from 'react'
// import EventHandling2 from './EventHandling2'
// const EventHandling1 = () => {
//     let name = "Nishu";
//     let age = 21;
//     let summary = "Hello, I am Nishu Kumari. I am a software developer. I have 3 years of experience in web development. I am a full stack developer. I have worked on multiple projects. I have good knowledge of React, Node, Express, MongoDB, etc.";
//   return (
//     <div>
//         <EventHandling2 name={name} age={age} summary={summary} />
//     </div>
//   )
// }

// export default EventHandling1

import React from 'react'

const WelcomeUser = (props) =>{
  const {onClick , onMouseEnter} = props;
  const handleGreeting=()=>{
    console.log(`hey user`);
    props.onClick;
  }
  const btn_style = {
    padding: "10px",
    margin: "10px",
    backgroundColor: "green",
    color: "white"
};

  return(
    <>
      <button style={btn_style} onClick={props.onClick}>Click</button>
      <button style={btn_style} onMouseEnter={props.onMouseEnter}>
        Hover Me
      </button>
      <button style={btn_style} onClick={handleGreeting}>Greeting</button>
    </>
  )
}

export default WelcomeUser