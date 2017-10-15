import React, { Component } from 'react';
import './App.css';
import Boo from './assets/boo.jpg';

class HowItWorks extends Component {
  render() {
    return (
      <div style={{paddingTop:'25px'}}>
      <header className="App-header">
          <h1 className="App-title">Behind the scare</h1>
      </header>
      <div className="row" style={{display:'inline-block', height:'40%', width:'40%', paddingRight:'0px', float:"left"}}>
          <h1>Meet the Engineers Behind Nightmare On Conservation Drive</h1>
          <div className="col-sm-4" style={{display:'inline-block', height:'15%', width:'25%', paddingRight:'80px'}}>
            <h2>Kim Smith</h2>
            <img src={Boo} height="300px" />
          </div>
          <div className="col-sm-4" style={{display:'inline-block', height:'15%', width:'25%', paddingLeft:'30px'}}>
            <h2>Frank Smith</h2>
            <img src={Boo} height="300px" />
          </div>
      </div>
      <div className="row">

          <div className="col-sm-4" style={{display:'inline-block', height:'15%', width:'25%', paddingTop:'250px', float:'right'}}>
            <p>video</p>
          </div>

        </div>
      </div>
    );
  }
}

export default HowItWorks;
