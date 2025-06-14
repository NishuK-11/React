// import React from 'react'

// const Part2 = (props) => {  
//   return (
//     <div>
//       <h1>prop.name: {props.name}</h1>
//       <h1>prop.age: {props.age}</h1>
//     </div>
//   )
// }

// export default Part2

// import React from 'react';

// const Part2 = ({ name, age }) => {
//     return (
//         <div>
//             <h1>name: {name}</h1>
//             <h1>age: {age}</h1>
//         </div>
//     );
// };

// export default Part2;


// import React from 'react';

// const Part2 = (props) => {
//     const {data} = props;//destructuring
//     return (
//         <div>
//             <h1>name: {data.name}</h1>
//             <h1>age: {data.age}</h1>
//         </div>
//     );
// };

// export default Part2;

// import React from 'react';

// const Part2 = ({data})=> {
//     const { name, age } = data;
//     return (
//         <div>
//             <h1>name: {name}</h1>
//             <h1>age: {age}</h1>
//         </div>
//     );
// };

// export default Part2;


//Inline CSS  

// import React from 'react';
// import './Part.css';
// const Part2 = (props) => {
//     const { name, age,greeting} = props;
//     const btn_style = {
//         padding: "10px",
//         margin: "10px",
//         backgroundColor: "green",
//         color: "white"
//     }
//     const bg_color = {
//         backgroundColor: "yellow"
//     }
//     const bg2_color = {
//         backgroundColor: "red"
//     }
//     const getAge = age>20?"super_hit":"average";
//     const getFont = age>20?"nameFont1":"nameFont2";
//     const getColor = age>20?"nameColor1":"nameColor2";
//     return (
//         <div>
//         {/* //in react , curly braces are used to embed Js expression within jsx. */}
//         {/* javascript ki duniya mein ghusne ke liye pehla {} then object jaisa properties likhne ke liye {} so {{}} */}    
//             {/* <h1 style={{margin:"6rem 0"}}>name: {name}</h1> */}
//             {/* <h1 style={{margin:"6rem 0"}}>age: {age}</h1> */}
//             <h1 className={`${getFont} ${getColor}`}>{name}</h1>
//             <h1>
//                 {/* Age:<span className='super_hit' style={age>20?bg_color:bg2_color}>{age}</span> 
//                  */}
//                  {/* Age:<span className={`age timepass ${age>20?"super_hit":"average"}`}>{age}</span> */}
//                  Age:<span className={`timepass ${getAge}`}>{age}</span>
//             </h1>
//             <div style={{margin:"6rem 0"}}>{greeting}</div>   
//              {/* Render the children passed to Part2 */}
//             <div style={{margin:"6rem 0"}}>{props.children}</div>
//             <button style={btn_style}>Contact</button>
//         </div>
//     );
// };

// export default Part2;




import React from 'react';
// Importing the CSS module
import styles from './Part.module.css';

const Part2 = (props) => {
    const { name, age, greeting } = props;
    
    const btn_style = {
        padding: "10px",
        margin: "10px",
        backgroundColor: "green",
        color: "white"
    };

    const bg_color = {
        backgroundColor: "yellow"
    };

    const bg2_color = {
        backgroundColor: "red"
    };

    // Dynamically determining the styles based on age
    const getAge = age > 20 ? styles.super_hit : styles.average;
    const getFont = age > 20 ? styles.nameFont1 : styles.nameFont2;
    const getColor = age > 20 ? styles.nameFontColor1 : styles.nameFontColor2;

    return (
        <div>
            {/* Applying dynamic class names using the CSS module */}
            <h1 className={`${getFont} ${getColor}`}>{name}</h1>
            <h1>
                Age: <span className={`${styles.timepass} ${getAge}`}>{age}</span>
            </h1>
            {/* <div style={{ margin: "6rem 0" }}>{greeting}</div> */}
            {/* Render the children passed to Part2 */}
            <div className={styles["greeting-Font"]}>{greeting}</div>
            <div style={{ margin: "6rem 0" }}>{props.children}</div>
            <button style={btn_style}>Contact</button>
        </div>
    );
};

export default Part2;
