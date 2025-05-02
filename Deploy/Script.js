import React from "react";
import ReactDOM from "react-dom/client";


const element1 = React.createElement('p',{},"In this deployement we wiill ready our for deploy");
const element2 = React.createElement('h3',{},"We use technology first we make production ready code.");


const newElement = <h1>Introduction to JSX</h1>

const div1 = React.createElement('div',{},[element1,element2,newElement]);


const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(div1);