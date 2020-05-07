import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './css/App.css';

import home from './components/home.js'
import kong from './components/kong.js'
import page2 from './components/page2.js' 
import page3 from './components/page3.js'
import main from './components/guy.js'
import toue from './components/toue.js'

function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = {home}/>
      <Route path = "/kong" component = {kong}/>
      <Route path = "/guy" component = {main}/> 
      <Route path ="/page2" component = {page2}/> 
      <Route path ="/page3" component = {page3}/> 
      <Route path = "/toue" component = {toue}/>
    </BrowserRouter>
  );
}

export default App;
 