import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Compoents/Navigation';
import Routing from './Compoents/Routing';
import Theme from './Cantainers/Theme';
import {ThemeProvider} from './Compoents/Context'
// import Footer from './Compoents/Footer';




function App() {

  return <>
    <ThemeProvider>
      <BrowserRouter >
        <Navigation />
        <Routing />
      </BrowserRouter>
      {/* <Footer/> */}
      <Theme/>      
    </ThemeProvider>

    
    
  </>
}

export default App;
