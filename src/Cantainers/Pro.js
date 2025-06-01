import React, { useContext } from 'react'
import Projects from './Projects'
import { ThemeContext } from '../Compoents/Context'
import { Element } from 'react-scroll'

function Pro() {
    const { theme } = useContext(ThemeContext)
    let data = [
        {
            name: 'Popupsify',
            description: `Built a customizable popup system that enables users to create and deploy interactive elements-such as newsletter signups, promotional offers, announcements, and targeted messages-to drive user.`,
            img: "./imgs/popupsify.png",
            link: "https://popupsify.com",
        },
        {
            name: 'Sitespedia',
            description: `Developed a task management platform that helps users stay organized with intelligent checklists, reminders, and productivity focused features.  Visualized tasks and deadlines in a clean, intuitive calendar layout.`,
            img: "./imgs/sitespedia.png",
            link: "https://sitespedia.com",
        },
        {
            name: 'Timeline',
            description: ` Built a timeline app where users can add detailed events, displayed in the order they occurred. Timelines can be shared via direct links or embedded into other websites, facilitating collaboration and presentation.`,
            img: "./imgs/timeline.png",
            link: "https://timeline.page/",
        },
        {
            name: 'Near Worker',
            description: `It is home appliances application like urban company. Using React, Css, Bootstrap, Materila UI and MockApi. Full responsive website`,
            img: "./imgs/project1.png",
            link: "https://nearworker.netlify.app/",
        },
    ]
    return <>
        <Element id='projectroute'>
            <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} pt-3`}>
                <div className='container '>
                     <h2 id='hey' className='text-center'>My <span className='skillhead'>WORK</span></h2>
                    {/* <h3 id='hey1' className='mt-3'>CHECK OUT MY REACT <br />PROJECT</h3> */}
                    <div className='row align-item-center justify-content-center project-list-section position-relative'>
                        {
                            data.map((e, i) => {
                                return <Projects key={i} data={e} />
                            })
                        }
                    </div>
                </div>
                <br /><br />
            </div>
        </Element>

    </>
}

export default Pro