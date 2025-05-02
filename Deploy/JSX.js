
import React from "react";
import ReactDOM from "react-dom/client";



const name = "jitendra sharma";

const obj = {
    age:20,
    salary:0,
    course:"BTech"
}

const obj2 = {
    TextAlign:"center",
    backgroundColor: "antiquewhite",
    BorderRadius: "5px",
    padding: "8px",
    margin: "5px"
}

const newelement = (
    // <div>
    //     <h4>This is our first JSX excercise.</h4>
    //     <h2>Mujhe kuch kuch samaj me aa raha hai.</h2>
    // </div>

    <>
        <h4 id="second" className="excercise">This is our first JSX excercise.</h4>
        <h2 id="third" className="samaj">Mujhe kuch kuch samaj me aa raha hai {name}.</h2>
        <h2>My age is : {obj.age}</h2>
        <h2>My salary is : {obj.salary}</h2>
        <h2>I'm a {obj.course} student.</h2>
        <h4 style={{TextAlign:"center",backgroundColor: "antiquewhite",BorderRadius: "5px",padding: "8px",margin: "5px"}}>It will continue.</h4>
    </>
)

function meet(){
    return <h2>Entry in react component.</h2>
}


function greet(){
    return <h1>This is second function.</h1>
}

const element1 = meet();
const element2 = greet();

const element3 = <>{element1} {element2} {newelement}</>

const rdom = ReactDOM.createRoot(document.getElementById('root'));
rdom.render(element3);
