import React from 'react';
import Sidebar from './components/Practical_7';
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <div id="home">
          <h1>Welcome to My Website</h1>
          <p>This is the main content of the webpage.</p>
        </div>
        <div id="about">
          <h1>About</h1>
          <p>This is the about section of the webpage.</p>
        </div>
        <div id="contact">
          <h1>Contact</h1>
          <p>This is the contact section of the webpage.</p>
        </div>
      </div>
    </div>
  );
};
export default App;