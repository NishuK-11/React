// import React from 'react'
// import Part2 from './Part2';
// const Part1 = () => {
//     let name= "nishu";
//     let age= 21;
//     const data={name,age};
//   return (
//     <div>
//         <Part2 data={data} />;
//     </div>
//   )
// }

// export default Part1


import React from 'react'
import Part2 from './Part2';
const Part1 = () => {
  return (
    <div>
        {/* <Part2 data={data} />; */}
        <Part2
         name="Nishu" 
         age={10}
         greeting={
            <div>
                <strong> HII Nishu </strong>
            </div>      
        }
        >
         {/* These elements are children */}
        <p>Hobbies: Writing</p>
        <button style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "green",
            color: "white"
        }}>Contact</button>
        </Part2>



        <Part2
         name="Anshu" 
         age={20}
         greeting={
            <div>
                <strong> HII Anshu </strong>
            </div>      
        }
        >
         {/* These elements are children */}
        <p>Hobbies: Singing song</p>
        <button style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "green",
            color: "white"
        }}>Contact</button>
        </Part2>  

        <Part2
         name="Ishani" 
         age={25}
         greeting={
            <div>
                <strong> HII Ishani </strong>
            </div>      
        }
        >
         {/* These elements are children */}
        <p>Hobbies: Listening Music</p>
        <button style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "green",
            color: "white"
        }}>Contact</button>
        </Part2>  
    </div>
  )
}

export default Part1