import React, { Component } from 'react';
import './App.css';
import Kim from './assets/kim-pi-shirt.jpeg';
import Frank from './assets/da-pi-shirt.JPG';
import { DefaultPlayer as Video } from 'react-html5video';
import '../node_modules/react-html5video/dist/styles.css';
import beetlejuice from './assets/beetlejuice-timelapse.MOV';

class HowItWorks extends Component {
  render() {
    return (
      <div style={{paddingTop:'25px', display:'block'}}>
      <header className="App-header">
          <h1 className="App-title">Behind the scare</h1>
      </header>
      <div className="row" style={{display:'inline-block', height:'40%', width:'40%', paddingRight:'0px', float:"left"}}>
          <h1>Meet the Engineers Behind Nightmare On Conservation Drive</h1>
          <div className="col-sm-4" style={{display:'inline-block', height:'15%', width:'25%', paddingRight:'80px'}}>
            <h2>Kim Smith</h2>
            <img src={Kim} height="250px" />
          </div>
          <div className="col-sm-4" style={{display:'inline-block', height:'15%', width:'25%', paddingLeft:'30px'}}>
            <h2>Frank Smith</h2>
            <img src={Frank} height="250px" />
          </div>
          <p style={{paddingLeft:"40px", fontSize:'1.5em'}}>{"Kim and Frank Smith are a daughter/father team who spend all year designing and building scary movie themed animatronics.  Kim is responsible for all the artistic work: the mannequins, costume sewing, the sets, and the pumpkin carving.  Kim and Frank split the engineering and computer programming.  They are both computer engineers by trade. Kim’s passion for all things Halloween sparked the walk through in 2013, and it’s grown in size and complexity every year."}</p>
      </div>
      <div className="row" style={{display:'inline-block', height:'40%', width:'60%', paddingTop:"2%"}}>

          <div className="col-sm-4" style={{display:'inline-block', height:'5%', width:'45%'}}>
          <h2>An Animatronic From the Exhibit</h2>
          <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="./assets/rave.jpeg"
            style={{height:"50%"}}
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src={beetlejuice} type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en"  default />
          </Video>
          </div>

        </div>
      </div>
    );
  }
}

export default HowItWorks;
