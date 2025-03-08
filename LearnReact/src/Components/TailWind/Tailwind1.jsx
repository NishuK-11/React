import React from 'react'
import Tailwind2 from './Tailwind2'
const Tailwind1 = () => {
  return (
    <div className="flex flex-col gap-4 px-[1.2rem] py-6 border-amber-600">
        {/* <Part2 data={data} />; */}
        <Tailwind2
         name="Nishu" 
         age={10}
         greeting={
            <div>
                <strong> HII Nishu </strong>
            </div>      
        }
        >
         {/* These elements are children */}
        <p className = "border-amber-600 tracking-wider">Hobbies: Writing</p>
        <button style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "green",
            color: "white"
        }}>Contact</button>
        </Tailwind2>



        <Tailwind2
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
        </Tailwind2>  

        <Tailwind2
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
        </Tailwind2>  
    </div>
  )
}

export default Tailwind1