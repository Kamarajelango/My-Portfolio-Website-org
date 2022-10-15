import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navigation from './Compoents/Navigation';
import Routing from './Compoents/Routing';
// import Footer from './Compoents/Footer';
// import Home from './Cantainers/Home';
// import About from './Cantainers/About';
// import Skills from './Cantainers/Skills';
// import Pro from './Cantainers/Pro';
// import Contact from './Cantainers/Contact';



function App() {
 
  return <>
  <Router >
         <Navigation/>
         {/* <Home/>
         <About/>
         <Skills/>
         <Pro/>
         <Contact/> */}
         <div  className=''>
         <Routing/>
         </div>         
         
  </Router>
  {/* <Footer/> */}
 
   
  </>
}

export default App;
