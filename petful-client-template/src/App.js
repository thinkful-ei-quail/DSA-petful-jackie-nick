import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Header from "../Header/Header"
import AdoptionPage from "./AdoptionPage/AdoptionPage";
import LandingPage from "./LandingPage/LandingPage";

export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
        <main>
            <Route path='/' component={LandingPage} />
            <Route path='/' component={AdoptionPage} />
        </main>
      </div>
    );
  }
}
