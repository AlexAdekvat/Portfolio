import React from 'react';
import './App.css';
import Info from './Component/Info/Info';
// import Skill from './Component/Skill/Skills';
//  import SkillCopy from './Component/Skill/SkillsCopy';
import Communication from './Component/Bot/Bot';
// import Projects from './Component/Sliders/Projects';
//  import Project from './Component/Project/Project';



const App=()=> {
  return (
    <div className="App">
      <Info/>
      {/* <Skill/> */}
      {/* <SkillCopy/> */}
      <Communication/>
      {/* <Project/> */}
      {/* <Projects/> */}
    </div>
  );
}

export default App;
