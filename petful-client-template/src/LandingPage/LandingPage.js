import React, { Component } from "react";
import { Link } from 'react-router-dom';
import dogscats from '../Images/dogscats.jpg'
import './landingpage.css'

export default class LandingPage extends Component {
  render() {
    return(
        <div>
          <div className="centerimage"><img className="landingpageImage" src={dogscats} alt="dogs and cats cartoon"/></div>
          <div className="landingpageBody">
            <p>
              Welcome to FIFO Animal shelter! Our beautiful, loving animals have been waiting for a beautiful soul like you to come bring them into a loving home and spoil the for the rest of their days.
            </p>
            <p>
              Our adoption process is pretty simple. Click on the adopt button to check out the next dog and cat waiting to be adopted. When you're ready, jump in line and when you're next, you can adopt either the next cat or dog available.
            </p>
          </div>
          <div className="button">
            <Link to='/adoption-page'><button>Adopt Now!</button></Link>
            </div>
        </div>
    )
  }
}
