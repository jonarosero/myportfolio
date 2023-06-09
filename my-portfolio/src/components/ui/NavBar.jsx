import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import logo from '../../assets/img/image 33.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>{
      if(window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return ()=>window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value)=>{
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'?'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Experiencia</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jonathan-andres-rosero-soto-804128113/"><img src={navIcon1} alt=""/></a>
              <a href="https://www.facebook.com/jonathan.rosero.186/"><img src={navIcon2} alt=""/></a>
              <a href="https://www.instagram.com/jars9605/?hl=es"><img src={navIcon3} alt=""/></a>
            </div>
            <a href="https://github.com/jonarosero">
            <button className="vvd"><span>My GITHUB REPO</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
