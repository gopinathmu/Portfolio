import React, { useState, useEffect } from "react";
import './navbar.css';
import 'boxicons/css/boxicons.min.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode && storedMode === "dark-mode") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("mode", newDarkMode ? "dark-mode" : "light-mode");
    document.body.classList.toggle("dark", newDarkMode);
  };

  const openSidebar = () => {
    setSidebarActive(true);
  };

  const closeSidebar = (e) => {
    if (!e.target.classList.contains("sidebarOpen") && !e.target.classList.contains("menu")) {
      setSidebarActive(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={sidebarActive ? "active" : ""}>
      <div className={`nav-bar ${darkMode ? 'dark' : ''}`}>
        <div className="nav-darkbar">
          <i className={`bx bx-menu sidebarOpen${sidebarActive ? ' active' : ''}`} onClick={openSidebar}></i>
          <div className="darkLight" onClick={toggleDarkMode}>
            <i className={`bx ${darkMode ? 'bx-sun'  : 'bx-moon' } moon-sun${darkMode ? ' active' : ''}`}></i>
          </div>
        </div>
        <span className="logo-nav" onClick={scrollToTop}><a href="#">GOPINATH<span>.</span></a></span>
        <div className="menu">
          <div className="logo-toggle">
            <i className='bx bx-x siderbarClose' onClick={() => setSidebarActive(false)}></i>
          </div>
          <ul className="nav-links">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500}><li>HOME</li></Link>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}><li>ABOUT</li></Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}><li>PROJECTS</li></Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}><li>CONTACT</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
