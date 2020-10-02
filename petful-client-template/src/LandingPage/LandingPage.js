import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return(
        <div>
          <div>
            <p>
              Welcome to FIFO Animal shelter! Some fancy words will go here that tell you all about our adoption process, and what to do.
            </p>
            <p>
              It's pretty simple. You click on the button and look through the animals. When you're ready, jump in line and when you're next, you can adopt either the next cat or dog avaliable.
            </p>
            <p>
              Yo Nick, I think we need to replace all the images with like, cujo type dogs and wolves, and mountain lions and pumas. :) Horror show type stuff. And give them really cute names like fluffy and princess.
            </p>
          </div>
            <Link to='/adoption-page'>Adopt Now!</Link>
        </div>
    )
  }
}
