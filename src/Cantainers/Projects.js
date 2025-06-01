import React, { useContext } from 'react'
import { ThemeContext } from '../Compoents/Context'


function Projects(props) {
    const { theme } = useContext(ThemeContext)
    return <>
        <div className={`card mx-4 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} card-parent position-relative p-0`} style={{ width: "425px", height: "283px" }} >
            <img src={props.data.img} className="card-img-top h-100" style={{ width: "100%" }} alt="..." />
            <div className="card-body project-card-body align-items-center justify-content-center flex-column position-absolute">
                <h5 className="card-title text-center">{props.data.name}</h5>
                <p className="">{props.data.description}</p>
                <a href={props.data.link} className={`project-view-btn bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`} target="_blank" rel="noreferrer">
                    <i class="fa-solid fa-arrow-up-right-from-square d-flex item-center justify-content-center w-100"></i>
                </a>
            </div>

        </div>

    </>
}

export default Projects