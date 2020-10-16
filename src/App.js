import React, {useEffect} from "react";
import axios from 'axios';
import Chart from 'chart.js';
import * as d3 from 'd3';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Menu from "./Menu/Menu";
import Hero from "./Hero/Hero";
import HomePage from "./HomePage/HomePage";
import Footer from "./Footer/Footer";
import AboutPage from "./AboutPage/AboutPage";
import LoginPage from "./LoginPage/LoginPage";


function App() {


  return (
    <Router>
      <Menu />
      <Hero />
      <div className="mainContainer"> </div>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage  />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
