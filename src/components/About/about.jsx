import React from 'react';
import "./about.css";
import { Element } from 'react-scroll';
import image from "../assestss/gopinathchinnadurai.jpg";
import pdfFile from "../assestss/gopinathresume.pdf";


const About = () => {
  return (
    <Element name='about'>
      <section id='about'>
        <div>
          <img src={image} alt='' className='about-image' />
        </div>

        <div className='about-content'>
          <h1 className='title'>ABOUT <span>ME</span></h1>
          <p className='para'>Hello there! I'm Gopinath, a passionate and ambitious <span>frontend developer</span> with 
            expertise in <span>HTML</span>, <span>CSS</span>, and <span>Javascript</span>, ready to bring creative and 
            interactive designs to life. Proficient in <span>React</span> for building dynamic user interfaces and passionate 
            about leveraging <span>Python</span> for enhanced backend functionalities. Well-versed in Bootstrap for responsive 
            design, I am a skilled and eager fresher excited to contribute to innovative web development projects.</p>
          <a href={pdfFile} download target='_blank' className='more'>
            <button><span>Download CV</span></button>
          </a>
        </div>
      </section>
    </Element>
  );
};

export default About;
