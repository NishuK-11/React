// import React, { useState } from 'react'

// const UseState = () => {
//     const [count,setCount]=useState(0)
//   return (
//     <div>
//       <button value={count}>Increment</button>
//     </div>
//   )
// }

// export default UseState
// import React from 'react'

// const UseState = () => {
//   let count=0;
//   const onclick = ()=>{
//       count++;
//       console.log(count);
//   }
//   return (
//     <>
//       <section className='main-div'> 
//         <h1>{count}</h1>
//         <button class="mx-10 py-20"  onClick={onclick} >INCREMENT</button>
//       </section>
//     </>
//   )
// }

// export default UseState
import React from 'react'
import { useState } from 'react'
const UseState = () => {
  // let array = useState();
  // console.log(array);

  const [count,setCount] = useState(5);
  console.log("Parent component rendered");
  const handleButtonClick=()=>{
    setCount(()=> count+1)
  }
  return (
    <>
    <section className='main-div'>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>click to increment</button>
    </section>
    <ChildComponent count = {count} />
    
    </>
  )
}

function ChildComponent({count}){
  console.log("child component rendered");
  return (
  <div className='main-div'>
    <h1>Child component = {count}</h1>
  </div>
  );
}

export default UseState

