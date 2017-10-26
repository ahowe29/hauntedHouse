import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import GridList1 from './GridList.js';
import AutoPlay from './Carousel.js';
import logo from '../assets/nightmareonconsvdrive.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{paddingTop:'25px'}}>
        <header className="App-header">

            <img height="90%" width="90%" src={logo}/>


        </header>

        </div>
        <div className="row" style={{paddingTop:'20px', width:'100%'}}>
        <div className="col-sm-6" style={{paddingRight:'15px', width:'36%', display:'inline-block', paddingTop:'22px'}}>
          <GridList1/>
        </div>
        <div className="col-sm-6" className="spooky" style={{height:'50%', width:'60%', display:'inline-block', paddingTop:'15px', paddingRight:'30px', float:'left'}}>
        <div className="row">
          <h1 style={{fontSize:'40px', marginTop:'0px', paddingRight:'20px', textAlign:'center'}}> {"Engineered specifically for your terror"} </h1>
          <h5 className="nonspooky" > {"2017 dates: October 27-31"} </h5>
        </div>
        <div className="row" className="bright" style={{paddingLeft:'40px', height:'10%', width:'90%', textAlign:'center'}}>
          <AutoPlay/>
        </div>
        </div>

        </div>
      </div>
    );
  }
}

export default Home;
