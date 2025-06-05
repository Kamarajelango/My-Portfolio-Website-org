import React, { useContext } from 'react'
import { ThemeContext } from '../Compoents/Context'
import { Element } from 'react-scroll'
import Myjourney from './Myjourney';

function About() {
    const { theme } = useContext(ThemeContext)
    const education = [
        {
            id: 1,
            year: "2016 - 2017",
            title: "Higher Seconday",
            place: "Sri Vinayaga Higher Secondary School | Namakkal, Tamil Nadu",
            description: "My interest in computers began in school, which led me to study Computer Science and start learning programming."
        },
        {
            id: 2,
            year: "2017 - 2020",
            title: "Bachelor of Computer Applications (BCA)",
            place: "Nehru Memorial College | Trichy, Tamil Nadu",
            description: "I started learning the basics of computers in college, which gave me a solid foundation in technology and inspired me to explore programming and web development further."
        },
        {
            id: 3,
            year: "2021",
            title: "MERN Stark Development",
            place: "Guvi geek network private limited | Chennai, Tamil Nadu",
            description: "I gained hands-on experience with JavaScript, React.js, Node.js, Express.js, and MongoDB. This helped me understand both frontend and backend development using modern technologies."
        },
    ];
    const experience = [
        {
            id: 1,
            year: "2021 - 2022",
            title: " Freelance Web Developer",
            place: "Own Creation",
            description: "I built responsive web applications using React.js, and styled them with Bootstrap and Material UI. I also added login and registration features by connecting with mock APIs."
        },
        {
            id: 2,
            year: "2023",
            title: "Full Stack Developer Trainee",
            place: " Netaxis IT Solutions (P) Ltd | Chennai, Tamil Nadu",
            description: "During my trainee period, I built a strong foundation in JavaScript and also learned jQuery, SCSS, CSS, HTML, PHP, Laravel, and MySQL, which helped me understand full stack development."
        },
        {
            id: 3,
            year: "2023 - 2025",
            title: " Junior Full Stack Developer",
            place: " Netaxis IT Solutions (P) Ltd | Chennai, Tamil Nadu",
            description: "I contributed to different enhancement projects on both the frontend and backend, and developed embed-friendly components using well-structured code."
        },
    ];
    return <>
        <Element id='aboutroute'>

            <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`} >

                <section className='about container' >
                    <div className={` bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                        {/* <img src="./imgs/mypic.png" alt='' /> */}
                        <div className="aboutme-content">
                            <h2 className='text-center'>ABOUT <span className='aboutme'>ME</span></h2>
                            <h6>Full Stack Developer!</h6>
                            <div className='mb-3'>
                                <p>A passionate Full Stack Developer with 2+ years of hands-on experience in designing, developing, and maintaining dynamic web applications. Skilled in building responsive, user-friendly, and high-performance websites with strong cross-browser compatibility and smooth runtime performance.</p>
                                <p>Experienced in the design, development, testing, and optimization of full stack systems. Proficient in PHP, Laravel, JavaScript, jQuery, AngularJS, React.js, and MySQL, with a growing interest in modern tools like TypeScript and Tailwind CSS. Strong focus on integrating robust backend systems with interactive frontends, delivering clean, scalable code and intuitive user interfaces.</p>
                                <p>Seeking an opportunity to join a full stack development team to extend my expertise while working with experienced web development teams.</p>
                            </div>
                            
                            <div className='personal-details-section flex item-center justify-center mb-4' style={{gap: "50px"}}>
                                <div className='personal-info'>
                                    <table rules="all">
                                        <tbody>
                                            <tr>
                                                <th>Birth: </th>
                                                <td>July 15, 1999</td>
                                            </tr>
                                            <tr>
                                                <th>City: </th>
                                                <td>Chennai, Tami Nadu</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='personal-info'>
                                    <table rules="all">
                                        <tbody>
                                            <tr>
                                                <th>Email: </th>
                                                <td>kamarajelangovan18@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <th>Phone: </th>
                                                <td>+91 97517 23184</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='education-section pb-5'>
                                <h5 className='journery-head text-center'>My <span className=''>Journey</span></h5>

                                <div className='education-part row'>
                                    <div className='education-details col-md-6 col-sm-12'>
                                        <h4>Edication</h4>
                                        <div className='edication-box'>
                                            {
                                                education.map((content, indx) => {
                                                    return <Myjourney key={indx} data={content} />
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='education-details col-md-6 col-sm-12'>
                                        <h4>Experience</h4>
                                        <div className='edication-box'>
                                            {
                                                experience.map((content, indx) => {
                                                    return <Myjourney key={indx} data={content} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center '>
                                <a href='https://drive.google.com/file/d/13tAjlbLkphcSC97HuDbwRFaE3XC2M6kt/view?usp=sharing' target="_blank" rel="noreferrer"     >
                                    <button className='button'>DOWNLOAD CV <i className="fa-solid fa-download"></i></button>
                                </a>

                            </div>
                        </div>

                    </div>
                </section>

                <br />
                <br /></div>
        </Element>

    </>
}

export default About