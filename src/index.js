import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp from './MyApp';
import ParentC from './ParentC';
import FullFormFunction from './FullFormFunction';
import MyParent1 from './MyParent1';
import ShowMoreTextToggle from './ShowMoreTextToggle';
import TODOEXp2 from './TODOEXp2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
    <TODOEXp2 />
    {/* <ShowMoreTextToggle  text="This is the javascript This is the javascript This is the javascript THis is the javascript This is the javascript THi s is the react"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
