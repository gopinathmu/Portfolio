import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Project from './components/project/project';
import Skill from './components/Skills/skill';
import Contact from './components/contact/contact ';

const App = () => {
  return (
    <div className='appContent'>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact/>
    </div>
  );
};

export default App;
