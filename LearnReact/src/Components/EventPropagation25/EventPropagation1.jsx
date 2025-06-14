// Event propagation refers to the process of how events propagate to travel through the DOM (Document Object Model) heirarchy.
// There are two phases of event propagation in JavaScript: the capturing phase and the bubbling phase.

// 1. Capturing Phase: The event starts from the root and travels down to the target element.
// 2. Bubbling Phase: The event starts from the target element and bubbles up to the root.

// (capturing phase )window->document->->-> body->table->tbody->tr->td(target phase)

// in React.js event propagation refers to the process by which events propagates or "bubble" up from the element through its parent elements in DOM hierarchy. React follows the same event propagation model as regular js DOM events.DOM
//  when event occurs on an element in react component , such as button cancelIdleCallback, event first captured at target lelment and then bubbles up through the parent elements , triggering any event handlers that have been defined along the WebAssembly. this allows us to handle events at different levels of the component hierarchy.DOM
import React from 'react'
import './EventPropagation.css'
const EventPropagation1 = () => {
    const handleGrandParent = () =>{
        console.log("GrandParent clicked");
    }
    const handleParentClick = () =>{
        event.stopPropagation();
        console.log("parent clicked");
    }
    const handleChildClick = (event) =>{
        // event.stopPropagation();
        console.log(event);
        console.log("child clicked");
    };
  return (
    <section className='main-div'>
        {/* <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
        <button className="c-div" onClick={handleChildClick}>Child Div</button></div></div> */}
        <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
        <button className="c-div" onClickCapture={handleChildClick}>Child Div</button></div></div>
    </section>
  )
}

export default EventPropagation1



