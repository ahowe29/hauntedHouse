import React, { Component } from 'react';
import './App.css';
import AutoPlay from './Home/Carousel.js'
import logo from './assets/nightmareonconsvdrive.jpg';
import princess from './assets/princessButtercup.JPG';

class Contact extends Component {
  render() {
    return (
      <div style={{paddingTop:'25px', display:'inline-block'}}>
      <header className="App-header">

      <img height="90%" width="90%" src={logo}/>

      </header>
      <div className="row" style={{paddingTop:"10px", textAlign:'left'}}>

      <div className="col-sm-3" style={{width:'40%', height:'50%', textAlign:'center', display:'inline-block'}}>
        <h2 style={{fontSize:'30px', paddingTop:'10%', display:'inline-block'}}> Behind the Scenes</h2>
        <p style={{paddingTop:'0px', paddingLeft:"10%", fontSize:'30px', display:'inline-block'}}>{"If you’re interested in seeing how any of our props work, please ask! We love to show off the guts and motors.  Especially if future engineers (middle and high schoolers) are curious, we are happy to have a behind the scenes tour during the daytime."}</p>
      </div>
      <div className="col-sm-6" style={{float:'right', width:'45%', height:'50%', paddingRight:'10px', paddingTop:'10%',display:'inline-block'}}>
        <h2>Email:  <a href="https://info@nightmareonconservationdrive.com/"> info@nightmareonconservationdrive.com</a></h2>
        <h2>Portfolio:  <a href="https://kimsmith.crevado.com/"> {"https://kimsmith.crevado.com/"}</a></h2>

      </div>


      </div>
      </div>
    );
  }
}

export default Contact;
