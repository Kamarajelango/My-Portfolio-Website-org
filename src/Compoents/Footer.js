import React,{useContext} from 'react'
import {ThemeContext} from './Context'


function Footer() {
  const {theme}=useContext(ThemeContext)

  return <>
<div className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'} copywrite footer-info 'row`}>
  <div className='col-12'>
  <p className='text-center '>Copyright ©2022 All rights reserved | Made with ❤️ by Kamaraj</p>
        <br/>
  </div>
</div>
   
  </>
}

export default Footer