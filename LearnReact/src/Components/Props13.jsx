
// React props faciliatate data transfer from parent to child components.React

// Data flow unidirectionally ensuring a clear direction of information in react appplications.Dataprops are immutable, meaning chils components cannot modify the data  received from PerformanceObserverEntryList.apply
// child components access props through their function parameters.

// you can also pass JSX as props to another component.

import React from 'react'
import SeriesData from "../api/SeriesData.json";
// const Props13 = ({error}) => {
//     return(
//         <div key={error.code}>
//             <h2>Source: {error.source}</h2>
//             <h3>Code: {error.code}</h3>
//             <h4>Title: {error.title}</h4>
//             <p>Detail: {error.detail}</p>
//         </div>
//     )
// }

const Props13 = (props) => {
    return(
        <div >
            <h2>Source: {props.curElem.source}</h2>
            <h3>Code: {props.curElem.code}</h3>
            <h4>Title: {props.curElem.title}</h4>
            <p>Detail: {props.curElem.detail}</p>
        </div>
    )
}


export default Props13;

