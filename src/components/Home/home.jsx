import React from 'react';
import image from "../assestss/gopinath.jpg";
import "./home.css";
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { Github, Linkedin } from "react-bootstrap-icons";

const Home = () => {
  return (
    <Element name="home">
      <section id='home'>
        <div className='homeImage'>
          <img src={image} alt='' className='image' />
        </div>
      
        <div className='home-content'>
          <p className='greet'>Hello, I'm</p>
          <h1 className='name'>GOPINATH</h1>
          <p className='role'>Frontend Developer</p>
          <p className='summary'>
            From Chennai. A passionate <span>web developer</span> skilled in creating interactive web pages using front-end technologies.
          </p>
          <ScrollLink to="about" smooth={true} duration={500} className='about-more'>
            More <span>About Me</span>
          </ScrollLink>
          <div className='home-i'>
            <Link to="https://www.linkedin.com/in/gopinath-chinnadurai/" target="_blank"><Linkedin /></Link>
            <Link to="https://github.com/gopinathmu" target="_blank"><Github /></Link>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Home;

