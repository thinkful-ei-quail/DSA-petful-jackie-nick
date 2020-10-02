import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import AdoptionPage from "./AdoptionPage.js/AdoptionPage";
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
