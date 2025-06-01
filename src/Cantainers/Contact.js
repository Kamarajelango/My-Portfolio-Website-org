import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import { Element } from 'react-scroll'
import { ThemeContext } from '../Compoents/Context'

function Contact() {
    const { theme } = useContext(ThemeContext)
    return <>
        <Element id='contactroute'>
            <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} contact pt-5`}>

                <div className=' container'>
                    <div className='row ' style={{ height: "100%" }}>
                        <div className='col-12 col-md-6'>
                            <h3 className=''>Contact</h3>
                            <Form className='pt-3' action="https://formsubmit.co/rajelangovan18@gmail.com" method="POST">
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="name" name='name' placeholder='Full Name' required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder='Email' required />
                                </Form.Group>

                                <Form.Label>Message</Form.Label>
                                <textarea name='message' placeholder='Message' className="form-control" style={{ height: '100px' }} required />


                                <div >
                                    <button className='btn formbt mt-2 fs-6 ' type="submit">
                                        <span className='mx-3 me-3'> Send</span>
                                    </button>
                                </div>

                            </Form>
                        </div>
                        <div className='col-12 col-md-6'>
                            <h3 className=''>Let's Get in Touch</h3>
                            <p className='mt-5 pt-1  contacttext'>
                                Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                                Simply fill the from and send me an email.
                            </p>
                            <div className='row pt-5 mt-4 px-3'>
                                <div className='col'><p><i className="fa-solid fa-phone text-success"></i><br />Phone: <br /> +919751723184</p></div>
                                <div className='col '><p><i className="fa-solid fa-location-dot text-primary"></i> <br /> Location: <br /> Ariyalur,Tamil Nadu</p></div>
                                <div className='col '><p><i className="fa-solid fa-envelope text-danger"></i><br />Email: <br /> rajelagovan18@gmail.com</p></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Element>

    </>
}

export default Contact