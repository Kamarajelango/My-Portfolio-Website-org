import React,{useContext} from 'react'
import Projects from './Projects'
import { ThemeContext } from '../Compoents/Context'
import {Element} from 'react-scroll'

function Pro() {
    const { theme } = useContext(ThemeContext)
    let data = [
        {
            name: 'Near Worker',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `,
            img:"https://thumbs.dreamstime.com/z/portfolio-management-businessman-hologram-concept-futuristic-portfolio-management-businessman-hologram-concept-177205308.jpg"
        },
       
    ]
    return <>
    <Element id='projectroute'>
    <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'}`}>
        <div className='container '>
            <h6 className='skillhead '>MY WORK</h6>
            <h3 id='hey1' className='mt-3'>CHECK OUT MY REACT <br/>PROJECT</h3>
            <div className='row d-flex justify-content-center'>
                {
                    data.map((e,i)=>{
                        return <Projects key={i} data={e}  />
                    })
                }
            </div>
        </div>
        <br/><br/>
        </div>
    </Element>
    
    </>
}

export default Pro