import React from 'react'

// Variables 
// we can embedd any js variable in jsx by using curly braces
// The values of the variables will be inserted into the DOM at the respective locations
// Example:    const name = "John Doe";
//             return <h1>Hello, {name}</h1>;
            // Output: Hello, John Doe  

// 2: Expression 
// jsx allows us to write js expression inside curly braces. This includes operations, functions calls and other js expressions that produce a value.


// 3: Functions
// We can call functions inside jsx by using curly braces. The function must return a value.    

const Lect8onward = () => {

    const name = "John Doe";
    const rank = 5;
    let age = 20;
    const returnGenre = () => {
        const genre = "Action";
        return genre;
    }
    let canWatch = "Not Available";
    if(age>=18){
        canWatch = "Watch Now";
    }

    const CanWatch=()=>{
        if(age>=18){
            return "Watch Now";
        }
        return "Not Available";
    }
    // if(age>20){
    //     return (
    //         <div>
    //           <h2>Name:{name}</h2>
    //           <h3>Ranking:{rank}</h3>
    //           <h3>Rank:{6+4.4}</h3>
    //           <p>Genre:{returnGenre()}</p>
    //           <button>Not Available</button>
    //         </div>
    //       )   
    // }
    // return (
    //     <div>
    //       <h2>Name:{name}</h2>
    //       <h3>Ranking:{rank}</h3>
    //       <h3>Rank:{6+4.4}</h3>
    //       <p>Genre:{returnGenre()}</p>
    //       <button>Watch Now</button>
    //     </div>
    //   )   

    return (
        <div>
          <h2>Name:{name}</h2>
          <h3>Ranking:{rank}</h3>
          <h3>Rank:{6+4.4}</h3>
          <p>Genre:{returnGenre()}</p>
          <button>{age>=18?"Watch Now":"Not Available"}</button>
          <button>{canWatch}</button>
          <button>{CanWatch}</button>
        </div>
      )   
}

export default Lect8onward
