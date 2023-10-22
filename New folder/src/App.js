import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services"
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
