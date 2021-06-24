import React from 'react'
import Cannabiscapitalindex from './Cannabiscapitalindex';
import Cannabiscapitalintertainment from './Cannabiscapitalintertainment';
import CannabiscapitalNews from './CannabiscapitalNews';
import CannabiscapitalNetwork from './CannabiscapitalNetwork';
import Cannabiscapitalcompound from './Cannabiscapitalcompound';
import CannabiscapitalArtical from './CannabiscapitalArtical';
import CannabiscapitalVideo from './CannabiscapitalVideo';
import Video from './Video';
import './style/css/style.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Cannabiscapitalindex />
          </Route>
          <Route exact path="/video">
            <Video />
          </Route>
          <Route exact path="/home" >
            <Cannabiscapitalindex />
          </Route>
          <Route path="/Cannabiscapitalintertainment">
            <Cannabiscapitalintertainment />
          </Route>
          <Route path="/CannabiscapitalNews">
            <CannabiscapitalNews />
          </Route>
          <Route path="/CannabiscapitalNetwork">
            <CannabiscapitalNetwork />
          </Route>
          <Route path="/Cannabiscapitalcompound">
            <Cannabiscapitalcompound />
          </Route>
          <Route exact path="/Cannabiscapitalindex1" >
            <Cannabiscapitalindex />
          </Route>
          <Route exact path="/Cannabiscapitalintertainment1" >
            <Cannabiscapitalintertainment />
          </Route>
          <Route exact path="/CannabiscapitalNews1" >
            <CannabiscapitalNews />
          </Route>
          <Route exact path="/CannabiscapitalNetwork1" >
            <CannabiscapitalNetwork />
          </Route>
          <Route exact path="/Cannabiscapitalcompound1" >
            <Cannabiscapitalcompound />
          </Route>
          <Route exact path="/CannabiscapitalArtical" >
            <CannabiscapitalArtical />
          </Route>
          <Route exact path="/CannabiscapitalVideo" >
            <CannabiscapitalVideo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

