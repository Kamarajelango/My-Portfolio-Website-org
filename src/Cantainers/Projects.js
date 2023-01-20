import React,{useContext} from 'react'
import { ThemeContext } from '../Compoents/Context'


function Projects(props) {
  const { theme } = useContext(ThemeContext)
  return <>
      <div className={`card mx-4 bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'}`} style={{width:'18rem'}} >
  <img src={props.data.img} className="card-img-top" style={{width:"100%"}} alt="..."/>
  <div className="card-body"><hr/>
    <h5 className="card-title">{props.data.name}</h5>
    <p className="">{props.data.description}</p><hr/>
    <div className='text-center'>
    <a href={props.data.link} className="btn probtn" target="_blank"  rel="noreferrer"><i className="fa-solid fa-laptop pe-1"></i>LIVE DEMO</a></div>
  </div>
</div>

</>
}

export default Projects