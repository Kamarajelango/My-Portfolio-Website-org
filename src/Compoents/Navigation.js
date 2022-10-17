import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {ThemeContext} from './Context'



function Navigation() {
  const {theme,changeTheme}=useContext(ThemeContext)
 
  return <>
       <Navbar collapseOnSelect  className={`sticky-top shadow p-3 mb-4  rounded navbar-${theme} bg-${theme}`} expand="lg">
      <Container>
        <Navbar.Brand href="#home">𝐏𝐨𝐫𝐭𝐟𝐨𝐥𝐢𝐨</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="me-auto">
            
          </Nav>
          <Nav >
          <Link to='/home'  className='text-decoration-none navi '><Nav.Link className='bar' href="/">HOME</Nav.Link></Link>  
          <Link to='/about' className='text-decoration-none navi'><Nav.Link className='bar' href="/about">ABOUT</Nav.Link></Link>  
          <Link to='skills' className='text-decoration-none navi'><Nav.Link className='bar'  href="/skills">SKILLS</Nav.Link></Link>  
          <Link to='projects' className='text-decoration-none navi'><Nav.Link className='bar' href="/projects">PROJECTS</Nav.Link></Link>   
          <Link to='contact' className='text-decoration-none navi'><Nav.Link className='bar' href="/contact">CONTACT</Nav.Link></Link>   
          <button className='btn btn-danger' onClick={changeTheme}>Change Theme</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default Navigation