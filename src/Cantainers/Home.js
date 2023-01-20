import React,{useContext} from 'react'
import { ThemeContext } from '../Compoents/Context'
import {Element} from 'react-scroll'


function Home() {
  const { theme } = useContext(ThemeContext)
  return <>
  <Element id='homeroute'>
  <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'} home`} >
  <div className='container'>
    <div className='row '>
      <div className='col-12 col-md-6 homepage'>
        <h4 className='hmhead'>FRONT END DEVELOPER</h4>
        <h2 className='hey'>Hey! I AM</h2>
        <h3 className='homename'>Kamaraj</h3>        
        <p className='para  pt-3'>Am TamilNadu based front end developer passionate <br/>
          and love to build web applications 💖.</p>
          <div className=" col-lg-4 col-md-5 col-sm-6 text-start mb-3">
            <div className="text-center">
                           <div className="d-flex gap-5 justify-content-center">                           
                <a
                  href="https://www.linkedin.com/in/kamaraj-elangovan-06356625b"
                  target="_blank" rel="noreferrer"
                >
                  <i class="uil uil-linkedin-alt h4" id="font-1-color"></i>
                </a>                
                
                <a href="https://github.com/Kamarajelango" target="_blank" rel="noreferrer">
                  <i class="uil uil-github-alt h4" id="font-1-color"></i>
                </a>
              </div>
            </div>
          </div>

          <form action="mailto:rajelangovan18@gmail.com">
          <button className='hmbtn p-3' >HIRE ME <span className='px-2'> <img  src='./imgs/send.png'  alt='' height={11}/></span></button>
        </form>
        </div>
      <div className='col-12 col-md-6'>
        <img className='homeimg img-fluid' src='./imgs/bgd.png' alt='' />
      </div>
    </div>
    </div>
    </div>
  </Element>
  
  </>
}

export default Home