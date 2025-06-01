import React,{useContext,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll"
import {ThemeContext} from './Context'
import Home from '../Cantainers/Home'
import About from '../Cantainers/About'
import Skills from '../Cantainers/Skills'
import Pro from '../Cantainers/Pro'
// import Contact from '../Cantainers/Contact'
// import Footer from './Footer';

function Navigation() {
    const {theme,changeTheme}=useContext(ThemeContext)
  const [show, setShow] = useState(false); 
  return <>
  <div>


  <Navbar bg="light" expand="lg" className={`sticky-top shadow p-3 mb-4  rounded navbar-${theme} bg-${theme}`}>
      <Container>
        <Navbar.Brand className="h1 fw-bold" href="#home">𝕂𝔼</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
        <Link to='homeroute' className='text-decoration-none navi '><Nav.Link href="#home" className='bar text-center '>HOME</Nav.Link></Link>    
        <Link to='aboutroute' className='text-decoration-none navi '><Nav.Link href="#about" className='bar text-center '>ABOUT</Nav.Link></Link>  
        <Link to='skillsroute' className='text-decoration-none navi '><Nav.Link href="#skills" className='bar text-center '>SKILLS</Nav.Link></Link> 
        <Link to='projectroute' className='text-decoration-none navi '><Nav.Link href="#Project" className='bar text-center '>PROJECTS</Nav.Link></Link> 
        {/* <Link to='contactroute' className='text-decoration-none navi '><Nav.Link href="#contact" className='bar   text-center '>CONTACT</Nav.Link></Link>  */}

        <li  className="nav-item text-center" onClick={() => setShow(!show)}>
            {show ? (
                      <button className="btn border-0" onClick={changeTheme}>
                      <i className="fa-solid fa-sun text-warning"></i>
                      </button>
                    ) : (
                      <button className='btn border-0' onClick={changeTheme}>
                         <i className="fa-solid fa-moon text-dark"></i>                        
                      </button>
                    )}
            </li>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>        

    <Home/>
    <About/> 
    <Skills/>
    <Pro/>
    {/* <Contact/> */}
    {/* <Footer/> */}

    </div>
  </>
}

export default Navigation