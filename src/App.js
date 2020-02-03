import React from 'react';
import './App.css';
import Info from './Component/Top/Info';
import Skill from './Component/Mid/Skills';
import Communication from './Component/Bot/Bot';

const App=()=> {
  return (
    <div className="App">
      <Info/>
      <Skill/>
      <Communication/>
    </div>
  );
}

export default App;
