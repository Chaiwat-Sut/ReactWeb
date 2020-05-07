import React from 'react';
import Logo from "./img/take your heart.jpg";
import { BrowserRouter, Route} from 'react-router-dom';
import './css/App.css';
import home from './components/home.js'
import kong from './components/kong.js'
import guy from './components/guy.js'
import toue from './components/toue.js'
function App() {
  return (
    <BrowserRouter>
      <Route exact path = "/" component = {home}/>
      <Route path = "/kong" component = {kong}/>
      <Route path = "/guy" component = {guy}/> 
      <Route path = "/toue" component = {toue}/>
    </BrowserRouter>
  );
}

export default App;
