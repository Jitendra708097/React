

const element = React.createElement('h1',{id:"first" ,className:"Jitendra"},"Hii Jitendra sharma");
const element1 = React.createElement('h2',{id:"second" ,className:"Jitendra"},"Keso I Think you are doing well in your life");

const div1 = React.createElement('div',{},[element,element1]);

const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(div1);