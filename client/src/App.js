import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";

//create browser history
import History from './Pages/History/History.js'

import Nav from './Components/Nav/Nav.js'
import Footer from './Components/Footer/Footer.js'
import About from './Pages/About/About.js'
import Home from './Pages/Home/Home.js'
import Services from './Pages/Services/Services.js'
import Work from './Pages/Work/Work'
import NotFound from './Pages/NotFound/NotFound.js'

class App extends Component {
  render() {
    return (
      <Router  history={History}>
          <div className="App">
            <Nav></Nav>
              
                  <Switch>
                    <Route exact path="/" render={props =><Home/>} />
                    <Route exact path="/About" render={props =><About/>} />
                    <Route exact path="/Services" render={props =><Services/>} />
                    <Route exact path="/Work" render={props =><Work/>} />
                    <Route render={props =><NotFound/>}/>
                  </Switch>
                
              <Footer></Footer>
            </div>
      </Router>
 

    );
  }
}

export default App;
