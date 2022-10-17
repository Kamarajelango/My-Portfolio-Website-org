import React,{useContext} from 'react'
import { ThemeContext } from '../Compoents/Context'

function Projects(props) {
  const { theme } = useContext(ThemeContext)
  return <>

      <div className={`card mx-4 bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'}`} style={{width:'18rem'}}>
  <img src={props.data.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.data.name}</h5>
    <p className="card-text">{props.data.description}</p>
    <div className='text-center '>
    <a href="!#" className="btn probtn"><i className="fa-solid fa-laptop pe-1"></i>LIVE DEMO</a></div>
  </div>
</div>

</>
}

export default Projects