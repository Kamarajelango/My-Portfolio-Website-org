import React, { useContext } from 'react'
import { ThemeContext } from '../Compoents/Context'

function Skill(props) {
    const { theme } = useContext(ThemeContext);
    return <>
        <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} col-12 col-lg-2 col-sm-4 text-center p-2`}>
            <div className='flex justify-center items-center'>
                <img className='skill_img' src={props.data.image} alt='' />
            </div>
            <h5 className='text-center skill_text'>{props.data.title}</h5>
        </div>
    </>
}

export default Skill;