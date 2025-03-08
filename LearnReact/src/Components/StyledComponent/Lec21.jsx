
// this is styled component which is a react componentusing styled components . it is both a react component and a styled COMPONENTS. As a React component, it can be used in jsx 
// As a styled component, it can be used to style other components.

// Using Template Literals 
// const Button = Styled.Button
// `color:grey;`

// Using Styled objects
// const Button = Styled.button({
//     color:grey;
// });
// This is a styled component which is a react component using styled components. It is both a react component and a styled component. As a React component, it can be used in jsx. As a styled component, it can be used to style other components.


import React from 'react'
import Lec21onwards from './Lec21onwards'

const Lec21 = () => {
  return (
    <div>
        <Lec21onwards
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
        </Lec21onwards>

        <Lec21onwards
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
        </Lec21onwards>  

        <Lec21onwards
         name="Ishani" 
         age={25}
         greeting={
            <div>
                <strong> HII Ishani </strong>
            </div>      
        }
        >
         {/* These elements are children */}
        <p >Hobbies: Listening Music</p>
        <button style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "green",
            color: "white"
        }}>Contact</button>
        </Lec21onwards>  
    </div>
  );
};

export default Lec21;
