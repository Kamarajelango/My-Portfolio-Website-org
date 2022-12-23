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
          <h2 id='hey'>My Skills</h2>
          <div className='row mt-3'>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <div className=''>
              <img className='skill_img' src='./imgs/html.png ' alt='' />
              </div>
              <h5 className='text-center skill_text'>HTML5</h5>
            </div>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <img className='skill_img ' src='./imgs/css.png' alt='' /><h5 className='skill_text'>CSS</h5>
            </div>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <img className='skill_img' src='./imgs/bootstrap.png' alt='' /><h5 className='skill_text'>BOOTSTRAP</h5>
            </div>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <img className='skill_img' src='./imgs/javascript.png' alt='' /><h5 className='skill_text'>JAVASCRIPT</h5>
            </div>
            <div className='col-12-mb-5 col-lg-2 col-sm-4 text-center'>
              <img className='skill_img' src='./imgs/react.png' alt='' /><h5 className='skill_text'>REACT</h5>
            </div> 
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <img className='skill_img' src='./imgs/my-sql.png' alt='' /><h5 className='skill_text'>SQL</h5>
            </div>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <img className='skill_img' src='./imgs/mongodb.ico' alt='' /><h5 className='skill_text'>MONGODB</h5>
            </div>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <img className='skill_img' src='./imgs/nodejs.png' alt='' /><h5 className='skill_text'>NODEJS</h5>
            </div>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <svg className='skill_img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50"
                viewBox="0 0 50 50">
                <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
              </svg><h5 className='skill_text'>EXPRESSJS</h5>
            </div>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <img className='skill_img' src='./imgs/github.png' alt='' /><h5 className='skill_text'>GITHUB</h5>
            </div>

            <div className='col-12 col-lg-2 col-sm-4 text-center p-2'>
              <img className='skill_img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFFU3gkKGBXvhGxsg1MOuPuPZKu4gXykzdF9fAIqxcQ&s' alt='netlify' />
              <h5 className='skill_text'>NETLIFY</h5>
            </div>
            <div className='col-12 col-lg-2 col-sm-4 text-center p-2' >
              <img className='' style={{height:'65px',width:"65px",paddingBottom:'5px'}} src='./imgs/materialui.png' alt='heroku' /><h5 className='skill_text'>MATERIALUI</h5>

            </div>
          </div>
        </div>
      </div>


    </Element>

  </>
}

export default Skills
