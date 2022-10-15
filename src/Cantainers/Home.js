import React from 'react'

function Home() {
  return <>
  <div className='container'>
    <div className='row '>
      <div className='col homepage'>
        <h4 className='hmhead'>FULL STACK DEVELOPER</h4>
        <h2 className='hey'>Hey! I AM</h2>
        <h3 className='homename'>Kamaraj</h3>
        <p className='para pb-3 pt-3'>Am TamilNadu based fullstack developer passionate <br/>
          and love to build web applications 💖.</p>
          <form action="https://accounts.google.com/">
          <button className='hmbtn p-3' >HIRE ME <span className='px-2'> <img src='./imgs/send.png'  alt='' height={11}/></span></button>
        </form>
       
      </div>
      <div className='col'>
        <img className='homeimg ' src='./imgs/bgd.png' alt='' />
      </div>
    </div>
    </div>
  </>
}

export default Home