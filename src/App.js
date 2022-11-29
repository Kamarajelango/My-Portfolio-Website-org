import './App.css';
import Navigation from './Compoents/Navigation';
import {ThemeProvider} from './Compoents/Context'
// import Footer from './Compoents/Footer';

function App() {
  return <>
    <ThemeProvider>     
        <Navigation /> 
        {/* <Footer/>  */}
    </ThemeProvider>   
    
  </>
}

export default App;
