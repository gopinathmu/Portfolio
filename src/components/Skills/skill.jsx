import React from 'react'
import "./skill.css"
import HTML from "../assestss/html1.png";
import css from "../assestss/css1.png";
import js from "../assestss/js1.webp";
import reactLogo from "../assestss/react1.png";
import pythonLogo from "../assestss/python.jpeg";
import bootstrapLogo from "../assestss/bootstrap.jpeg";

const Skill = () => {
  return (
      <div className='about-container'>
        <h2><span>TECHNOLOGIES</span> I KNOW </h2>
        <div className='container'>
		  <div id="carousel">
			   <figure><img src={HTML} alt=""></img></figure>
			   <figure><img src={css} alt=""></img></figure>
			   <figure><img src={js} alt=""></img></figure>
			  <figure><img src={reactLogo} alt=""></img></figure>
			  <figure><img src={bootstrapLogo} alt=""></img></figure>
			 <figure><img src={pythonLogo} alt=""></img></figure>
		  </div>
      </div>
      </div> 
  )
}

export default Skill
