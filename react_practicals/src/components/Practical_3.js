import React, { useState, useEffect } from 'react';

const WelcomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome to CHARUSAT!</h1>
      <h2>It is {currentTime.toLocaleDateString()} </h2>
      <h2>It is {currentTime.toLocaleTimeString()} </h2>
    </div>
  );
};

export default WelcomePage;