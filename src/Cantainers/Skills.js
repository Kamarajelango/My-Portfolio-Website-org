import React, { useContext } from 'react'
import { Element } from 'react-scroll'
import { ThemeContext } from '../Compoents/Context'
import Skill from './Skill';

function Skills() {
    const { theme } = useContext(ThemeContext)
    const skills = [
        {
            image : "./imgs/html.png",
            title : "HTML5"
        },
        {
            image : "./imgs/css.png",
            title : "CSS"
        },
        {
            image : "./imgs/sass.svg",
            title : "SCSS"
        },
        {
            image : "./imgs/bootstrap.png",
            title : "BOOTSTRAP"
        },
        {
            image : "./imgs/tailwind.svg",
            title : "Tailwind CSS"
        },
        {
            image : "./imgs/jquery.svg",
            title : "JQuery"
        },
        {
            image : "./imgs/javascript.png",
            title : "JAVASCRIPT"
        },
        {
            image : "./imgs/angularjs.svg",
            title : "Angular JS"
        },
        {
            image : "./imgs/react.png",
            title : "React JS"
        },
        {
            image : "./imgs/mysql.svg",
            title : "MySQL"
        },
        {
            image : "./imgs/mongodb.ico",
            title : "Mongo DB"
        },
        {
            image : "./imgs/github.png",
            title : "GitHub"
        },
        {
            image : "./imgs/netlify.png",
            title : "Netlify"
        },
        {
            image : "./imgs/materialui.png",
            title : "Material UI"
        },
    ];
    return <>
        <Element id='skillsroute'>
            <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} skills`} >
                <div className='container'>
                    {/* <h4 className='pt-4  '>SKILLS</h4> */}
                    <h2 id='hey' className='text-center'>My <span className='skillhead'>Skills</span></h2>
                    <div className='row mt-3'>
                        {
                            skills.map((data,i)=>{
                                return <Skill data={data} key={i}/>
                            })
                        }                        
                    </div>
                </div>
            </div>


        </Element>

    </>
}

export default Skills
