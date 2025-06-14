import SeriesData from "../api/SeriesData.json";
import React from "react";
import Props13 from "./Props13";

// const Lecture12Onwards = () => {
//   return (
//     <div>
//         {SeriesData.errors.map((error,code) => {
//             return(
//                 <div key={code}>
//                     <h2>Source: {error.source}</h2>
//                     <h3>Code: {error.code}</h3>
//                     <h4>Title: {error.title}</h4>
//                     <p>Detail: {error.detail}</p>
//                 </div>
//             )
//         }
//         )}
//     </div>
//   );
// };

// const Lecture12Onwards = () => {
//     const numbers = [1, 2, 3, 4, 5];
//   return (
//     <div>
//       {SeriesData.errors.map((curElem) => {
//           {/* return <Props13 key = {currElem.code} error={currElem} /> */}
//           return <Props13 key={curElem.code} curElem={curElem} />;
//       })}
//     </div>
//   );
// };

// export default Lecture12Onwards;

const Lecture12Onwards = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default Lecture12Onwards;

