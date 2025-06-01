import React, { useContext } from 'react'
import { ThemeContext } from '../Compoents/Context'

function Myjourney(props) {
    const { theme } = useContext(ThemeContext)
    return <>
        <div className={`education-content 'text-${theme === 'dark' ? 'light' : 'dark'}`}>
            <div className='content'>
                <div className='year d-flex align-items-center gap-2'><span className='d-flex'><i class="fa-solid fa-calendar-days"></i></span> {props.data.year}</div>
                <div className='title font-bold'>{props.data.title} - {props.data.place}</div>
                <p className='decription'>{props.data.description}</p>
            </div>
        </div>
    </>
}

export default Myjourney;