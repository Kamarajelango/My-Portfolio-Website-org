import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { ThemeContext } from '../Compoents/Context'

function Contact() {
  const { theme } = useContext(ThemeContext)
  return <>
    <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : ' dark'} contact`} >
      
      <div className=' mt-2 container'>
        <div className='row mt-3' style={{height:"100%"}}>
          <div className='col'>
            <h3 className=''>Contact</h3>
            <Form className='pt-3'>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Label>Message</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" >
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>

              <div className='d-grid  justify-content-md-end'>
                <button className='btn formbt mt-2' type="submit">
                  Submit
                </button>
              </div>

            </Form>
          </div>
          <div className='col container'>
            <h3 className=''>Let's Get in Touch</h3>
            <p className='mt-5 pt-1  contacttext'>
              Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
              Simply fill the from and send me an email.
            </p>
            <div className='row pt-5 mt-4 px-3'>
              <div className='col'><p><i className="fa-solid fa-phone text-success"></i><br />Phone: <br /> +919751723184</p></div>
              <div className='col'><p><i className="fa-solid fa-location-dot text-primary"></i> <br /> Location: <br /> Ariyalur,Tamil Nadu</p></div>
              <div className='col'><p><i className="fa-solid fa-envelope text-danger"></i><br />Email: <br /> rajelagovan18@gmail.com</p></div>
            </div>
          </div>
        </div>
      </div>
     

    </div>
  </>
}

export default Contact