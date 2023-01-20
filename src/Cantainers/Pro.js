import React,{useContext} from 'react'
import Projects from './Projects'
import { ThemeContext } from '../Compoents/Context'
import {Element} from 'react-scroll'

function Pro() {
    const { theme } = useContext(ThemeContext)
    let data = [
        {
            name: 'Near Worker',
            description: `It is home appliances application like urban company. Using React,Css,Bootstrap,Materila UI and MockApi. Full responsive website`,
            img:"./imgs/project1.png",
            link:"https://nearworker.netlify.app/",
        },
        {
            name: 'Near Worker',
            description: `Home appliances application using only HTML, Css , Bootstrap without any functionality to pratice design purpose after to create react application.`,
            img:"./imgs/project2.png",
            link:"https://nearworker-demo.netlify.app/"
        },
       
    ]
    return <>
    <Element id='projectroute'>
    <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'} pt-3`}>
        <div className='container '>
            <h6 className='skillhead '>MY WORK</h6>
            <h3 id='hey1' className='mt-3'>CHECK OUT MY REACT <br/>PROJECT</h3>
            <div className='row align-item-center justify-content-center'>
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