import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementFive = () => setCount(count + 5);

  return (
    <div style={styles.container}>
      <h1>Count: {count}</h1>
      <div style={styles.controls}>
        <button onClick={reset} style={styles.button}>Reset</button>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button onClick={decrement} style={styles.button}>Decrement</button>
        <button onClick={incrementFive} style={styles.button}>Increment 5</button>
      </div>
      <h2>Welcome to CHARUSAT!!!</h2>
      <div style={styles.inputContainer}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            style={styles.input}
          />
        </label>
      </div>
      <div style={styles.displayNames}>
        <p>First Name: {firstName}</p>
        <p>Last Name: {surname}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0',
  },
  button: {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    margin: '0 0.5rem',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  input: {
    fontSize: '1rem',
    padding: '0.5rem',
    margin: '0.5rem 0',
    width: '200px',
    display: 'block',
  },
  displayNames: {
    fontSize: '1.2rem',
    textAlign: 'center',
  },
};

export default CounterApp;