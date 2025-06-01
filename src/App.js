import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Navigation from './Compoents/Navigation';
import { ThemeProvider } from './Compoents/Context'
import Footer from './Compoents/Footer';

function App() {
  return <>
    <ThemeProvider>
      <Navigation />
      <Footer/> 
    </ThemeProvider>

  </>
}

export default App;
