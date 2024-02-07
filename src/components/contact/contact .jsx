import React from 'react';
import "./contact.css";
import { Element } from 'react-scroll';
import { Github, Instagram, Linkedin } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Element name="contact">
      <div className='contact'>
        <h1>Contact Me</h1>
        <div className='i'>
          <a href='https://www.linkedin.com/in/gopinath-chinnadurai/' target='_blank'>
            <i><Linkedin /></i>
          </a>
          <a href='https://www.instagram.com/_gopinath_/' target='_blank'>
            <i><Instagram /></i>
          </a>
          <a href='https://github.com/gopinathmu' target='_blank'>
            <i><Github /></i>
          </a>
          <a href="mailto:gopinjr8@gmail.com" target='_blank'>
            <i><FontAwesomeIcon icon={faEnvelope} /></i>
          </a>
        </div>
        <p className="cp">Copyright ©2024 All rights reserved</p>
      </div>
    </Element>
  );
}

export default Contact;
