import React, { useContext } from 'react'
import { ThemeContext } from '../Compoents/Context'
import { Element } from 'react-scroll'

function About() {
  const { theme } = useContext(ThemeContext)

  return <>
    <Element id='aboutroute'>
     
      <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'}`} >
       
      <section className='about ' >
        <div className={`circle bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'}`}>
          <img src="./imgs/mypic.png" alt='' />
          <div className="content">
            <h4 className='aboutme '>ABOUT ME</h4>
           
            <p className=''>I'm  entry level full stack developer with six months of experience in designing,
              developing and implementing the application with solution using wide range of technology and programming languages.
              Seeking for best development experience and hands-on technical projects in a challenging
              role as a full stack developer.</p>
           
           
            <div className='row pb-5'>
              <div className='col text-center itext'> <i className="fa-brands fa-html5 fs-3 f1"></i><br />HTML</div>
              <div className='col text-center itext'><i className="fa-brands fa-square-js fs-3 f2"></i><br />Javascript </div>
              <div className='col text-center  itext'><i className="fa-brands fa-react fs-3 f3"></i><br />React </div>
              <div className='col text-center itext'><i className="fa-solid fa-database fs-3 f2"></i><br />SQL </div>
              <div className='col text-center itext'><i className="fa-brands fa-bootstrap fs-3  f5"></i><br />Bootstrap</div>
              <div className='col text-center itext'> <i className="fa-brands fa-node-js  fs-3 f6"></i><br />Nodejs </div>
            </div>
            <div className='text-center '>
              <a href='https://drive.google.com/file/d/104zm0YIsx9RAm80X1SUOLZFYIxTpLyoJ/view?usp=share_link' download="RESUME.pdf" target="_blank"  rel="noreferrer"     >
              <button className='button'>DOWNLOAD CV <i className="fa-solid fa-download"></i></button>
              </a>
             
            </div>
          </div>

        </div>
      </section>

      <br />
      <br /></div>
    </Element>

  </>
}

export default About