import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// //Create Functional Component 
// function HelloComponent(){
//   return <h1>Hello Component React</h1>
// }

// Create Class Component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>Hello Class react</h1>
//   }
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root')); 
//render a cpmponent on ID 'root'


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

