// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function tick(){
  const element = (
    <div>
      {/* <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleDateString()}.</h2>
      <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      <App/>
    </div>
  )
  root.render(element);
} 
setInterval(tick, 1000)
