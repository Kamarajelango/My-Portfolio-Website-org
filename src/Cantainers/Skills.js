import React, { useContext } from 'react'
import { Element } from 'react-scroll'
import { ThemeContext } from '../Compoents/Context'

function Skills() {
  const { theme } = useContext(ThemeContext)
  return <>
  <Element id='skillsroute'>
  <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'} skills`} >
      <div className='container'>
        <h6 className='pt-4 skillhead'>SKILLS</h6>
        <h2 id='hey'>My Skills <br /> Progress So Far</h2>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='p-2 '><p className='paraletter'><i className="fa-brands fa-html5 sklogo  f1"></i>HTMl - (85%)</p><div className=" progress progress-bar progressbar" role="progressbar" aria-label="Basic example" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
            <div className='p-2'><p className='paraletter'><i className="fa-brands fa-css3-alt sklogo text-info fs-6 f7"></i>CSS - (70%)</p><div className=" progress progress-bar progressbar" role="progressbar" aria-label="Basic example" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
            <div className='p-2'> <p className='paraletter'><i className="fa-brands fa-bootstrap sklogo f5"></i>BOOTSTRAP - (80%)</p><div className=" progress progress-bar progressbar" role="progressbar" aria-label="Basic example" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
            <div className='p-2'><p className='paraletter'><i className="fa-brands fa-square-js sklogo f2"></i>JAVASCRIPT - (70%)</p><div className=" progress progress-bar progressbar" role="progressbar" aria-label="Basic example" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='p-2'> <p className='paraletter'><i className="fa-brands fa-react sklogo f3 "></i>REACT - (65%)</p><div className=" progress progress-bar progressbar" role="progressbar" aria-label="Basic example" style={{ width: "65%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
            <div className='p-2'><p className='paraletter'><i className="fa-solid fa-database  sklogo f2"></i>SQL - (65%)</p><div className=" progress progress-bar progressbar" role="progressbar" aria-label="Basic example" style={{ width: "65%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
            <div className='p-2'><p className='paraletter'><img className='' src='./imgs/mongodb.ico' alt='' height={25} />MONGODB - (80%)</p><div className=" progress progress-bar progressbar" role="progressbar" aria-label="Basic example" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
            <div className='p-2'><p className='paraletter'><i className="fa-brands fa-node-js sklogo  f6"></i>NODEJS - (65%)</p><div className=" progress progress-bar progressbar" role="progressbar" aria-label="Basic example" style={{ width: "65%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
          </div>
        </div></div></div>
  </Element>
    
  </>
}

export default Skills
