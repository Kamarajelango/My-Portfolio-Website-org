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
import Contact from '../Cantainers/Contact'




function Navigation() {
  
  const {theme,changeTheme}=useContext(ThemeContext)
  const [show, setShow] = useState(false);
 
  return <>
  <div>
       <Navbar collapseOnSelect  className={`sticky-top shadow p-3 mb-4  rounded navbar-${theme} bg-${theme}`} expand="lg">
      <Container>
        <Navbar.Brand className="h1 fw-bold" href="#home">KE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="me-auto">
            
          </Nav>
          <Nav >
         
                     
          <Link to='homeroute' smooth={true}  className='text-decoration-none navi '> <Nav.Link className='bar nav-item text-center' >HOME </Nav.Link> </Link>
          <Link to='aboutroute' smooth={true}  className='text-decoration-none navi'> <Nav.Link className='bar nav-item text-center' > ABOUT</Nav.Link>  </Link>
         <Link to='skillsroute' smooth={true}  className='text-decoration-none navi'> <Nav.Link className='bar nav-item text-center'  >SKILLS</Nav.Link> </Link> 
         <Link to='projectroute' smooth={true}  className='text-decoration-none navi'><Nav.Link className='bar nav-item text-center'>PROJECTS</Nav.Link> </Link>  
         <Link to='contactroute' smooth={true}  className='text-decoration-none navi'> <Nav.Link className='bar nav-item text-center' >CONTACT</Nav.Link>   </Link>
         
          
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
    <Contact/>

    </div>
  </>
}

export default Navigation