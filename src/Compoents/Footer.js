import React,{useContext} from 'react'
import {ThemeContext} from './Context'


function Footer() {
  const {theme}=useContext(ThemeContext)

  return <>
    <section className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'}`} >
        <p className='text-center'>Copyright ©2022 All rights reserved | Made with ❤️ by Kamaraj</p>
        <br/>
        </section>
  </>
}

export default Footer