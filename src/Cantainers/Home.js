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
      <div className='col homepage'>
        <h4 className='hmhead'>FULL STACK DEVELOPER</h4>
        <h2 className='hey'>Hey! I AM</h2>
        <h3 className='homename'>Kamaraj</h3>
        <p className='para pb-3 pt-3'>Am TamilNadu based fullstack developer passionate <br/>
          and love to build web applications 💖.</p>
          <form action="mailto:rajelangovan18@gmail.com">
          <button className='hmbtn p-3 btn rounded-5' >HIRE ME <span className='px-2'> <img  src='./imgs/send.png'  alt='' height={11}/></span></button>
        </form>
       
      </div>
      <div className='col'>
        <img className='homeimg img-fluid' src='./imgs/bgd.png' alt='' />
      </div>
    </div>
    </div>
    </div>
  </Element>
  
  </>
}

export default Home