import React,{useContext} from 'react'
import Projects from './Projects'
import { ThemeContext } from '../Compoents/Context'
import {Element} from 'react-scroll'

function Pro() {
    const { theme } = useContext(ThemeContext)
    let data = [
        {
            name: 'Applicaton 1',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `,
            img:"https://img.freepik.com/free-vector/flat-design-ui-ux-landing-page_52683-72187.jpg?w=740&t=st=1665750666~exp=1665751266~hmac=fbe61f2afac15d609d48be05f6250ad7c74cca5e1d8c5890c712b0ed76a5c809"
        },
        {
            name: 'Applicaton 2',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `,
            img:"https://img.freepik.com/free-vector/flat-design-ui-ux-landing-page_52683-72187.jpg?w=740&t=st=1665750666~exp=1665751266~hmac=fbe61f2afac15d609d48be05f6250ad7c74cca5e1d8c5890c712b0ed76a5c809"
        },{
            name: 'Applicaton 3',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `,
            img:"https://img.freepik.com/free-vector/flat-design-ui-ux-landing-page_52683-72187.jpg?w=740&t=st=1665750666~exp=1665751266~hmac=fbe61f2afac15d609d48be05f6250ad7c74cca5e1d8c5890c712b0ed76a5c809"
        }
    ]
    return <>
    <Element id='projectroute'>
    <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'}`}>
        <div className='container '>
            <h6 className='skillhead mt-4'>MY WORK</h6>
            <h3 id='hey1' className='mt-3'>CHECK OUT MY REACT <br/>PROJECT</h3>
            <div className='row d-flex justify-content-center'>
                {
                    data.map((e,i)=>{
                        return <Projects key={i} data={e}  />
                    })
                }
            </div>
        </div>
        </div>
    </Element>
    
    </>
}

export default Pro