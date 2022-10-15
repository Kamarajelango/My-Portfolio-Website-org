import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../Cantainers/Home'
import About from '../Cantainers/About';
import Skills from '../Cantainers/Skills';
import Contact from '../Cantainers/Contact'
import Pro from '../Cantainers/Pro';

function Routing() {
 
  return  <>
    <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/projects' component={Pro}/>
        <Route path='/contact' component={Contact}/>
        <Route path='*' component={Home}/>
    </Switch>
  </> 
}

export default Routing