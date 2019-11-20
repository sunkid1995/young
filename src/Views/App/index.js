import React, { useState } from 'react';
import './App.css';

const INIT_STATE = {
  name: 'Hello world',
  age: 25,
  city: 'Ha Noi',
};

function App() {
  const [ state, setState ] = useState(INIT_STATE);

  // function inputChange(key, e) {
  //   return setState({ [key]: e.target.value });
  // }

  return (
    <div className="App">
      <p><span>{'Name:'}</span>{state.name}</p>
    </div>
  );
}

export default App;
