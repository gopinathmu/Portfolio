import React from 'react';
import "./project.css";
import { Element } from 'react-scroll';
import calculator from "../assestss/calculator.png";
import cashew from "../assestss/cashew.png";
import weather from "../assestss/weather.png";
import stopwatch from "../assestss/stopwatch.png";
import { Github } from 'react-bootstrap-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
  return (
    <Element name="projects">
      <div id="wrapper">
        <h1>CHECKOUT MY <span>RECENT WORKS</span> HERE</h1>
        <div className='project-cards'>
          <div className="card">
            <img src={cashew} alt="" />
            <div className="info">
              <h2>CASHEWNUT</h2>
              <p>A simple cashew nut app might be a mobile or web application designed to provide users with information, shopping options, or recipes related to cashew nuts.</p>
              <h5>HTML, CSS, JS, Bootstrap</h5>
              <div className='btn-anchor'>
                <a href="https://github.com/gopinathmu/cashewnutapp" target='_block' className="btn"><i><Github/></i></a>
                <a href="https://cashewnut.netlify.app/" target='_block' className="btn"><i><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></i></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={calculator} alt="" />
            <div className="info">
              <h2>CALCULATOR</h2>
              <p>A web application designed to perform basic arithmetic calculations, providing users with a simple and efficient tool for addition, subtraction, multiplication, and division operations</p>
              <h5>HTML, CSS, JS, React</h5>
              <div className='btn-anchor'>
                <a href="https://github.com/gopinathmu/calculator" target='_block' className="btn"><i><Github/></i></a>
                <a href="https://simp-calcu.netlify.app/" target="_block" className="btn"><i><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></i></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={weather} alt="" />
            <div className="info">
              <h2> WEATHER</h2>
              <p>The weather finding app provides real-time simple weather information for any location, displaying current temperature, humidity, wind speed</p>
              <h5>Javascript, React, API</h5>
              <div className='btn-anchor'>
                <a href="https://github.com/gopinathmu/simple-weather" target='_block' className="btn"><i><Github/></i></a>
                <a href="https://simple-weath.netlify.app/" target='_block' className="btn"><i><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></i></a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={stopwatch} alt="" />
            <div className="info">
              <h2>STOPWATCH</h2>
              <p>A stopwatch project is a simple timekeeping application that measures elapsed time with precision, featuring start, stop, and reset functionalities, commonly used for tracking durations in various activities or events</p>
              <h5>HTML, JS, React</h5>
              <div className='btn-anchor'>
                <a href="https://github.com/gopinathmu/stopWatch" target='_block' className="btn"><i><Github/></i></a>
                <a href="https://project-stopwatch-sw.netlify.app/" target='_block' className="btn"><i><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Project;
