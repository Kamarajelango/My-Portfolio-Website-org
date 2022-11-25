import './App.css';
import Navigation from './Compoents/Navigation';
import {ThemeProvider} from './Compoents/Context'





function App() {

  return <>
    <ThemeProvider>     
        <Navigation />  
    </ThemeProvider>   
    
  </>
}

export default App;
