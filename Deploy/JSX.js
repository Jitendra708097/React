// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Define a string variable
const name = "jitendra sharma";

// Define an object containing personal information
const obj = {
    age:20,
    salary:0,
    course:"BTech"
}

// Define an object containing styling properties
const obj2 = {
    TextAlign:"center",
    backgroundColor: "antiquewhite",
    BorderRadius: "5px",
    padding: "8px",
    margin: "5px"
}

// JSX element with multiple components
const newelement = (
    // <div>
    //     <h4>This is our first JSX excercise.</h4>
    //     <h2>Mujhe kuch kuch samaj me aa raha hai.</h2>
    // </div>

    // React Fragment (<>...</>) to group multiple elements
    <>
        <h4 id="second" className="excercise">This is our first JSX excercise.</h4>
        <h2 id="third" className="samaj">Mujhe kuch kuch samaj me aa raha hai {name}.</h2>
        <h2>My age is : {obj.age}</h2>
        <h2>My salary is : {obj.salary}</h2>
        <h2>I'm a {obj.course} student.</h2>
        <h4 style={{TextAlign:"center",backgroundColor: "antiquewhite",BorderRadius: "5px",padding: "8px",margin: "5px"}}>It will continue.</h4>
    </>
)

// First functional component
function meet(){
    return <h2>Entry in react component.</h2>
}

// Second functional component
function greet(){
    return <h1>This is second function.</h1>
}

// Store component outputs in variables
const element1 = meet();
const element2 = greet();

// Combine all elements in a Fragment
const element3 = <>{element1} {element2} {newelement}</>

// Create root and render the combined elements
const rdom = ReactDOM.createRoot(document.getElementById('root'));
rdom.render(element3);
