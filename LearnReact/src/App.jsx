// import React from "react";
// export const App = () => {
//   return React.createElement("h1", null, "Hello World");
// };

// import React from "react";

// const KuchhToBtao = () => {
//   return <h2>Hello World</h2>; // Now it returns JSX
// };

// const App = () => {
//   return (
//     <div>
//       <KuchhToBtao />
//       <KuchhToBtao />
//       <KuchhToBtao /> {/* Works as a component */}
//     </div>
//   );
// };

// export default App;


import React from 'react'
import { Fragment } from 'react';
import Lecture12Onwards from './Components/Lecture12Onwards';
import Practice from './Components/Practice';
import Greetings from './Components/Greetings';
import PropTypes from './Components/PropTypeValidation/PropTypes';
import DefaultProps from './Components/DefaultProp/DefaultProps';
import Data from './Components/ObjectAsProp/Data';
import ItemList from './Components/ArrayAsProp/ItemList';
import Part1 from './Components/Destructuring/Part1';


// const KuchhToBtao = () => {
//   return <h2>Hello World</h2>; // Now it returns JSX
// };
// const App = () => {
//   return ([<KuchhToBtao key="1" />, <KuchhToBtao key="2" />]
//   );
//   // return [<KuchhToBtao key="1" />, <KuchhToBtao key="2" />];
// };

// export default App



// const App = () => {
//   return (
//     <React.Fragment>
//       <KuchhToBtao />
//       <KuchhToBtao />
//       <KuchhToBtao /> {/* Works as a component */}
//     </React.Fragment>
//   );
// }
// export default App


// const App = () => {
//   return (
//     <Fragment>
//       <KuchhToBtao />
//       <KuchhToBtao />
//       <KuchhToBtao /> {/* Works as a component */}
//     </Fragment>
//   );
// }
// export default App

// const App = () => {
//   return (
//     <>
//        <Lecture12Onwards />
//     </>
//   );
// }

// export default App;

// const App = () => {
//   return (
//     <div>
//       <Greetings Name="swasti" />
//       <Greetings Name="shivam" />
//     </div>
//   );
// };

// export default App;



const App = () => {
  return (
    <div>
      {/* <PropTypes /> */}
      {/* <DefaultProps /> */}
     {/* <Data /> */}
     {/* <ItemList /> */}
     <Part1 />
    </div>
  );
};

export default App;
