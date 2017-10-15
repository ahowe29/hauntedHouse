import React, { Component } from 'react';
import './App.css';
import AutoPlay from './Home/Carousel.js'

class Contact extends Component {
  render() {
    return (
      <div style={{paddingTop:'25px'}}>
      <header className="App-header">

          <h1 className="App-title">Nightmare on Conservation Drive</h1>


      </header>
      <div className="row" style={{paddingTop:"90px", paddingLeft:"90px", width:"70%", textAlign:'left'}}>
        <h1>{"Please reach out to nightmareOnConservationDrive@gmail.com for any feedback, questions, or concerns!"}</h1>
      </div>
      </div>
    );
  }
}

export default Contact;
