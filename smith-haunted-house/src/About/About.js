import React, { Component } from 'react';
import '../App.css';
import './About.css';
import {
withScriptjs,
withGoogleMap,
GoogleMap,
Marker,
} from 'react-google-maps';
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import logo from '../assets/nightmareonconsvdrive.jpg';

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 38.8383862, lng: -77.2788403 }}
  >


  </GoogleMap>
));

class About extends Component {
  render() {
    return (
      <div style={{paddingTop:'25px'}}>
      <header className="App-header">


          <img height="90%" width="90%" src={logo}/>

      </header>
      <div className="row" style={{padding:'20px', display:'inline-block'}} >
        <div className="col-sm-6" style={{width:'50%', height:'60%', float:'right', display:'inline-block'}}>
          <h1> About the House </h1>

          <div className="border" height="100%" style={{display:'inline-block'}}>
          <div className="row">
          <h3 style={{paddingTop:'9px', textAlign:'center', margin:'0px', fontSize:"30px", fontWeight:"500"}}> {"Open October 27-31, 2017"} </h3>
            <h4 className="light" style={{ fontWeight:'50px', textAlign:'center', display:'block'}}>best at night but open all day</h4>
            </div>
            <div className="col-sm-6" style={{display:'inline-block', width:'50%', float:"left"}}>
            <p style={{paddingTop:'0px', paddingLeft:'15px', paddingRight:'15px', paddingBottom:"10px"}}>
            {"The house first debuted in 2013 and has grown"}
             {" in size and complexity every year."}
             {" The exhibit is worked on 365 days a year"}
             {" and contains 20 motors, 12 computers, 8 speakers,"}
             {" 8 speakers, and 5 motion sensors. Stephen King originally "}
             {"inspired this exhibit with his unique brand of horror stories."}
             {"The attraction has been extended to include all scary movies, "}
             {"but King’s The Shining was the original inspiration for a life-sized walk-through."}
             </p>

             </div>
           <div className="col-sm-6" style={{width:'50%', height:'100%', display:'inline-block'}}>
              <h3 style={{paddingTop:'0px', paddingLeft:'15px', paddingRight:'15px'}}> {"House Rules"} </h3>
                  <ul style={{paddingBottom:'35px'}}>
                    <li className="list">{"Stay on the lit paths."}</li>
                    <li className="list">{" None of the animatronics are alive. Nothing will touch you."}</li>
                    <li className="list">{" Please don't touch anything unless the sign says you can."}</li>
                    <li className="list">{"Don't forget your candy!"}</li>
                    <li className="list">{"Have a Happy halloween!"}</li>
                  </ul>


           </div>
           </div>


        </div>
        <div className="col-sm-6" style={{width:'45%', height:'50%'}}>
        <h1 className=""> {"Where to find us... if you dare"} </h1>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRiCzMz2ujr7dNiMss7Zaw-0gl6_Wl-h4&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default About;
