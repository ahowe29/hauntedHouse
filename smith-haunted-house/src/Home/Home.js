import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import GridList1 from './GridList.js';
import AutoPlay from './Carousel.js';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{paddingTop:'25px'}}>
        <header className="App-header">

            <h1 className="App-title">Nightmare on Conservation Drive</h1>


        </header>

        </div>
        <div className="row" style={{paddingTop:'20px'}}>
        <div className="col-sm-6" style={{paddingRight:'15px', paddingTop:'22px', float:'right'}}>
          <GridList1/>
        </div>
        <div className="col-sm-6" className="spooky" style={{height:'50%', width:'60%', paddingTop:'15px', paddingRight:'30px', float:'left'}}>
        <div className="row">
          <h1 style={{fontSize:'40px', marginTop:'0px', paddingRight:'20px'}}> {"Engineered specifically for your terror"} </h1>
          <h5 className="nonspooky"> {"little green ghouls buddy!"} </h5>
        </div>
        <div className="row" style={{paddingLeft:'40px', height:'10%', width:'90%', textAlign:'center'}}>
          <AutoPlay/>
        </div>
        </div>

        </div>
      </div>
    );
  }
}

export default Home;
