import React, { useContext } from 'react'
import { ThemeContext } from '../Compoents/Context'
import { Element } from 'react-scroll'


function Home() {
    const { theme } = useContext(ThemeContext)
    return <>
        <Element id='homeroute' className='mb-5'>
            <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} home`} >
                <div className='container h-100'>
                    <div className='row h-100'>
                        <div className='col-12 col-md-7 homepage'>
                            <div className='home-content'>
                                <h1 className='hmhead homename'>Hi, I'm Kamaraj Elangovan</h1>
                                <div className="text-animate">
                                    <h3>Full Stack Developer</h3>
                                </div>
                            </div>
                            <p className='para  pt-3'>Welcome to my personal website! I'm Kamaraj Elangovan, a passionate and dedicated full stack developer with a strong focus on crafting smooth and scalable web experiences. I specialize in building dynamic applications that are not just functional-but user-focused and impactful.💖</p>
                            <div className=" col-lg-4 col-md-5 col-sm-6 text-start mb-3">
                                <div className="text-center">
                                    <div className="d-flex gap-5 justify-content-center">
                                        <a href="https://www.linkedin.com/in/kamaraj-elangovan-a51226336/" target="_blank" rel="noreferrer">
                                            <i class="uil uil-linkedin-alt h4" id="font-1-color"></i>
                                        </a>
                                        <a href="https://github.com/Kamarajelango" target="_blank" rel="noreferrer">
                                            <i class="uil uil-github-alt h4" id="font-1-color"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <form action="mailto:kamarajelangovan18@gmail.com">
                                <button className='hmbtn p-3 flex justify-center items-center'>HIRE ME <span className='px-2'> <img src='./imgs/send.png' alt='' style={{height:"11px",width:"11px"}}/></span></button>
                            </form>
                        </div>
                        <div className='col-12 col-md-5'>
                            <img className='homeimg img-fluid' src='./imgs/bgd.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </Element>

    </>
}

export default Home