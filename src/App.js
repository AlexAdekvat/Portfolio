import React from 'react';
import './App.css';
import Info from './Component/Top/Info';
import Skill from './Component/Mid/Skills';
import Communication from './Component/Bot/Bot';
import Scroll from './Component/Scroll'



const App=()=> {
  return (
    <div className="App">
      <Info/>
      <Skill/>
      <Communication/>
      <Scroll/>
    </div>
  );
}

export default App;
